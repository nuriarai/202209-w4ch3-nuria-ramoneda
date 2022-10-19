import { useContext } from "react";
import PhoneContext from "../../contexts/phone/PhoneContext";
import Key from "./Key/Key";

const KeyBoard = (): JSX.Element => {
  const { getKeyboardNumbers, removeNumbersDisplay } = useContext(PhoneContext);
  const phoneKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {phoneKeys.map((numberKey) => {
          return (
            <li key={numberKey}>
              <Key
                className="key"
                text={numberKey}
                action={() => {
                  getKeyboardNumbers(numberKey);
                }}
              />
            </li>
          );
        })}
        <li key={phoneKeys.length + 1}>
          <Key
            className="key big"
            text="Delete"
            action={() => {
              removeNumbersDisplay("delete");
            }}
          />
        </li>
      </ol>
    </div>
  );
};

export default KeyBoard;
