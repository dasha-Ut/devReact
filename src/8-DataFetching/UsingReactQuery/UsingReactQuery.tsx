import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChapterWrapper } from '../../components/ChapterWrapper/ChapterWrapper';
import { Tabs } from '../../components/Tabs/Tabs';

import { queryFunction } from './api/queryFunction';
import { Profile } from './Profile';
import { TodoList } from './TodoList';
import { TopPanel } from './TopPanel/TopPanel';

const TABS: string[] = ['👤 User Profile', '✅ Todos List'];

// configuration
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //queryFn - це асинхронна функція, що приймає на вхід queryKey (унікальний ідентифікатор query),
            //  і робить безпосередньо запит.
            queryFn: queryFunction,
            //refetchOnReconnect і refetchOnWindowFocus відповідають за те, коли слід зробити повторний запит 
            // (якщо конекшн відновився чи вкладка браузера знову отримала фокус і стала активною відповідно). 
            refetchOnReconnect: true,
            refetchOnWindowFocus: true,
        },
    },
});

export function UsingReactQuery() {
    return (
        <ChapterWrapper title="React Query" subtitle="Data fetching">
            <QueryClientProvider client={queryClient}>
                <TopPanel />
                <Tabs tabs={TABS}>
                    <Profile />
                    <TodoList />
                </Tabs>
            </QueryClientProvider>
        </ChapterWrapper>
    );
}