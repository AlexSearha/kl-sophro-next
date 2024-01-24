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
