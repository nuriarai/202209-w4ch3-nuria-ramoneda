interface DisplayProps {
  numbers: string;
}

const Display = ({ numbers }: DisplayProps): JSX.Element => {
  return <span className="display">{numbers}</span>;
};

export default Display;
