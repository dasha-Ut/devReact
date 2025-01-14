import { Button } from '../../../components/Button/Button';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useEffect, useState } from 'react';

import { HIGH_SCORE_KEY } from '../constants';
import { useGameContext } from '../GameContext/GameContext';
import { ActionType, GameStatus } from '../types';
import { CurrentDirection } from './CurrentDirection';
import classes from './GameControls.module.css';
import { GameOverModal } from './GameOverModal';
import { Score } from './Score';

export function GameControls() {
    const [state, dispatch] = useGameContext();
    const { gameStatus, points, direction } = state;

    const [highScore, setHighScore] = useLocalStorage<number | null>(HIGH_SCORE_KEY, 0);
    const [prevHighScore, setPrevHighScore] = useState<number>(highScore ?? 0);

    useEffect(() => {
        if (gameStatus === GameStatus.FINISHED) {
            setPrevHighScore(highScore ?? 0);
            setHighScore(Math.max(highScore ?? 0, points));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameStatus]);

    if (gameStatus === GameStatus.FINISHED) {
        return (
            <GameOverModal
                points={points}
                prevHighScore={prevHighScore}
                onPlayAgain={() => dispatch({ type: ActionType.PLAY_AGAIN })}
            />
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.score}>
                {gameStatus !== GameStatus.IDLE && (
                    <>
                        <Score value={points} delay={100} step={15} />
                        <br />
                        <CurrentDirection direction={direction} />
                    </>
                )}
            </div>
            <div className={classes.buttons}>
                {gameStatus === GameStatus.IDLE && (
                    <Button text="Start" onClick={() => dispatch({ type: ActionType.PLAY })} />
                )}
                {gameStatus === GameStatus.PLAYING && (
                    <Button text="Pause" onClick={() => dispatch({ type: ActionType.PAUSE })} />
                )}
                {gameStatus === GameStatus.PAUSED && (
                    <Button text="Resume" onClick={() => dispatch({ type: ActionType.PLAY })} />
                )}
            </div>
        </div>
    );
}