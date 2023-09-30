export const MoreIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    focusable="false"
    height="1.5em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5em"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
    <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
  </svg>
);

export const SearchIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const FilterIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    focusable="false"
    height="1.5em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5em"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 8h4v4h-4z"></path>
    <path d="M6 4l0 4"></path>
    <path d="M6 12l0 8"></path>
    <path d="M10 14h4v4h-4z"></path>
    <path d="M12 4l0 10"></path>
    <path d="M12 18l0 2"></path>
    <path d="M16 5h4v4h-4z"></path>
    <path d="M18 4l0 1"></path>
    <path d="M18 9l0 11"></path>
  </svg>
);

export const UploadIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    focusable="false"
    height="1.5em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5em"
    strokeWidth={2}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
    <path d="M9 15l3 -3l3 3" />
    <path d="M12 12l0 9" />
  </svg>
);

export const AlertIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    height="1.5em"
    viewBox="0 0 24 24"
    width="1.5em"
    strokeWidth={2}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 9v4" />
    <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
    <path d="M12 16h.01" />
  </svg>
);

export const GlobIcon = (props: { className?: string }) => (
  <svg
    fill="none"
    height="1.5em"
    viewBox="0 0 24 24"
    width="1.5em"
    strokeWidth={2}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
  </svg>
);
