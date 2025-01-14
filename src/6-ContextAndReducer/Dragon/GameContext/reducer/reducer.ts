import { Action, ActionType, GameContextState, GameStatus } from '../../types';
import { move } from './move';
import { playAgain } from './playAgain';
import { setDirection } from './setDirection';
import { setGameStatus } from './setGameStatus';
import { spawnAnimal } from './spawnAnimal';

export function reducer(state: GameContextState, action: Action): GameContextState {
  switch (action.type) {
    case ActionType.PLAY:
      return setGameStatus(state, GameStatus.PLAYING);
    case ActionType.PAUSE:
      return setGameStatus(state, GameStatus.PAUSED);
    case ActionType.FINISH:
      return setGameStatus(state, GameStatus.FINISHED);
    case ActionType.PLAY_AGAIN:
      return playAgain();
    case ActionType.MOVE:
      return move(state);
    case ActionType.SPAWN_ANIMAL:
      return spawnAnimal(state);
    case ActionType.SET_DIRECTION:
      return setDirection(state, action.payload);
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}