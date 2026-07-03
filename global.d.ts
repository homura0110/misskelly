import 'react';

declare module 'react/jsx-runtime' {
  export default any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}