import { PhoneContextStructure } from "../phone/PhoneContext.js";

const MockPhoneContextStructure: PhoneContextStructure = {
  displayNumbers: ["4", "7", "2", "0"],
  getKeyboardNumbers: jest.fn(),
  removeNumbersDisplay: jest.fn(),
};

export default MockPhoneContextStructure;
