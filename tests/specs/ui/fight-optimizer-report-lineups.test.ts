import { describe, expect, it } from 'vitest';
import type { FightOptimizerResult, PetConfig } from 'sap-battle-engine';
import { getFightOptimizerLineup } from 'app/ui/components/fight-optimizer-report/fight-optimizer-report-lineups';

const ant: PetConfig = { name: 'Ant', attack: 2, health: 1 };
const fish: PetConfig = {
  name: 'Fish',
  attack: 3,
  health: 4,
  equipment: 'Garlic',
};

function makeResult(): FightOptimizerResult {
  return {
    evidence: 'sampled',
    termination: 'cycle',
    positionings: {
      player: [
        { id: 0, order: [0, 1, 2] },
        { id: 1, order: [1, 0, 2] },
      ],
      opponent: [{ id: 0, order: [0] }],
    },
    steps: [],
    finalPosition: {
      playerOrder: [1, 0, 2],
      playerPets: [fish, ant, null],
      opponentOrder: [0],
      opponentPets: [null],
    },
    matchups: [],
    stats: {
      simulations: 0,
      evaluatedMatchups: 0,
      potentialMatchups: 2,
      cacheHits: 0,
      engineCalls: 0,
      seed: 1,
      elapsedMs: 0,
    },
  };
}

describe('fight optimizer report lineups', () => {
  it('reconstructs any response order from the arranged final pets', () => {
    const result = makeResult();

    expect(getFightOptimizerLineup(result, 'player', 0)).toEqual([
      ant,
      fish,
      null,
    ]);
    expect(getFightOptimizerLineup(result, 'player', 1)).toEqual([
      fish,
      ant,
      null,
    ]);
  });

  it('returns no lineup for an unknown position id', () => {
    expect(getFightOptimizerLineup(makeResult(), 'player', 99)).toEqual([]);
  });
});
