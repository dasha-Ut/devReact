import { Toolbar } from '../../components/Toolbar/Toolbar';

import { ThemeButton } from './Theme/ThemeButton';
import { ThemeProvider } from './Theme/ThemeContext';
import { ThemeToolbar } from './Theme/ThemeToolbar';
import { UserProvider } from './User/UserContext';
import { UserProfile } from './User/UserProfile';

export function UseContext(): JSX.Element {
    return (
        <div> useContext - Solving the props drilling problem
            <ThemeProvider>
                {/* you can get current theme in any component in this subtree */}
                <ThemeToolbar />
                <Toolbar>
                    <ThemeButton text="Primary Button" />
                    <ThemeButton text="Disabled Button" disabled />
                </Toolbar>
                <UserProvider userId={1}>
                    {/* you can get user details in any component in this subtree */}
                    <UserProfile />
                </UserProvider>
            </ThemeProvider>
        </div>
    );
}