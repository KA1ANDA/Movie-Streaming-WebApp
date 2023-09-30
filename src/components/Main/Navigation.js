import React from 'react';



function Navigation() {

  return (
    <div className="flex w-full justify-between absolute top-[40px] px-[75px] text-white z-20">
     <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M2.39997 5.27259C2.39997 2.60499 4.15685 0.799988 6.75692 0.799988H25.243C27.8419 0.799988 29.6 2.60372 29.6 5.27259V31.2L27.3683 28.5387V5.27259C27.3683 4.69576 27.1449 4.14251 26.7472 3.73428C26.3494 3.32604 25.8098 3.09619 25.2467 3.09519H6.76063C6.19771 3.09653 5.65827 3.32648 5.26057 3.73464C4.86287 4.1428 4.63936 4.69587 4.63903 5.27259V24.0661C4.63903 24.6429 4.86244 25.1962 5.26021 25.6044C5.65798 26.0127 6.19761 26.2425 6.76063 26.2435H22.2683L24.4839 28.521L6.75692 28.5387C4.15808 28.5387 2.39997 26.735 2.39997 24.0661V5.27259Z" fill="#00925D"/>
  <path d="M8.05619 12.1552V8.93137C8.05619 8.13535 8.37463 7.51445 9.0115 7.06868C9.64837 6.62291 10.5006 6.40002 11.5683 6.40002C12.6548 6.40002 13.5164 6.60699 14.1533 7.02092C14.7901 7.41893 15.1086 7.9443 15.1086 8.59704V11.5582C15.1086 11.8448 14.8651 12.0438 14.378 12.1552C14.1158 12.2189 13.8536 12.2508 13.5913 12.2508C13.3291 12.2508 13.0668 12.2269 12.8046 12.1791C12.8608 11.797 12.8889 11.3911 12.8889 10.9612V8.93137C12.8889 8.62888 12.7671 8.39803 12.5236 8.23883C12.2801 8.06371 11.9617 7.97614 11.5683 7.97614C11.175 7.97614 10.8565 8.06371 10.613 8.23883C10.3883 8.39803 10.2759 8.62888 10.2759 8.93137V11.7254C10.2759 12.2826 10.4913 12.6727 10.9221 12.8955L13.9004 14.5194C14.7433 14.9652 15.1648 15.6498 15.1648 16.5732V19.8687C15.1648 20.6647 14.837 21.2856 14.1814 21.7314C13.5258 22.1771 12.6548 22.4 11.5683 22.4C10.5006 22.4 9.639 22.201 8.9834 21.803C8.3278 21.3891 8 20.8557 8 20.203V17.2418C8 16.9552 8.24351 16.7562 8.73053 16.6448C8.99277 16.5811 9.25501 16.5493 9.51725 16.5493C9.77949 16.5493 10.0417 16.5732 10.304 16.6209C10.2478 17.003 10.2197 17.409 10.2197 17.8388V19.8687C10.2197 20.1552 10.3508 20.3861 10.613 20.5612C10.8753 20.7363 11.2031 20.8239 11.5964 20.8239C11.9898 20.8239 12.3082 20.7363 12.5517 20.5612C12.814 20.3861 12.9451 20.1552 12.9451 19.8687V17.1702C12.9451 16.5493 12.6922 16.1035 12.1865 15.8329L9.20818 14.1851C8.44019 13.7712 8.05619 13.0946 8.05619 12.1552Z" fill="white"/>
  <path d="M16.8914 12.1552V8.93137C16.8914 8.13535 17.2099 7.51445 17.8467 7.06868C18.4836 6.62291 19.3359 6.40002 20.4036 6.40002C21.49 6.40002 22.3516 6.60699 22.9885 7.02092C23.6254 7.41893 23.9438 7.9443 23.9438 8.59704V11.5582C23.9438 11.8448 23.7003 12.0438 23.2133 12.1552C22.951 12.2189 22.6888 12.2508 22.4266 12.2508C22.1643 12.2508 21.9021 12.2269 21.6398 12.1791C21.696 11.797 21.7241 11.3911 21.7241 10.9612V8.93137C21.7241 8.62888 21.6024 8.39803 21.3589 8.23883C21.1154 8.06371 20.7969 7.97614 20.4036 7.97614C20.0102 7.97614 19.6918 8.06371 19.4483 8.23883C19.2235 8.39803 19.1111 8.62888 19.1111 8.93137V11.7254C19.1111 12.2826 19.3265 12.6727 19.7573 12.8955L22.7356 14.5194C23.5785 14.9652 24 15.6498 24 16.5732V19.8687C24 20.6647 23.6722 21.2856 23.0166 21.7314C22.361 22.1771 21.49 22.4 20.4036 22.4C19.3359 22.4 18.4742 22.201 17.8186 21.803C17.163 21.3891 16.8352 20.8557 16.8352 20.203V17.2418C16.8352 16.9552 17.0787 16.7562 17.5658 16.6448C17.828 16.5811 18.0902 16.5493 18.3525 16.5493C18.6147 16.5493 18.877 16.5732 19.1392 16.6209C19.083 17.003 19.0549 17.409 19.0549 17.8388V19.8687C19.0549 20.1552 19.186 20.3861 19.4483 20.5612C19.7105 20.7363 20.0383 20.8239 20.4317 20.8239C20.825 20.8239 21.1435 20.7363 21.387 20.5612C21.6492 20.3861 21.7803 20.1552 21.7803 19.8687V17.1702C21.7803 16.5493 21.5275 16.1035 21.0217 15.8329L18.0434 14.1851C17.2754 13.7712 16.8914 13.0946 16.8914 12.1552Z" fill="white"/>
  <path d="M6.84267 29.1987L6.86134 29.18H6.828L6.84267 29.1987Z" fill="black"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="118" height="22" viewBox="0 0 118 22" fill="none">
    <path d="M2.95059 15.661V18.9548C2.95059 19.0584 3.00235 19.1102 3.10588 19.1102H4.34824C4.45177 19.1102 4.50353 19.0584 4.50353 18.9548V13.3616L2.04988 12.274C1.86353 12.2119 1.60471 12.1083 1.27341 11.9633C0.942118 11.7976 0.641882 11.5593 0.372706 11.2486C0.124235 10.9379 0 10.5132 0 9.97458V2.88983C0 2.01977 0.269177 1.3258 0.80753 0.80791C1.34588 0.269303 2.04988 0 2.91953 0H4.53459C5.40424 0 6.10824 0.269303 6.64659 0.80791C7.18494 1.3258 7.45412 2.01977 7.45412 2.88983V7.4887L4.50353 7.24011V3.0452C4.50353 2.94162 4.45177 2.88983 4.34824 2.88983H3.10588C3.00235 2.88983 2.95059 2.94162 2.95059 3.0452V9.53955L5.40424 10.6271C5.59059 10.71 5.84941 10.8239 6.18071 10.9689C6.512 11.1139 6.80188 11.3418 7.05035 11.6525C7.31953 11.9633 7.45412 12.3879 7.45412 12.9266V19.1102C7.45412 19.9802 7.18494 20.6846 6.64659 21.2232C6.10824 21.7411 5.40424 22 4.53459 22H2.91953C2.04988 22 1.34588 21.7411 0.80753 21.2232C0.269177 20.6846 0 19.9802 0 19.1102V15.661H2.95059Z" fill="white"/>
    <path d="M14.3266 21.8757C13.3741 21.8757 12.608 21.6064 12.0283 21.0678C11.4692 20.5085 11.1897 19.8145 11.1897 18.9859V9.22881C11.1897 8.37947 11.4692 7.6855 12.0283 7.14689C12.608 6.60829 13.3741 6.33898 14.3266 6.33898H14.4508C15.0099 6.33898 15.5068 6.47364 15.9417 6.74294V6.33898H18.8923V18.9859H19.3271L19.6377 21.8757H15.9417V20.6638L15.1652 21.8757H14.3266ZM14.2956 9.22881C14.192 9.22881 14.1403 9.2806 14.1403 9.38418V18.8305C14.1403 18.9341 14.192 18.9859 14.2956 18.9859H15.9417V9.22881H14.2956Z" fill="white"/>
    <path d="M25.6903 2.20622L26.0008 5.09605H23.0503V2.20622H25.6903ZM26.0008 6.33898V21.8757H23.0503V9.22881H22.5844L22.895 6.33898H26.0008Z" fill="white"/>
    <path d="M30.1518 21.8757V9.22881H29.4064L29.717 6.33898H33.1024V7.55085L33.8789 6.33898H34.7175C35.6699 6.33898 36.4257 6.60829 36.9848 7.14689C37.5645 7.6855 37.8544 8.37947 37.8544 9.22881V18.9859H38.6309L38.3203 21.8757H34.9038V9.38418C34.9038 9.2806 34.8521 9.22881 34.7485 9.22881H33.1024V21.8757H30.1518Z" fill="white"/>
    <path d="M47.1674 18.9859V21.8757H45.366C44.4964 21.8757 43.7924 21.6168 43.254 21.0989C42.7157 20.5603 42.4465 19.8559 42.4465 18.9859V9.22881H41.142L41.3905 6.33898H42.4465V3.01412H41.67L41.9185 0.124294H45.3971V6.33898H47.1674L46.919 9.22881H45.3971V18.9859H47.1674Z" fill="white"/>
    <path d="M53.5304 15.661V18.9548C53.5304 19.0584 53.5821 19.1102 53.6857 19.1102H54.928C55.0316 19.1102 55.0833 19.0584 55.0833 18.9548V13.3616L52.6297 12.274C52.4433 12.2119 52.1845 12.1083 51.8532 11.9633C51.5219 11.7976 51.2217 11.5593 50.9525 11.2486C50.704 10.9379 50.5798 10.5132 50.5798 9.97458V2.88983C50.5798 2.01977 50.849 1.3258 51.3873 0.80791C51.9257 0.269303 52.6297 0 53.4993 0H55.1144C55.984 0 56.688 0.269303 57.2264 0.80791C57.7647 1.3258 58.0339 2.01977 58.0339 2.88983V7.4887L55.0833 7.24011V3.0452C55.0833 2.94162 55.0316 2.88983 54.928 2.88983H53.6857C53.5821 2.88983 53.5304 2.94162 53.5304 3.0452V9.53955L55.984 10.6271C56.1704 10.71 56.4292 10.8239 56.7605 10.9689C57.0918 11.1139 57.3817 11.3418 57.6301 11.6525C57.8993 11.9633 58.0339 12.3879 58.0339 12.9266V19.1102C58.0339 19.9802 57.7647 20.6846 57.2264 21.2232C56.688 21.7411 55.984 22 55.1144 22H53.4993C52.6297 22 51.9257 21.7411 51.3873 21.2232C50.849 20.6846 50.5798 19.9802 50.5798 19.1102V15.661H53.5304Z" fill="white"/>
    <path d="M67.4843 18.9859V21.8757H65.6829C64.8132 21.8757 64.1092 21.6168 63.5709 21.0989C63.0325 20.5603 62.7633 19.8559 62.7633 18.9859V9.22881H61.4589L61.7073 6.33898H62.7633V3.01412H61.9869L62.2353 0.124294H65.7139V6.33898H67.4843L67.2358 9.22881H65.7139V18.9859H67.4843Z" fill="white"/>
    <path d="M74.282 6.33898V7.70621L75.1206 6.33898H77.2016V9.35311H74.282V21.8757H71.3314V9.22881H70.586L70.8966 6.33898H74.282Z" fill="white"/>
    <path d="M80.6304 19.1102V9.10452C80.6304 8.23446 80.8996 7.54049 81.4379 7.0226C81.9763 6.48399 82.6803 6.21469 83.5499 6.21469H85.4756C86.3452 6.21469 87.0492 6.48399 87.5876 7.0226C88.1259 7.54049 88.3951 8.23446 88.3951 9.10452V12.9266H85.4445V9.25989C85.4445 9.15631 85.3928 9.10452 85.2892 9.10452H83.7363C83.6328 9.10452 83.581 9.15631 83.581 9.25989V12.9266H88.3951V15.8164H83.581V18.9548C83.581 19.0584 83.6328 19.1102 83.7363 19.1102H85.2892C85.3928 19.1102 85.4445 19.0687 85.4445 18.9859V17.2768H88.3951V19.1102C88.3951 19.9802 88.1259 20.6846 87.5876 21.2232C87.0492 21.7411 86.3452 22 85.4756 22H83.5499C82.6803 22 81.9763 21.7411 81.4379 21.2232C80.8996 20.6846 80.6304 19.9802 80.6304 19.1102Z" fill="white"/>
    <path d="M95.412 21.8757C94.4595 21.8757 93.6934 21.6064 93.1136 21.0678C92.5546 20.5085 92.275 19.8145 92.275 18.9859V9.22881C92.275 8.37947 92.5546 7.6855 93.1136 7.14689C93.6934 6.60829 94.4595 6.33898 95.412 6.33898H95.5362C96.0953 6.33898 96.5922 6.47364 97.027 6.74294V6.33898H99.9776V18.9859H100.412L100.723 21.8757H97.027V20.6638L96.2506 21.8757H95.412ZM95.3809 9.22881C95.2774 9.22881 95.2256 9.2806 95.2256 9.38418V18.8305C95.2256 18.9341 95.2774 18.9859 95.3809 18.9859H97.027V9.22881H95.3809Z" fill="white"/>
    <path d="M112.118 21.8757H109.167V9.38418C109.167 9.2806 109.115 9.22881 109.012 9.22881H107.366V21.8757H104.415V9.22881H103.67L103.98 6.33898H107.366V7.55085L108.142 6.33898H108.981C109.664 6.33898 110.254 6.48399 110.751 6.77401C111.248 7.06403 111.61 7.45763 111.838 7.9548L112.894 6.33898H113.733C114.685 6.33898 115.441 6.60829 116 7.14689C116.58 7.6855 116.87 8.37947 116.87 9.22881V18.9859H117.615L117.305 21.8757H113.919V9.38418C113.919 9.2806 113.867 9.22881 113.764 9.22881H112.118V21.8757Z" fill="white"/>
        </svg>
     </div>
     <ul className='flex gap-[32px]'>
      <li>Home</li>
      <li>Discover</li>
      <li>Movie Release</li>
      <li>Forum</li>
      <li>About</li>
     </ul>
     <div className='flex gap-[23px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>  

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
     </div>
    </div>
  );
}

export default Navigation;
