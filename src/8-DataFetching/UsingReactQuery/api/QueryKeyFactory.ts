import { QueryKey } from '@tanstack/react-query';

export enum Queries {
    USER_DETAILS = 'user-details',
    TODO_LIST = 'todo-list',
    LAST_UPDATED = 'last-updated',
}

//фабрика (об'єкт, що вміє створювати інші сутності, в нашому випадку - ключі запитів).
// Ви передаєте фабриці дані, необхідні для певного запиту (параметри URL що допоможуть правильно ідентифікувати ресурс), 
// і отримуєте вже готовий queryKey. 
// Це стандартизує підхід для створення ключів у застосунку (до того ж не треба дублювати код створення ключа по всьому проекту).
export const QueryKeyFactory = {
    [Queries.USER_DETAILS]: (userId: number): QueryKey => [`users/${userId}`],
    [Queries.TODO_LIST]: (userId: number): QueryKey => [`todos?userId=${userId}`],
    [Queries.LAST_UPDATED]: (): QueryKey => ['lastUpdated'],
};