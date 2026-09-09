import type {
  FightOptimizerResult,
  OptimizerSide,
  PetConfig,
} from 'sap-battle-engine';

export type FightOptimizerLineup = Array<PetConfig | null>;

/**
 * The optimizer reports orders as original input slots, while its final pets
 * are already arranged in the final order. Rebuild the original lineup first
 * so any response-state order can be rendered with the correct pets.
 */
export function getFightOptimizerLineup(
  result: FightOptimizerResult,
  side: OptimizerSide,
  positionId: number,
): FightOptimizerLineup {
  const finalOrder =
    side === 'player'
      ? result.finalPosition.playerOrder
      : result.finalPosition.opponentOrder;
  const finalPets =
    side === 'player'
      ? result.finalPosition.playerPets
      : result.finalPosition.opponentPets;
  const positioning = result.positionings[side].find(
    (candidate) => candidate.id === positionId,
  );

  if (!positioning) {
    return [];
  }

  const lineupSize = Math.max(
    finalPets.length,
    finalOrder.length,
    ...finalOrder.map((slot) => slot + 1),
  );
  const originalLineup: FightOptimizerLineup = Array.from(
    { length: lineupSize },
    (): PetConfig | null => null,
  );

  finalOrder.forEach((sourceSlot, currentSlot) => {
    originalLineup[sourceSlot] = finalPets[currentSlot] ?? null;
  });

  return positioning.order.map(
    (sourceSlot) => originalLineup[sourceSlot] ?? null,
  );
}
