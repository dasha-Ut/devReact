import { cloneDeep, merge } from 'lodash';
import { useState } from 'react';
import { DeepPartial } from 'tsdef';

// type Partial - optional fields in object 
// type partialPerson = Partial<Person>
// interface Person = {
//  name? = string | undefined,
//  age? = number | null | undefined
//  address?: {
//       city: 'New York',
//       street: 'Broadway',
//       house: 44,
// } | undefined

// type DeepPartial - optional fields in object , also in nested levels
// type deepPartialPerson = DeepPartial<Person>
// interface Person = {
//  name? = string | undefined,
//  age? = DeepPartial <number | null> | undefined,
//  address?: DeepPartial<{
//      city: 'New York',
//      street: 'Broadway',
 //     house: 44,
// }> | undefined


//our parameterized type . returns T - default value, and function for state update         
type UseMergeState<T> = [T, (change: DeepPartial<T>) => void];

//                           type T, what will be in type, when call this hook/
export function useMergedState<T>(initialState: T): UseMergeState<T> { //gereric hook- type param can be different (what we will send , when call this hook)
  const [state, setState] = useState<T>(initialState);

  //                  receive some part of T (param)
  const mergeState = (changes: DeepPartial<T>) => {
    setState((prevState) => {
      // copy all nested elements and levels of prevState
      const clone = cloneDeep(prevState);
      // on copy of prevState, put from above (top) deeppartial changes
      // join to objects and when values is diff, chose right one
      return merge(clone, changes);
    });
  };

  return [state, mergeState];
}