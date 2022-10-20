import { createContext } from "react";

export interface PhoneContextStructure {
  displayNumbers: string[];
  getKeyboardNumbers: (number: string) => void;
  removeNumbersDisplay: (number: string) => void;
}

export const PhoneContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);
