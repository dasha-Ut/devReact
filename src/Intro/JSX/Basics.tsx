import { createElement } from 'react';

export function ReactWithoutJsx() {
  const props = {
    title: 'React without JSX',
    subtitle: 'Introduction to JSX',
    children: createElement(
      'p',
      { style: { fontSize: '18px' } },
      `You don't have to use JSX, but the code is much harder to work without it.`
    ),
  };
  return createElement('div', props);
}

export function SameThingWithJsx(): JSX.Element {
  return (
    <>
      <p style={{ fontSize: '18px' }}>
        You don't have to use JSX, but the code is much harder to read without it.
      </p>
    </>
  );
}