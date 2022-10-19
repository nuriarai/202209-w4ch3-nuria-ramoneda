import { createContext } from "react";

interface PhoneContextStructure {
  displayNumbers: string[];
  getKeyboardNumbers: (number: string) => void;
  removeNumbersDisplay: (number: string) => void;
}

const PhoneContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default PhoneContext;
