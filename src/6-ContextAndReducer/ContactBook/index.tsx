//import { ChapterWrapper } from 'components';

import { ContactsProvider } from './ContactsContext';
import { ContactsList } from './ContactsList';
import { ContactsToolbar } from './ContactsToolbar';

export function ContactBook(): JSX.Element {
    return (
        <div> Contact book - useContext + useReducer
            <ContactsProvider>
                <ContactsToolbar />
                <ContactsList />
            </ContactsProvider>
        </div>
    );
}