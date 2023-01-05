import React from 'react';

function SvgIconToolAnnotation(props: React.SVGProps<SVGSVGElement> = {}) {
  return (
    <svg
      width="27"
      height="25"
      viewBox="0 0 27 25"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4D5056"
      {...props}
    >
      <path d="M19 1.5C19 0.671573 18.3284 0 17.5 0H1C0.447715 0 0 0.447716 0 1V24C0 24.5523 0.447716 25 1 25H24C24.5523 25 25 24.5523 25 24V9.5C25 8.67157 24.3284 8 23.5 8C22.6716 8 22 8.67157 22 9.5V21C22 21.5523 21.5523 22 21 22H4C3.44771 22 3 21.5523 3 21V4C3 3.44771 3.44772 3 4 3H17.5C18.3284 3 19 2.32843 19 1.5Z" />
      <path d="M23.5 7C23.8094 7 24.1062 6.87708 24.325 6.65829C24.5438 6.4395 24.6667 6.14275 24.6667 5.83333V4.66667H25.8333C26.1428 4.66667 26.4395 4.54375 26.6583 4.32496C26.8771 4.10617 27 3.80942 27 3.5C27 3.19058 26.8771 2.89383 26.6583 2.67504C26.4395 2.45625 26.1428 2.33333 25.8333 2.33333H24.6667V1.16667C24.6667 0.857247 24.5438 0.560501 24.325 0.341709C24.1062 0.122916 23.8094 0 23.5 0C23.1906 0 22.8938 0.122916 22.675 0.341709C22.4562 0.560501 22.3333 0.857247 22.3333 1.16667V2.33333H21.1667C20.8572 2.33333 20.5605 2.45625 20.3417 2.67504C20.1229 2.89383 20 3.19058 20 3.5C20 3.80942 20.1229 4.10617 20.3417 4.32496C20.5605 4.54375 20.8572 4.66667 21.1667 4.66667H22.3333V5.83333C22.3333 6.14275 22.4562 6.4395 22.675 6.65829C22.8938 6.87708 23.1906 7 23.5 7Z" />
    </svg>
  );
}

export default SvgIconToolAnnotation;