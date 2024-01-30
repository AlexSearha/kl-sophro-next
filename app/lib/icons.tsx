export function EditInactiveIcon(props : {className: string, aria_hidden : string}) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#06752E"
          stroke="#06752E"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
export function EditActiveIcon(props : {className: string, aria_hidden : string}) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#FFFFFF"
          stroke="#d7fae4"
          strokeWidth="2"
        />
      </svg>
    )
  }

  export function FacebookIcon(props: { className: string, ariaHidden: string }) {
    return (
      <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48">
      <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
      </svg>
      
    );
  }

  export function InstagramIcon(props: { className: string, ariaHidden: string }) {
    return (
      <svg
        {...props}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
      </svg>
    );
  }

  export function YouTubeIcon(props: { className: string, ariaHidden: string }) {
    return (
      <svg
        {...props}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="#FF3D00" 
          d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
      </svg>
    );
  }

  export function WindIcon(props: { className: string, ariaHidden: string }) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        
        <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" d="M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5ZM14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5ZM3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z" 
        fill="#FFFFFF">
        </path> </g>
      </svg>
    );
  }

  export function SofaIcon(props: { className: string, ariaHidden: string }) {
    return (
      <svg 
        {...props}
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path 
        d="M5.55556 18H18.4444C20.4081 18 22 16.4081 22 14.4444V12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12V13.2C18 13.6418 17.6418 14 17.2 14H6.8C6.35817 14 6 13.6418 6 13.2V12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12V14.4444C2 16.4081 3.59188 18 5.55556 18Z" 
        stroke="#FFFFFF" 
        stroke-width="1.5"></path> 
        <path 
        d="M20 10C20 9.07069 20 8.60603 19.9231 8.21964C19.6075 6.63288 18.3671 5.39249 16.7804 5.07686C16.394 5 15.9293 5 15 5H9C8.07069 5 7.60603 5 7.21964 5.07686C5.63288 5.39249 4.39249 6.63288 4.07686 8.21964C4 8.60603 4 9.07069 4 10" stroke="#FFFFFF" stroke-width="1.5"></path> <path d="M20 19V18M4 19V18" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"></path> </g>
        </svg>

    );
  }

  export function TalkIcon(props: { className: string, ariaHidden: string }) {
    return (
      <svg 
      {...props}
      viewBox="0 0 16 16" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" 
      stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
      <g fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd"> 
      <path d="M8.302 3.288A3.633 3.633 0 002.756 7.76c.124.237.112.49.102.61a2.984 2.984 0 01-.084.468 7.853 7.853 0 01-.2.655c.26-.09.52-.17.75-.223a.7.7 0 11.312 1.365c-.34.078-.837.258-1.278.434a23.211 23.211 0 00-.701.295l-.042.018-.01.005-.003.001a.7.7 0 01-.925-.927v-.001l.002-.004.008-.018.03-.07a21.252 21.252 0 00.43-1.047c.113-.3.211-.592.27-.822.021-.09.034-.157.041-.205a5.033 5.033 0 017.74-6.082.7.7 0 01-.896 1.076zM1.463 8.226v0z"></path> <path d="M4.75 9.333a5.083 5.083 0 119.657 2.221c.006.033.015.077.029.133.05.197.14.453.248.734.087.223.178.443.262.646l.06.146c.049.118.094.23.131.326.03.082.074.2.097.306a.75.75 0 01-.734.905c-.169 0-.332-.04-.447-.072a4.867 4.867 0 01-.394-.134c-.188-.072-.402-.162-.606-.248l-.216-.09a7.634 7.634 0 00-.705-.265 1.739 1.739 0 00-.095-.026A5.083 5.083 0 014.75 9.333zm1.5 0a3.583 3.583 0 116.763 1.654c-.124.239-.12.485-.11.614.01.155.043.313.08.456.054.214.132.448.216.676a7.37 7.37 0 00-.643-.231 2.456 2.456 0 00-.443-.093 1.113 1.113 0 00-.626.104 3.583 3.583 0 01-5.237-3.18zm8.15 2.16l-.001-.012v.013z"></path> </g> </g>
      
      </svg>
      

    );
  }
