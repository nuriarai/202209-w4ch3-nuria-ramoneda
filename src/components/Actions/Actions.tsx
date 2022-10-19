import { useContext } from "react";
import PhoneContext from "../../contexts/phone/PhoneContext";
import Display from "./Display/Display";

const Actions = (): JSX.Element => {
  const { displayNumbers } = useContext(PhoneContext);

  return (
    <div className="actions">
      <Display numbers={displayNumbers.join("")} />
      <a href="/" className="call">
        Call
      </a>
      <a href="/" className="hang active">
        Hang
      </a>
    </div>
  );
};

export default Actions;
