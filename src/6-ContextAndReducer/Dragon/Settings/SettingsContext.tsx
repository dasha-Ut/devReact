import { createContext, useContext, useState } from 'react';
import { ProviderProps } from '../../../types/ProviderProps';

import { MAX_MOVE_DELAY, MOVE_DELAY } from '../constants';

export interface SettingsContextState {
    // which grid is used
    useAlternativeGrid: boolean;
    // setter, to change current grid type
    switchGrid: () => void;
    // interval(ms) between two moves
    moveDelay: number;
    // fn to set moveDelay
    changeMoveDelay: () => void;
}

const defaultValue: any = null;
const SettingsContext = createContext<SettingsContextState>(defaultValue);

export function useSettingsContext() {
    const contextValue = useContext(SettingsContext);
    if (!contextValue) {
        throw new Error('Settings context is only available under SettingsContextProvider!');
    }
    return contextValue;
}

export function SettingsContextProvider({ children }: ProviderProps): JSX.Element {
    const [useAlternativeGrid, setUseAlternativeGrid] = useState<boolean>(false);
    const [moveDelay, setMoveDelay] = useState<number>(MOVE_DELAY);

    const changeMoveDelay = () => {
        setMoveDelay((value) => {
            return value === MAX_MOVE_DELAY ? MOVE_DELAY : value + MOVE_DELAY;
        });
    };

    const switchGrid = () => {
        setUseAlternativeGrid((value) => !value);
    };

    const contextValue: SettingsContextState = {
        useAlternativeGrid,
        switchGrid,
        moveDelay,
        changeMoveDelay,
    };

    return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>;
}