import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export async function queryFunction({ queryKey }: QueryFunctionContext) {
    //це массив елементів, що є одночасно і її унікальним ключем і чимось на кшталт dependency array хука useEffect. 
    // Коли щось в масиві queryKey змінюється, запит буде зроблено ще один раз автоматично. 
    // До того ж, по цьому ключу всі response автоматично кешуються. 
    const url = queryKey[0] as string;
    const { data } = await axiosInstance.get(url);
    return data;
}