import * as React from 'react';

function SvgIconGroup(props) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5625 6.125H23.4375C24.2969 6.125 25 5.42188 25 4.5625C25 3.70312 24.2969 3 23.4375 3H1.5625C0.703125 3 0 3.70312 0 4.5625C0 5.42188 0.703125 6.125 1.5625 6.125ZM23.4375 18.6249H1.5625C0.703125 18.6249 0 19.3281 0 20.1874C0 21.0468 0.703125 21.7499 1.5625 21.7499H23.4375C24.2969 21.7499 25 21.0468 25 20.1874C25 19.3281 24.2969 18.6249 23.4375 18.6249ZM23.4375 10.8126H1.5625C0.703125 10.8126 0 11.5157 0 12.3751C0 13.2344 0.703125 13.9376 1.5625 13.9376H23.4375C24.2969 13.9376 25 13.2344 25 12.3751C25 11.5157 24.2969 10.8126 23.4375 10.8126Z"
      />
    </svg>
  );
}

export default SvgIconGroup;