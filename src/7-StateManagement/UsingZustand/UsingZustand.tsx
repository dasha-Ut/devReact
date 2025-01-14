import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';
import { GridController } from './GridController';
import { ToolbarController } from './ToolbarController';
import classes from './UsingZustand.module.css';

export function UsingZustand() {
    return (
        <ChapterWrapper title="Zustand" subtitle="State management">
            <div className={classes.root}>
                <ToolbarController />
                <div className={classes.gridContainer}>
                    <GridController />
                </div>
            </div>
        </ChapterWrapper>
    );
}