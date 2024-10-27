import { PropsTable } from "../components/PropsTable";
import { useState, Dispatch, SetStateAction, ChangeEventHandler, ChangeEvent } from 'react';


interface User {
    id: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    country: string;
    addressLine1: string;
    addressLine2?: string;
}

const initialValue: User = {
    id: '1',
    firstName: 'Taras',
    middleName: 'Hryhorovych',
    lastName: 'Shevchenko',
    country: 'Ukraine',
    addressLine1: 'Cherkasy',

};


function buildChangeHandler(
    setter: Dispatch<SetStateAction<string>>
): ChangeEventHandler<HTMLInputElement> {
    return (event: ChangeEvent<HTMLInputElement>) => {
        setter(event.target.value);
    };
}


export function DirectStateMutation(): JSX.Element {

    const [user, setUser] = useState<User>(initialValue);
    const [addressLine1, setAddressLine1] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');

    const applyAddress = () => {
        setUser((value) => ({
            ...value,
            addressLine1,
        }));
    };

    const applyFirstName = () => {
        setUser((value) => ({
            ...value,
            firstName,
        }));
    };

    return (
        <div style={{ padding: '20px' }}>

            <div style={{ paddingTop: '20px' }}>
                <label> Set address</label>
                <input type="text" value={addressLine1} onChange={buildChangeHandler(setAddressLine1)} />
                <button onClick={applyAddress} >
                    {'Apply set address'}
                </button>
            </div>

            <div style={{ paddingTop: '20px' }}>
                <label> Set firstName</label>
                <input type="text" value={firstName} onChange={buildChangeHandler(setFirstName)} />
                <button onClick={applyFirstName} >
                    {'Apply set firstName'}
                </button>
            </div>


            <PropsTable title={`👤 User`} data={user} />
        </div>
    )
}