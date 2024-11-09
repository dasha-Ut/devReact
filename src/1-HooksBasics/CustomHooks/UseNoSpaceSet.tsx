import React, { useState } from 'react';

export default function App() {
  const [value, setValue] = useNoSpaceString('');

  return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />;
}

function useNoSpaceString(initialValue: any) {
  const [value, setValue] = useState(initialValue);


  const noSpaceSetValue = (newValue: any) => {
    const noSpaces = newValue.replace(/\s+/g, '')
    setValue(noSpaces)
  }

  return [value, noSpaceSetValue];
}
