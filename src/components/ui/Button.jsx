const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-blue-900 hover:bg-blue-50",
    secondary: "bg-red-600 text-white hover:bg-red-700",
    whatsapp: "bg-green-500 text-white hover:bg-green-600"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 