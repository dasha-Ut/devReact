import { Toolbar } from '../../../components/Toolbar/Toolbar';
import { Avatar } from './Avatar';
import { LastUpdated } from './LastUpdated';
import { RefreshAll } from './RefreshAll';
import { TodoCounter } from './TodoCounter';
import { UserName } from './UserName';

export function TopPanel() {
    return (
        <Toolbar>
            <Avatar />
            <div style={{ flex: 1 }}>
                <UserName />
            </div>
            <TodoCounter />
            <LastUpdated />
            <RefreshAll />
        </Toolbar>
    );
}