import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';
import { GameContextProvider } from './GameContext/GameContext';
import { GameController } from './GameController/GameController';
import { GameControls } from './GameControls/GameControls';
import { GridController } from './grid/GridController';
import { SettingsContextProvider } from './Settings/SettingsContext';
import { SettingsToolbar } from './Settings/SettingsToolbar';
import classes from './Dragon.module.css';

export function Dragon() {
    return (
        <ChapterWrapper title="Vegan Dragon" subtitle="useContext + useReducer">
            <div className={classes.root}>
                <SettingsContextProvider>
                    <SettingsToolbar />
                    <div className={classes.gridContainer}>
                        <GameContextProvider>
                            <GameController />
                            <GridController />
                            <GameControls />
                        </GameContextProvider>
                    </div>
                </SettingsContextProvider>
            </div>
        </ChapterWrapper>
    );
}