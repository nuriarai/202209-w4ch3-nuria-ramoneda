import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [displayNumbers, setDisplayNumbers] = useState<string[]>([]);

  const getKeyboardNumbers = (number: string): void => {
    if (displayNumbers.length >= 9) {
      return;
    }
    setDisplayNumbers([...displayNumbers, number]);
    console.log(displayNumbers);
  };

  const removeNumbersDisplay = (number: string): void => {
    displayNumbers.pop();
    setDisplayNumbers(displayNumbers);
    console.log("remove number");
    console.log(displayNumbers);
  };

  return (
    <PhoneContext.Provider
      value={{ getKeyboardNumbers, removeNumbersDisplay, displayNumbers }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
