import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import type {
  FightOptimizerResult,
  OptimizerSide,
  PetConfig,
  Positioning,
} from 'sap-battle-engine';
import {
  getEquipmentIconPath,
  getPetIconPath,
} from 'app/runtime/asset-catalog';
import { AILMENT_CATEGORIES } from 'app/integrations/equipment/equipment-categories';
import { getPetConfigEquipmentName } from 'app/integrations/equipment/pet-config-equipment';
import { getFightOptimizerLineup } from './fight-optimizer-report-lineups';
import type { FightOptimizerLineup } from './fight-optimizer-report-lineups';

export type FightOptimizerApplyScope = OptimizerSide | 'both';

const AILMENT_NAMES = new Set(Object.values(AILMENT_CATEGORIES).flat());

@Component({
  selector: 'app-fight-optimizer-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fight-optimizer-report.component.html',
  styleUrl: './fight-optimizer-report.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FightOptimizerReportComponent {
  private optimizationResult: FightOptimizerResult | null = null;
  private readonly traceLineupCache = new Map<
    string,
    FightOptimizerLineup
  >();

  @Input()
  set result(value: FightOptimizerResult | null) {
    this.optimizationResult = value;
    this.traceLineupCache.clear();
  }

  get result(): FightOptimizerResult | null {
    return this.optimizationResult;
  }

  @Output() applyLineup = new EventEmitter<FightOptimizerApplyScope>();
  @Output() dismiss = new EventEmitter<void>();

  terminationLabel(result: FightOptimizerResult): string {
    const labels: Record<FightOptimizerResult['termination'], string> = {
      cycle: 'Response cycle found',
      'no-sampled-counter': 'No sampled counter',
      'simulation-budget': 'Simulation budget reached',
      'step-limit': 'Response-step limit reached',
      cancelled: 'Cancelled',
    };
    return labels[result.termination];
  }

  terminationDescription(result: FightOptimizerResult): string {
    if (result.termination === 'cycle' && result.cycle) {
      return `The response path repeated after ${result.cycle.length} state${
        result.cycle.length === 1 ? '' : 's'
      }.`;
    }
    if (result.termination === 'no-sampled-counter' && result.unbeatenSide) {
      return `${this.sideLabel(result.unbeatenSide)} had no sampled winning counter-position.`;
    }
    if (result.termination === 'simulation-budget') {
      return 'The configured battle budget was exhausted; the result is intentionally incomplete.';
    }
    if (result.termination === 'step-limit') {
      return 'The response-step limit was reached; the result is intentionally incomplete.';
    }
    return 'The search stopped before completing another response.';
  }

  sideLabel(side: OptimizerSide): string {
    return side === 'player' ? 'Player' : 'Opponent';
  }

  petIcon(pet: PetConfig | null): string | null {
    return pet?.name ? getPetIconPath(pet.name) : null;
  }

  equipmentName(pet: PetConfig | null): string | null {
    return getPetConfigEquipmentName(pet?.equipment);
  }

  equipmentIcon(pet: PetConfig | null): string | null {
    const equipmentName = this.equipmentName(pet);
    return equipmentName
      ? getEquipmentIconPath(
          equipmentName,
          AILMENT_NAMES.has(equipmentName),
        )
      : null;
  }

  traceLineup(
    result: FightOptimizerResult,
    side: OptimizerSide,
    positionId: number,
  ): FightOptimizerLineup {
    const cacheKey = `${side}:${positionId}`;
    const cachedLineup = this.traceLineupCache.get(cacheKey);
    if (cachedLineup) {
      return cachedLineup;
    }

    const lineup = getFightOptimizerLineup(result, side, positionId);
    this.traceLineupCache.set(cacheKey, lineup);
    return lineup;
  }

  formatOrder(order: number[]): string {
    return order.map((slot) => slot + 1).join(' → ');
  }

  formatPosition(position: Positioning): string {
    return `#${position.id + 1}: ${this.formatOrder(position.order)}`;
  }
}
