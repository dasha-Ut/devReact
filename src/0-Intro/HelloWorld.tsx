import { JSX } from "react";

export function HelloWorld(): JSX.Element {
    return <div>Hello, world! 👽</div>;
}

export const AlsoHelloWorld = () => {
    return <div style={{ padding: '20px' }}> Also hello, world! 👽</div>;
};