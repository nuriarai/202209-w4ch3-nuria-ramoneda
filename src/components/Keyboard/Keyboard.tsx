import Key from "../Key/Key";

const KeyBoard = (): JSX.Element => {
  const phoneKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {phoneKeys.map((numberKey) => {
          return (
            <li key={numberKey}>
              <Key className="key" text={numberKey} action={() => {}} />{" "}
            </li>
          );
        })}
        <li key={phoneKeys.length + 1}>
          <Key className="key big" text="Delete" action={() => {}} />{" "}
        </li>
      </ol>
    </div>
  );
};

export default KeyBoard;
