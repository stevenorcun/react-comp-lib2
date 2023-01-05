import React from 'react';
import { STYLE_BY_FILL_COLORS } from '@/constants/graph-themes';

const IconStickyNote = (props: React.SVGProps<SVGSVGElement> = {}) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill={STYLE_BY_FILL_COLORS.DEFAULT_STYLE.blueByDefault}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M39.9442 23.6447C39.9594 23.5089 39.9594 23.3719 39.9442 23.2362V5.69694C39.9442 4.35 39.4045 3.05758 38.4425 2.10107C37.4805 1.14455 36.1742 0.601389 34.8079 0.589844H5.2041C3.8301 0.589844 2.51238 1.12791 1.54082 2.08568C0.569256 3.04344 0.0234375 4.34245 0.0234375 5.69694V34.8803C0.0234375 35.551 0.157439 36.2151 0.417792 36.8347C0.678145 37.4543 1.05975 38.0173 1.54082 38.4916C2.02189 38.9658 2.593 39.342 3.22155 39.5987C3.85009 39.8553 4.52377 39.9874 5.2041 39.9874H22.9664C23.1041 40.0025 23.2431 40.0025 23.3808 39.9874H23.6177H23.7953L24.0469 39.8707L24.1801 39.7977C24.303 39.7171 24.4171 39.6242 24.5206 39.5205L39.3225 24.9288C39.4606 24.7887 39.58 24.6318 39.6777 24.4619V24.3451C39.8095 24.1298 39.8998 23.8924 39.9442 23.6447ZM4.46401 34.8803V5.69694C4.46401 5.50344 4.54198 5.31787 4.68078 5.18104C4.81957 5.04422 5.00782 4.96735 5.2041 4.96735H34.8079C35.0042 4.96735 35.1924 5.04422 35.3312 5.18104C35.47 5.31787 35.548 5.50344 35.548 5.69694V21.0182H25.9268C24.5528 21.0182 23.235 21.5563 22.2635 22.514C21.2919 23.4718 20.7461 24.7708 20.7461 26.1253V35.6099H5.2041C5.00782 35.6099 4.81957 35.533 4.68078 35.3962C4.54198 35.2594 4.46401 35.0738 4.46401 34.8803ZM25.1867 32.5165V26.1253C25.1867 25.9318 25.2646 25.7462 25.4034 25.6094C25.5422 25.4726 25.7305 25.3957 25.9268 25.3957H32.41L25.1867 32.5165ZM7.70562 10.0744C7.70562 9.49395 7.93954 8.93723 8.35593 8.52676C8.77231 8.11629 9.33705 7.88569 9.92591 7.88569H30.6486C31.2374 7.88569 31.8022 8.11629 32.2185 8.52676C32.6349 8.93723 32.8688 9.49395 32.8688 10.0744C32.8688 10.6549 32.6349 11.2117 32.2185 11.6221C31.8022 12.0326 31.2374 12.2632 30.6486 12.2632H9.92591C9.33705 12.2632 8.77231 12.0326 8.35593 11.6221C7.93954 11.2117 7.70562 10.6549 7.70562 10.0744ZM18.0669 17.3703C18.0669 17.9508 17.833 18.5075 17.4166 18.918C17.0003 19.3284 16.4355 19.559 15.8467 19.559H9.92591C9.33705 19.559 8.77231 19.3284 8.35593 18.918C7.93954 18.5075 7.70562 17.9508 7.70562 17.3703C7.70562 16.7898 7.93954 16.2331 8.35593 15.8226C8.77231 15.4121 9.33705 15.1815 9.92591 15.1815H15.8467C16.4355 15.1815 17.0003 15.4121 17.4166 15.8226C17.833 16.2331 18.0669 16.7898 18.0669 17.3703Z" />
  </svg>
);

export default IconStickyNote;