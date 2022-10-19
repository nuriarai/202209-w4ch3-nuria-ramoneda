import "./Key.css";
interface KeyProps {
  text: string;
  className: string;
  action: () => void;
}

const Key = ({ text, className, action }: KeyProps): JSX.Element => {
  return <button className={className}>{text}</button>;
};

export default Key;
