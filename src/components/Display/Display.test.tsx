import Display from "./Display";
import { render, screen } from "@testing-library/react";
import MockPhoneContextStructure from "../../contexts/mocks/mocks";
import { PhoneContext } from "../../contexts/phone/PhoneContext";

describe("Given a Display component", () => {
  describe("When it's provided with an array with 4,7,2,0 strings", () => {
    test("Then it should shows the numbers '4720'", () => {
      const expectedText = ["4", "7", "2", "0"];
      render(
        <PhoneContext.Provider value={MockPhoneContextStructure}>
          <Display numbers={expectedText.join()} />
        </PhoneContext.Provider>
      );

      const textRendered = screen.queryByText(expectedText.join());

      expect(textRendered).not.toBeNull();
    });
  });
});
