import * as React from 'react';

function SvgIconPicture(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.5663 0.5H3.20432C1.52623 0.5 0.110352 1.86517 0.110352 3.5V12.5C0.110352 14.1348 1.52623 15.5 3.2218 15.5H14.4964C16.1745 15.5 17.6079 14.1348 17.6079 12.5V3.5C17.6778 1.86517 16.2619 0.5 14.5663 0.5ZM15.8074 12.5843C15.8074 13.2753 15.283 13.8652 14.5663 13.8652H3.20432C2.48764 13.8652 1.87584 13.2584 1.87584 12.5843V3.5C1.87584 2.80899 2.50512 2.2191 3.20432 2.2191H14.4789C15.1956 2.2191 15.8074 2.82584 15.8074 3.5V12.5843Z" />
      <path d="M12.9757 3.41573C12.6261 3.41573 12.259 3.58427 11.9968 3.83708C11.7346 4.08989 11.6472 4.35955 11.6472 4.69663C11.6472 5.38764 12.2765 5.97753 12.9757 5.97753C13.6749 5.97753 14.3041 5.37079 14.3041 4.69663C14.3041 4.02247 13.6749 3.41573 12.9757 3.41573Z" />
      <path d="M11.9094 6.92135C11.6472 6.3146 10.7557 6.23034 10.3187 6.75281L9.16501 8.38764C8.81541 8.91011 8.01133 8.91011 7.66173 8.38764L7.31213 7.96629C6.96253 7.44382 6.15844 7.54494 5.80884 8.05056L3.8336 11.0506C3.484 11.6573 3.8336 12.4157 4.63768 12.4157H12.9757C13.6049 12.4157 14.0419 11.7247 13.7797 11.1348L11.9094 6.92135Z" />
    </svg>
  );
}

export default SvgIconPicture;