function Button({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-red-600
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:bg-red-700
      "
    >
      {children}
    </a>
  );
}

export default Button;