import { PhoneContextStructure } from "../phone/PhoneContext.js";

const MockPhoneContextStructure: PhoneContextStructure = {
  displayNumbers: [],
  getKeyboardNumbers: jest.fn(),
  removeNumbersDisplay: jest.fn(),
};

export default MockPhoneContextStructure;
