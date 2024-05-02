type Props = {
  onClick?: () => void;
  className?: string;
  children?: string | number | React.ReactNode;
};

const Button: React.FC<Props> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
