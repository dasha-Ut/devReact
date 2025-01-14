import { generateRandomInt } from '../../../../utils/generateRandomInt';
import { getRandomArrayElement } from '../../../../utils/getRandomArrayElement';

import { ANIMALS } from '../../constants';
import { GameContextState, Animal } from '../../types';
import { buildGrid } from './gridUtils';

export function spawnAnimal(state: GameContextState): GameContextState {
  const { rows, cols, snakeHead, vegetables } = state;

  const randomVegetable: Animal = {
    row: generateRandomInt(0, rows - 1),
    col: generateRandomInt(0, cols - 1),
    character: getRandomArrayElement(ANIMALS),
  };

  return {
    ...state,
    vegetables: [...vegetables, randomVegetable],
    grid: buildGrid(rows, cols, snakeHead, vegetables),
  };
}