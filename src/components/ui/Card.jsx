export const Card = ({ children, className = '', hover = false }) => (
  <div
    className={`
      bg-white 
      rounded-lg 
      shadow-sm 
      border 
      border-gray-200 
      ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-md' : ''}
      ${className}
    `}
  >
    {children}
  </div>
);