import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { RouterPath } from '../../config/RouterPath';
import { useToggle } from '../../hooks/useToggle';
import { CSSProperties, ReactNode, Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { EasterEgg } from './EasterEgg';
import { ExpandToggle } from './ExpandToggle';
import classes from './MasterDetail.module.css';
import { MasterDetailContext } from './MasterDetailContext';
import { useContextValue } from './useContextValue';
import { WelcomeScreen } from './WelcomeScreen/WelcomeScreen';
import 'index.css'

const COLLAPSED_WIDTH = '44px';

const buildMasterStyle = (expanded: boolean): CSSProperties => ({
    minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
    maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
    width: expanded ? '25%' : COLLAPSED_WIDTH,
});

export function MasterDetail({ children }: { children: ReactNode }) {
    const contextValue = useContextValue();
    const [expanded, toggleExpanded] = useToggle(true);

    return (
        <BrowserRouter basename="/dev-react">
            <div className={classes.container}>
                <nav className={classes.master} style={buildMasterStyle(expanded)}>
                    <div className={classes.masterTitle + " " + "relative"}>
                        {expanded && (
                            <NavLink to={RouterPath.ROOT} className={classes.titleLink}>
                                <h3>Home</h3>
                            </NavLink>
                        )}
                        <ExpandToggle expanded={expanded} onClick={toggleExpanded} sideNav={true} />
                    </div>
                    {expanded && (
                        <div className={classes.tableOfContents}>
                            <MasterDetailContext.Provider value={contextValue}>
                                {children}
                            </MasterDetailContext.Provider>
                        </div>
                    )}
                </nav>

                <main className={classes.detail}>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            <Route path={RouterPath.ROOT} element={<WelcomeScreen />} />
                            <Route path={RouterPath.PAGE_NOT_FOUND} element={<WelcomeScreen />} />
                            {contextValue.routes.map((props) => (
                                <Route key={props.path} {...props} />
                            ))}
                        </Routes>
                    </Suspense>
                </main>
            </div>
            <EasterEgg />
        </BrowserRouter>
    );
}