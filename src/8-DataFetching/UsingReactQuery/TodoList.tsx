import { EmojiButton } from '../../components/EmojiButton/EmojiButton';
import { useTodoList } from './hooks/useTodoList';

export function TodoList() {
    const { data, refetch } = useTodoList();

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <EmojiButton emoji="🔄" tooltip="Refetch" onClick={() => refetch()} />
                    </th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((todo, index) => (
                    <tr key={todo.id}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? '✅' : null}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}