declare module 'react/jsx-runtime' {
  const content: any;
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}