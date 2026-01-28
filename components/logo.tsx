import Link from "next/link";

export const LogoSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

// const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     width={500}
//     zoomAndPan="magnify"
//     viewBox="0 0 375 374.999991"
//     height={500}
//     preserveAspectRatio="xMidYMid meet"
//     {...props}
//   >
//     <defs>
//       <clipPath id="a7677e217c">
//         <path
//           d="M 32.511719 43.066406 L 343 43.066406 L 343 302.980469 L 32.511719 302.980469 Z M 32.511719 43.066406 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="d39483b55b">
//         <path
//           d="M 187.5 43.066406 L 342.488281 302.980469 L 32.511719 302.980469 Z M 187.5 43.066406 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="85e5724bca">
//         <path
//           d="M 0.511719 0.0664062 L 310.71875 0.0664062 L 310.71875 259.980469 L 0.511719 259.980469 Z M 0.511719 0.0664062 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="90482ede3b">
//         <path
//           d="M 155.5 0.0664062 L 310.488281 259.980469 L 0.511719 259.980469 Z M 155.5 0.0664062 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="29f20ebb91">
//         <rect x={0} width={311} y={0} height={260} />
//       </clipPath>
//       <clipPath id="3787e2b4db">
//         <path
//           d="M 32.511719 173.023438 L 343 173.023438 L 343 375 L 32.511719 375 Z M 32.511719 173.023438 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="f83ba60688">
//         <path
//           d="M 187.5 173.023438 L 342.488281 432.9375 L 32.511719 432.9375 Z M 187.5 173.023438 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="d47cd354e1">
//         <path
//           d="M 0.511719 0.0234375 L 310.71875 0.0234375 L 310.71875 202 L 0.511719 202 Z M 0.511719 0.0234375 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="1dd1fd36d2">
//         <path
//           d="M 155.5 0.0234375 L 310.488281 259.9375 L 0.511719 259.9375 Z M 155.5 0.0234375 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="deb2d6adc4">
//         <rect x={0} width={311} y={0} height={202} />
//       </clipPath>
//       <clipPath id="f9281e9636">
//         <path
//           d="M 135 95 L 189 95 L 189 182 L 135 182 Z M 135 95 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="884c741431">
//         <path
//           d="M 135.042969 99.421875 L 141.378906 95.734375 L 188.929688 177.382812 L 182.59375 181.070312 Z M 135.042969 99.421875 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="f463ed7fcf">
//         <path
//           d="M 0 0.519531 L 54 0.519531 L 54 86.199219 L 0 86.199219 Z M 0 0.519531 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="77accc5d3a">
//         <path
//           d="M 0.0429688 4.421875 L 6.378906 0.734375 L 53.929688 82.382812 L 47.59375 86.070312 Z M 0.0429688 4.421875 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="68adb4e02c">
//         <rect x={0} width={54} y={0} height={87} />
//       </clipPath>
//       <clipPath id="36963d7637">
//         <path
//           d="M 57 63 L 191 63 L 191 181 L 57 181 Z M 57 63 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="1272cf3a52">
//         <path
//           d="M 224.605469 120.964844 L 156.796875 238.238281 L 57.710938 180.945312 L 125.519531 63.671875 Z M 224.605469 120.964844 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="a06c78ff4c">
//         <path
//           d="M 190.769531 179.480469 L 57.851562 180.707031 L 125.519531 63.671875 Z M 190.769531 179.480469 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="b3402d487b">
//         <path
//           d="M 0.839844 0.601562 L 133.800781 0.601562 L 133.800781 117.71875 L 0.839844 117.71875 Z M 0.839844 0.601562 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="9e48a0e079">
//         <path
//           d="M 167.605469 57.964844 L 99.796875 175.238281 L 0.710938 117.945312 L 68.519531 0.671875 Z M 167.605469 57.964844 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="de4cc3087e">
//         <path
//           d="M 133.769531 116.480469 L 0.851562 117.707031 L 68.519531 0.671875 Z M 133.769531 116.480469 "
//           clipRule="nonzero"
//         />
//       </clipPath>
//       <clipPath id="d4359df1d8">
//         <rect x={0} width={134} y={0} height={118} />
//       </clipPath>
//     </defs>
//     <g clipPath="url(#a7677e217c)">
//       <g clipPath="url(#d39483b55b)">
//         <g transform="matrix(1, 0, 0, 1, 32, 43)">
//           <g clipPath="url(#29f20ebb91)">
//             <g clipPath="url(#85e5724bca)">
//               <g clipPath="url(#90482ede3b)">
//                 <path
//                   fill="#000000"
//                   d="M 0.511719 0.0664062 L 310.171875 0.0664062 L 310.171875 259.980469 L 0.511719 259.980469 Z M 0.511719 0.0664062 "
//                   fillOpacity={1}
//                   fillRule="nonzero"
//                 />
//               </g>
//             </g>
//           </g>
//         </g>
//       </g>
//     </g>
//     <g clipPath="url(#3787e2b4db)">
//       <g clipPath="url(#f83ba60688)">
//         <g transform="matrix(1, 0, 0, 1, 32, 173)">
//           <g clipPath="url(#deb2d6adc4)">
//             <g clipPath="url(#d47cd354e1)">
//               <g clipPath="url(#1dd1fd36d2)">
//                 <path
//                   fill="#ffffff"
//                   d="M 0.511719 0.0234375 L 310.171875 0.0234375 L 310.171875 259.9375 L 0.511719 259.9375 Z M 0.511719 0.0234375 "
//                   fillOpacity={1}
//                   fillRule="nonzero"
//                 />
//               </g>
//             </g>
//           </g>
//         </g>
//       </g>
//     </g>
//     <g clipPath="url(#f9281e9636)">
//       <g clipPath="url(#884c741431)">
//         <g transform="matrix(1, 0, 0, 1, 135, 95)">
//           <g clipPath="url(#68adb4e02c)">
//             <g clipPath="url(#f463ed7fcf)">
//               <g clipPath="url(#77accc5d3a)">
//                 <path
//                   fill="#1a3860"
//                   d="M 0.0429688 4.421875 L 6.378906 0.734375 L 53.929688 82.375 L 47.59375 86.066406 Z M 0.0429688 4.421875 "
//                   fillOpacity={1}
//                   fillRule="nonzero"
//                 />
//               </g>
//             </g>
//           </g>
//         </g>
//       </g>
//     </g>
//     <g clipPath="url(#36963d7637)">
//       <g clipPath="url(#1272cf3a52)">
//         <g clipPath="url(#a06c78ff4c)">
//           <g transform="matrix(1, 0, 0, 1, 57, 63)">
//             <g clipPath="url(#d4359df1d8)">
//               <g clipPath="url(#b3402d487b)">
//                 <g clipPath="url(#9e48a0e079)">
//                   <g clipPath="url(#de4cc3087e)">
//                     <path
//                       fill="#ffffff"
//                       d="M 167.605469 57.964844 L 100.019531 174.851562 L 0.9375 117.558594 L 68.519531 0.671875 Z M 167.605469 57.964844 "
//                       fillOpacity={1}
//                       fillRule="nonzero"
//                     />
//                   </g>
//                 </g>
//               </g>
//             </g>
//           </g>
//         </g>
//       </g>
//     </g>
//   </svg>
// );
// export default SVGComponent;



const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500.000000pt"
    height="500.000000pt"
    viewBox="0 0 500.000000 500.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <g
      transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M2321 3590 l-173 -289 172 -303 c94 -167 285 -494 425 -728 140 -234 303 -507 362 -607 l108 -183 359 0 c282 0 357 3 353 13 -11 28 -1418 2382 -1425 2385 -5 1 -86 -128 -181 -288z" />
      <path d="M1765 2613 c-28 -4 -52 -41 -360 -559 -181 -305 -331 -559 -333 -564 -2 -6 131 -10 355 -10 l358 1 310 521 c171 286 323 543 338 569 l29 49 -334 -2 c-183 0 -346 -3 -363 -5z" />
    </g>
  </svg>
);
export default SVGComponent;


export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* <LogoSVG /> */}
      <SVGComponent className="size-10
text-black dark:text-white" />
      {/* <span className="text-2xl font-medium">Agentixly</span> */}
    </Link>
  );
};
