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
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={500}
    zoomAndPan="magnify"
    viewBox="0 0 375 374.999991"
    height={500}
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <defs>
      <filter x="0%" y="0%" width="100%" height="100%" id="285ee37a7b">
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          colorInterpolationFilters="sRGB"
        />
      </filter>
      <filter x="0%" y="0%" width="100%" height="100%" id="097204639b">
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0"
          colorInterpolationFilters="sRGB"
        />
      </filter>
      <clipPath id="0cd04811d7">
        <path
          d="M 4.996094 27.613281 L 370.246094 27.613281 L 370.246094 347.113281 L 4.996094 347.113281 Z M 4.996094 27.613281 "
          clipRule="nonzero"
        />
      </clipPath>
      <mask id="9e120df2d1">
        <g filter="url(#285ee37a7b)">
          <g
            filter="url(#097204639b)"
            transform="matrix(1.182, 0, 0, 1.182, -105.245497, -87.147666)"
          >
            <image
              x={0}
              y={0}
              width={500}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAAAAADuvYBWAAAAAmJLR0QA/4ePzL8AAA4ESURBVHic7d1bbBzVHcfx8Q6wJGYdt7Ij1MbwkiimQpSEUKkqBZKQJlzSpKJcUigibVUK7QsXFXhBpCpSCyUCUShVubaFFkEQlySQ9Epzc1EfABseKhK3lQpxoElswIYYzunDxODEu/bOzG/nzJn9fh4iIHj2P3N8Zn87s/M/QQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJADy5e7rgBZK/fvKruuARm7yZibXdeAbHWNWDvS5boKZGqdsdY86boKZGmZsdZas8x1HchOuc9aa63tI8s1jxtMNOjmRteVICtd++1B+8lyzeIRMzbo5lHXtSAbCz8ec2vNItfVIAthrx036L2h63qQgavHTXRrzTWu60Hjde2zh9jf4boiNNxvzaGDbh5wXREabdFhY26tWey6JjRW+PLhY25tH1mu2K6eMNHJckXXsW/imJPlCu6+KhPdWvOg67rQOPOrjrm15hTXlaFRwq3Vx9zaHWS5orqyxkS31lzpujY0Ruebtcbc2gGyXDHdXXOiW2vudV0dGmHBaO0xt3Z0gev60ADbJhtza3e4rg96qyc5uVtrrVntukKoTZbiImS5wpksxR2c6mS5gjll0hQXIcsVTM1rceOR5QplqhR38ARPliuQypQpLjJQcV0pZNbWNdGtNXe4rhQq3QfqG3NrR7td1wqR5+qc6Nbaza5rhcbF9Y+5NatcVwuFys76x9zafrJcEfwkxkS31tzqul6k1z0cZ8ytHSHL+W9jrIlurd3oumKkFSfFRcxK1zUjnXgpLkKW81y8FHdwqpPlvDY3ZoqLkOW8tiHBRLfWkOU8tiLRmJPlfFZOkOIi/YVuJVnoZ7huWtGS8CdnBH+RVoKsdCVKcRHagntqXcJ3dGtpC+6rpSnG3Fqz1HX9iG+svXdSBW4LXtwgd92qpCku0vn+FlElyMon7b2Toi24d9KkuAhZzjdLUo85S7z4pvRK+jEvbpYruS6gMaxRbOVz1ym2gqwsFpzerR0ky3llvWLUze9c7wbimFvHA+l1jDptwb3yc8kJnrbgXums2vA5LtqC++WHkqlOW3CvlHcpBp224H65SDLVDe2HvDJFj8g6bSfL+eQLmql+lev9QByHr8GWDK0kvXL8iGLQC5fliv1+NVj5UrqvzwRBEAQtn9/wRvqtICttuxVTvWhLvBRrbyb44J1zBVM9+OzAPwRbQUYOWSw9uWJluYLP9MC+fqliqk9v2yDYCrKyXjLVR1muzycnSG6s222u90Oo6Kf3IHj72AWKE/ys/7wk2Aoy0pn6sQdrrbW7i9N+qPgzPRgOFiumeusxzwu2goxobqzTFtwvF2rutm1yvR+IQ3NjnbbgXtHcWC9MK8kmCHJBEPx3zkmKzcxoJct5RHNjvShZrjlmuujGetAy+xHBVpAR0Y11c5HrHUEMV2iy3K6CZLnmEEraFFjzU9c7ghgUDUmstcPFyHLNQnNj3ax3vR+IoVtzY92scL0jiEHzxLrdVdD2Q8WkeWLdmjWudwQxXC/KcrQf8kjylR4OYZ5wvSOIQfPEOlnOL1s0g+55lmuSGy5j+r4jue/SzhIvPvkNWa75HJ9iMZ9xzDrXO5JGk53eg8HW0yQn+O6enYLNIBttb2im+iseZ7lmm+nBB2+tlEz1mSNbBZtBRrZqshxLvPjkVNEVGr4u5xPRxzaz0PWOoH6qj229vgYiX+tOY3DalyVZrnOwR7AZZKPtTclU97YteDPO9OCDdyWNxoLyzKcVm0Emwpc0U90scr0nqN9ZmgBv/cxyXhad3q4FcyQneLKcTzQreHma5Zp0pgf/m3mqJst1PKPYDDLRsVcz1c1813sSX7PO9GD4oyWSqR6c9JCVbCdDTTvowYsfnim5LjeLtuAeOVJ0XW63d1mueWd6YF77huQE3zqDB1k9skFziWaU5fo88pkDkkE3213vSEzNcno/+qijp7W2tlbaZrS1f7p9WuXdIAiCd9q+qMlynrUF13xsycq07x4Tlo4IS2EpLJXClrE/SqVSKSyVwlIYfvxHKQzDj//5sM3YnjWbgyAIgso/j5XUNXDi25LtoIp7jFG8DZtLxzZ4meibU/e4PCrFtkB0wXzce/ALoizn4XU5T/RIBsiOzvtkkyc3aZbzxmrRufiu8Ru9U7TRyx0dlIKraDp92j2HXEHreEMz6j4t8eLRR7ZbF0k+athrt4z/1+Gh5ZKPMK20BW8AURs423PY73n4N1GWo5Wk3ibJ0FgzYSnFkyUfA61hpsutEn2V8f6Jm/6lKMvRFlys0i8ZGDtY5T5ox74mawvuS5C7danmgvH1VToEDY8sk2y8vfQnxWZwkGiV3AkpLhJuEbUfmpv1cSm0zaK33RoLYs8Tbf7ZbI9KsV0iSnEP1HqBX4lG/atZHpVia2SKi3SIGkTv9CLLeRHkbjlbk+Ju+HOtvxFluZb28I+CzSAITtCspGdfm+Q3PHyZJV5yZaPoDXfS54rPEL0I34yVOF+U4qboBqVqP7Qym6NSbOV+yWDYwSn6vnXtl7yM2Zn/VpL5D3JrlmvuqK7ZOPn/MGQXa7Kc/atgM83tOE3/L/valBOw/AptwXPiSdFb7VemfilRTxK/24LnwTmiFPdkPS/2eHa/YKit3CsZhilTXESV5fLeFjznQW7N+ZprcTdPkeIiQ+YsTVvw97dM/X+hhuxSXKSsWW+btuBprMv6TVaV5WgLntjZmm8s2hhx+oksLvmiNlWKG4lxsu0StQXPdZbLc5C78SJNirslRqu3oSPO0GS5YZZ4SeI4zQco++9Yk668S/OqZLlEHnXzFabzyHLuqBo1b4j7ws9qXtec2YCDUnCh6CPzSOyvJc8WZbmXc5uXclvYdZdoUtza38f9ib2iJV5m0hY8pk5Vikvw9dTKTs1r7/OulaRjD4ri1IokL/510YvX/Jo9qnGW4iLPi0adVpIxhKprcQkfLpsjynLb8hmZ8lnVtaIUd/tjyX5u73TNKuuzdtMWvF4uU1ykIrou519bcGcect8a4gJRCVUaX6Aa0VrXdnOaIp7X1GDmTf1SCIJwm+Z4j6ZqETBb0wbBbM1nasqbH4gm+p3pyrhNdIK/QnNUiq1zQHKw7Z6Uj4pXNEu8mBxmufydfNaervm49v0X0/38gbdWSj62tR5T1zdxm9qpopZCf09fynZNJbQFn9I2UdPOGi2F4pinynLpSym2b4lS3C8UxdylqcVcpiimuDpE7b0HJOlJVI15M2fth3IW5FQp7qodiq0MD56nyXLlVNeJCk6V4lRfWQk1Wc4coJVkbVslx1iYl1VZjvZDNX1blOKEC2ZpspwxF+hKKhbVIi2aFBdRZblctZLMU5ATLdISXCt8OlyV5drJclU1tr13UuF2zaOzB2glWc0m0W0t8VXPk0VlJfyOZrE1cJGWdDRtwclyVai+lbZffiezeG3BcxPkfnSuqL13lUVa0hl+T9J5vKU9qNl5vEl1i1oKvdqA3+JQ00rSDM/R1+a1p0VxaWEjijtdVNxTjSjOX1/La4qL/FqU5c5rTHl+ym+Ki3SJstzr+Wg/lI8g9+Nz8priIkPDmiVePvXRC4LNFEOeU1xEluVoPzRmfZ5TXES1xMvjjSvRLyuzWaQlnYdFWe6sRhbpj7Ko20djO7fNEmW5PLSSzEGQu2lFlu29kxr6cImm/RBZLpB1Y7WvNngKlTXL9ZHlgkC3hsaSRhe6kCynskyU4jJYLecxX349867cqzmScdp7JzXrPUmpptd1lnMd5G5w0N47qaGWhYGg2pbOJm8LLlofyfZnMnnKOzWnpSZvC65apGV5NuWeS1vw9DxKcZGn8n/BOO9cLNKSzuxhzYf1XqdZyumLX3+xPykusre0UHJdrnN/s7YFV6W4f2X4EUiU5Uyjvu6Re4+4WaQlHVWWezDLovPDcXvvpJ4hyyUX9kkOXuL23kmp2oL3uYtT7l75GsftvZPaO/00zXW5JlzipUOV4jJ/WKjSL7ou13xZTrVIy4XZl65qC950WS4X7b2Tei6fD1XnnehR/5TtvZOaI2o/pG2fkHtXiSb6HW7Kv1001b/npnw3OkTtvZMv0pKOqCWSUbZEyj2PU1zkm6IduNfVDmTP6xQXETXIUTSr9kPYIzpiDhs2qbKcpIetD1QpLuUiLemsFZ3gV7vcieyoUlzaRVrSqYj2YsDBXjj4pHjH6ZLN2LSLtKRzYI9kiZdgeuU5xWZyLm/tvRNTLR/XDEsv94iOlfPcO78ov72NtzpPi7Skc7dmT4qf5VT5Z08OrmWpEmnmWS7rIPezRZrtKNt7JyVqC174LNedy/beSYU7NHvj5l5hZjaLjpLzFBeZJ7pCU+gFAC6XHKNcpLjI/Zr9Matc70jjVPZojlEeUlykY1CzR9neI870vfE2UYq7JgcpLjKsaSUZtB31B8VmcmhuoVJcJBRdaxop6hIvmzTHx+QkxUXmiy42FXSR9RXGGGOMNZOrOdZjGtTeO6n7JhQ+xQ5O3FdjjDFLsytZ85RJXU5sb7EtqV7QBoFtMS+OykpSOHJBGARB0DL5sbQT/kvLoX9rBvvEhQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcub/dH79eR/cGf0AAAAASUVORK5CYII="
              height={500}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
      </mask>
    </defs>
    <g clipPath="url(#0cd04811d7)">
      <g mask="url(#9e120df2d1)">
        <g transform="matrix(1.182, 0, 0, 1.182, -105.245497, -87.147666)">
          <image
            x={0}
            y={0}
            width={500}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAABmJLR0QA/wD/AP+gvaeTAAAPBUlEQVR4nO3dXXMTSbIA0KyvlmRMbOyNebz//9fdtxuxu2OEeh8EM+yOMQZL7u7sc4IYCAOmNFJXZ2dmVUUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+1SWHgC8j/bNrz8vNgp4L+3HfwSSuIYyl4VHAcBdlLr0CAC4rdplIwEAYGV676U8G6eXiP7eowHgJkopvT87iUvOAGzU8zH7t7+vsgqwRfW703dVWQUAAAAAgJfV9tNl0vr91DxslM80yZzmSxmH8fq/0Huf5/l+AwLg7XrEaekxAHA7vR9L+dV1p6XE88udAFhUKbX34y/+5d5/uOgJgPfWbhF31+qEA4A1KbUeTm/Ktvd++M4uYwAAwNuNMUTcANmUUsb4icZ2ANbuTtO6NatsnU8wG/b4+BgRDw8Pt/22YwxrVgEWczgcrvP7PcjjAyzgbw8Ph2m6U/6k1hpRIqTy2SpLNtiw4xj/enq6x3ee5zliRHyOkJ8BeC8fPnyY7t8hU0rVh8NGKaiyPY+Pj+fzeUzTvf+h3tv5fL73vwJARMR0zzrqX6msAtzdGA+9T/Fefei1toiqssrmKKiyPbWOy+e71FH/ap7niK6yCnBHx+OxtQWO1FBZBbijWuvx+KvHcbyBvckA7mXx6bUU3WVshg8r2zBNUyllwf28au02nAG4sdbadP/GdgDez3Q6tbaSzq7SmnsMwC3U1qa3nY96K61NMu8AN1DXErP/qdbVDQn+ixiEVbvm2fuasu29T/N8WXoUAFumjgqQzTRNq6mjPmPNYwNYr1rrasP21trii6oAtmfB9Uqv11RWWasNXD/s0OFwiIjeF9gj7PWmPl1UVgFer7V2nd8BSKJN0wp721+gsgrwY6XWttY66l+prAL82LZi9j+orAK8pJSyqvWorzH1SfAOAAAbUaL0WHXvJgA/rUcvITkD8K0sOWu7AQP8py3sN/CyrrIKAACbUUpZ+a44APy03rvkDEBOrQneAXKZpmMpm68PAwDAPqisAiSksgqQlt2AAbI59IPgHdi7vP0l5ndgr/LOf7VEGTGWHgbAQkopKQ+bHjHsBgzsV2tt+1tDfldN/NoAXlZrjIwJjDGGyiqwX2OkObfjWZlfG8A+ScsA+1ZKmSzcB0gmc101otowEtizlO0lo2qLBHYsd2+J+R0gm6qyCgAAm1FKGSnXawHsmTWrAGlpi+ROfLDYgBKl14Rrmnod8xwR09IDAVhC6vB2iki4yzHAq5QSGXd6j4go0aYmeAd2KevMHhFTm1I/mgDsmPmd2/J5guX12lVWAVJSWQV2LPVW762prAL7lHir99amIvMO7FnKrd6vapWcAXYp8ZYsvU+lNJVVgHxUVgFyqi3xqi2AfWqtJU49Aexaa1k7PgH2apqO2iKB/Sql9LRrmgD2KnHDe0REFGtWgZ0qpWTtLbFmFdivrDP7H1RWAbJRWQUAgO3QFATsV+IZsPduzSqwU9nbIqPZDRjYp1LKSNo8M/VJ8A7s1GjN/AfA1pQSSesKADvWe0jOAKTknFVgv7I2z4xxUFkFdir99Fci+QsEeF4pZYyx9CjuokZNvGIL4CVZ0zJX1qwC+5U+vM19AwN4Xu7wdoyR+NUBAEA2JSJn3Rhgz0ZoiwR2K3flUWUV2KNrZFuTzvAqqwBpmd/5Vs5ABp5Vaz0cDkuP4i5qbRFpV+QCvORwOJSSdk3TGEPmnT94jiON9vVHRJ2jtWgtSo9SIyL+8X9f/9iIGBH/WGqUd1Vra218+vSvpQfC8tJGMfyM/x3jU22X3s+lRIk5IiLmiBIxfyPmOa4/X78c8fVX8zxf5ogvv/X1r7+zzxGHL//upcT0OWJ8mdkv3w5mRKSd+1ob5/PT0qNgFWz5T0SUy+V0PDyVXuNyqbWWcomIa0mmlHmOEvMc5Trhl3Kd98sc15/KXL5M6aVEXL++0EPhp4jzlx/nc5z/FZe/RTlHKXH+5zd/5v1vPO/kcjlHzCqrwLWL7pT1Nt8+/L0cfovD//zX12upx3FcZEj3VmuLqNaswt7VWhO3WNQ+2oe///Xrx3FsmU+qGxrhYNda6v6Kl7tHct/VSsn86oAfKKW0vFNAKf2FCS73qs7crw54Sckbs0dExMeIaekxLCzxYxk/5L3frWmeoyY9pWjUUeKfET9ejFprPR5zVlZ7H/Mc7nCwNy33ZV/LqwKX3IfwRUxZ+6CAZ7RpipL4mv+5/c1Lyb0lS2st810c+FOptU2JL/ifO5kod+2xtam87iEG2LbsdVSeUTM39fM81/m+TNNUIm0d9S1ncZRSxiFncqb3aZ4vS48CuKfW2pQ5IRPlV/e0qU2gA2zT8fihtZwx+01kr6yW1nIeVMKzRCv78dvT0zxGzsv7Joej9t7P5/Pbv886tTZdLp+WHgVwa619jPht6VHc0S8nZHZFZXU/RO678Dg9ljgfDv+/9EDuYtRRosw32qU9cXKm98maVUhlatPj9Lj0KO7oletRX/WtkreKWrMKWZxOp9FyhqIR0aNLyPyUEm2yZnUHcgcpREQ8PT31KW2TzOf43ISiP2O0dr6krRvDXowhRuMZXVNsdiL3zI7H4zzPDw85s+291vumY0rJupT3OB0vF2tWYbN671k3K7+q99zwyyY8wBo9PDwk3qy89554K8f3UUpJ/AlBbJLW77//nngbmfnz3Jo66pu01j5//rz0KICfkbuOeopTDyHnbaisZiVyTyh3HXXq01N5Gj9zHMfbZV3ZdJyOl0tEnJYeCPAK6euo7X03SMme3D+FxyBYv8PhIfG+vtaj3kMpTWUV1q7Wdjg8LD2KeylRZNtvTusRrN3I2x7Dvek+SiZnmWifvtRRH7PWUZePLhM3hk/TZM0qrFTvI3sddeFYJGvPDLBex+OH3kfWR7EWbTV11JJ5P/RSIumjCWxVre14/LD0KO6lRl3Nvr4rGcZ99B5L576AP01T2rM4IuIQh9XM7LvgnNUccj7F78rj42NEfPyYM2w/TNO5nFfY/pg1/z7GYZ5VVmEFDofDY9IOmasVtugt3rdzf+lfIKzbh+NxGiNrFDm16YYnX99WKWWFd50bqSXKO+/eA/yHVuuHvO2PbcVHObfWEmc1R4zVtCfB/oyRObbaQh21RRyWHsMdqaxuWtrQI71rnv3Dh5x11Kn3c/m0wjrqf+oRn2pd+SB/kcoqLCN/HXULhYSy1pIAsEkPDw/TNGV9ap5au+vJ1wAr1Vp7eEi7r2+LmNI2ogB8R+JjryPikHyB/ybJPm2R92xjrnn2rNn20ce5lI0WKLNeS7WOeZ6XHgVkdzges87sVxtdkLWDEsEOXiIs5VpHbUnb29e0r++vyL1mNaKENatwJ2OMxHXUiFj9qqWX5J3Zr9KeFgALOz489KQxOxtRs9/AUnEr3oqPT79/zjq5b2K9Eq0V56zCjZVyjPi49CjuaAeb6KbhnYIbGeOh1KkmfSLeeh31WXnTF56x4HZqHWOoo26GpxDgx44PD63lTLWzZanux7CA2toxaftj84y/VU3mHd5ko8s1Xy9fth1WIvncsWnXDcKytj9eD3KbI/mmJXkrq8Cvaq3l3gCyZo8tVFaB/3Y6nQR9bIBP6Vp5Y1Zqnudpms7n89IDge9rLaxZhdcTs7MhjvJYJ+/K6lzz7Fmz7aPWveahc15rtXZHecCr5K+j7rHMuMOXDHxDHZWt8rldmZyPipv129NT2oSMj1pmKqvwgtY+Rvy29CjuSG4it1IF7/AX0zS1djwcDksP5C6u61GXHsUalFpzLjmufYo9VlPgR/LXUSVmdA3C3kwPD633pUcBb1ZK+CTDH2prU9J9fdmX3iVn4AsxO8mU7FtVb4L3YGmn0yViOh6XHsdd9NrVUb8n62b9tVuzChHRe5xOSw/ijqoS4nPsBgyZHQ6HIidDTiXCZ5u9qrVmbWxn97pVa+xUF7OTnqTccvyvX8bpdIqIY9I66rFPu9z68RdlraxG7aGyyt703k+p66jdNiOvo7IKefTDIXFve4um/fGnlFLs8wwZlFp76jpqczbvzzCzQwauZPZIZZXsTqWk3f1x6pMM8lvkrawObZGk1yMy11GbOuqv2sF9Mf0LZK+Ox2Otieuorl1ekPShBCKi1pq1sf1K0A7sTuLeR3g9Z1GRTan1kHTVkjrqbZUoPWn6rqqskkz6uU8d9Ybyb5Kc/XJgN8aIUrJ2uVmPehelRNb1EEkvBHaplBhj6UHckfWot5d1Zoc0HCYJz3JpsHGl1KRhu/NR30HWbF4dQ+adDUtfR81f+ltU+s9P+hdITmOMkreOyjspadeG1dYiakTO51oyK6WMpAkZ3k/Smf2rYVsCNkbADq9To4mB2I7EYfvoQ6r0/aUNF5rKKttRsi/XTDvRrFX6u2n6S2YRrtIbG2OUiDZynqJ3XY96uVyWHsi+zPOceM1qG4c5IvdCPzKotWZNyFxZj7qMpDP7F2PYloBVa21IWcCvqLWljorYtlJKS1r6t+/jSmSNHtpQqGet0heFXHuLS/8WZL11sXGlZK2jVoV37m8I3uH92SMM2J2Wu5MhHI3Gu8p+QbEdpZSsH8dRW7G7E++otSY5wyqkLwFVVxrvLmu0xJYk3kZGHZVFHKaD4B3uSx0VAAAA7sZD9y30r784LzkKgD8oSb9Z+fpf++ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADszr8BoR0f9Iva5kkAAAAASUVORK5CYII="
            height={500}
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </g>
    </g>
  </svg>
);
export default SVGComponent;

// const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="500.000000pt"
//     height="500.000000pt"
//     viewBox="0 0 500.000000 500.000000"
//     preserveAspectRatio="xMidYMid meet"
//     {...props}
//   >
//     <g
//       transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
//       fill="currentColor"
//       stroke="none"
//     >
//       <path d="M2321 3590 l-173 -289 172 -303 c94 -167 285 -494 425 -728 140 -234 303 -507 362 -607 l108 -183 359 0 c282 0 357 3 353 13 -11 28 -1418 2382 -1425 2385 -5 1 -86 -128 -181 -288z" />
//       <path d="M1765 2613 c-28 -4 -52 -41 -360 -559 -181 -305 -331 -559 -333 -564 -2 -6 131 -10 355 -10 l358 1 310 521 c171 286 323 543 338 569 l29 49 -334 -2 c-183 0 -346 -3 -363 -5z" />
//     </g>
//   </svg>
// );
// export default SVGComponent;


export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      {/* <LogoSVG /> */}
      <SVGComponent className="size-6 sm:size-8
text-black dark:text-white dark:invert" />
      {/* <span className="text-xl font-medium">Agentix</span> */}
    </Link>
  );
};
