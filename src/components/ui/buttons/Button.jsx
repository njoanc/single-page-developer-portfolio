function Button({ type = "button", children, href, className = "", ...rest }) {
  const commonClasses =
    "text-[16px] font-bold uppercase tracking-[2.28571px] leading-6 underline decoration-green underline-offset-[12px] hover:text-green transition duration-200 ";

  return type === "link" ? (
    <a href={href} {...rest} className={`${commonClasses} ${className}`}>
      {children}
    </a>
  ) : (
    <button type={type} {...rest} className={`${commonClasses} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
