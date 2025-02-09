import { createContext, ReactNode, useContext, useReducer } from 'react';
import { useState } from 'react';
import { generateRandomCreatures } from './UseTimeoutExample';
import { Creature } from './Creature';
const TARGETS_NUMBER = 10;
const PLAY_TIME = 10 * 1000;


// export type ContactsContextType = [ContactsState, Dispatch<Action>];

// const defaultValue: ContactsContextType = [
//     {
//         contacts: [],
//         selectedId: null,
//     },
//     (action: Action) => { },
// ];

//const ContactsContext = createContext<ContactsContextType>(defaultValue);

// export function useContacts() {
//     return useContext(ContactsContext);
// }

// export function ContactsProvider({ children }: { children: ReactNode }) {

//     const [caterpillars, setCaterpillars] = useState<Creature[]>(() =>
//         generateRandomCreatures(TARGETS_NUMBER),
//     );
//     const [butterflies, setButterflies] = useState<Creature[]>([]);
//     const [isPlaying, setPlaying] = useState<boolean>(true);


//     // const value = useReducer(contactsReducer, initialState);

//     return <ContactsContext.Provider value={value}>{children}</ContactsContext.Provider>;
// }