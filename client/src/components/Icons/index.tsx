const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#080808"
        d="M8 0a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm0 7c2.67 0 8 1.33 8 4v3H0v-3c0-2.67 5.33-4 8-4zm0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V13c0-.64-3.13-2.1-6.1-2.1z"
      ></path>
    </svg>
  );
};

const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        fill="#080808"
        d="M9 0a4 4 0 014 4h2.035a2 2 0 011.999 1.929l.428 12A2 2 0 0115.464 20H2.536a2 2 0 01-1.998-2.071l.428-12A2 2 0 012.965 4H5a4 4 0 014-4zM5 6H2.965l-.43 12h12.929l-.43-12H13v1a1 1 0 01-1.993.117L11 7V6H7v1a1 1 0 01-1.993.117L5 7V6zm4-4a2 2 0 00-1.995 1.85L7 4h4a2 2 0 00-2-2z"
      ></path>
    </svg>
  );
};

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="24"
      fill="none"
      viewBox="0 0 28 24"
    >
      <ellipse
        cx="12"
        cy="12"
        fill="#080808"
        rx="12"
        ry="12"
        transform="rotate(90 12 12)"
      ></ellipse>
      <ellipse
        cx="16"
        cy="12"
        fill="#F0F1EC"
        rx="12"
        ry="12"
        transform="rotate(90 16 12)"
      ></ellipse>
    </svg>
  );
};

export { UserIcon, CartIcon, Logo };
