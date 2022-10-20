import { render, screen } from "@testing-library/react";
import MockPhoneContextStructure from "../../contexts/mocks/mocks";
import Keyboard from "./Keyboard";
import { PhoneContext } from "../../contexts/phone/PhoneContext";

describe("Given a Keyboard component", () => {
  describe("When it's rendered with eleven numbers on the screen", () => {
    test("Then it should show ten keys with the numbers from 0 to 1 and 1 with delete", () => {
      const expectedNumberOfKeys = 11;
      const expectedTextDeleted = "Delete";

      render(<Keyboard />);

      const keys = screen.queryAllByRole("button");
      const keyDelete = screen.queryByRole("button", {
        name: expectedTextDeleted,
      });

      expect(keys).toHaveLength(expectedNumberOfKeys);
      expect(keyDelete).toBeInTheDocument();
    });
  });

  describe("And when it is rendered inside a PhoneContext", () => {
    test("Then getKeyboardNumbers should be called when a Key is clicked", async () => {
      render(
        <PhoneContext.Provider value={MockPhoneContextStructure}>
          <Keyboard />
        </PhoneContext.Provider>
      );

      const button = screen.queryByRole("button", {
        name: "7",
      })!;
      button.click();

      expect(MockPhoneContextStructure.getKeyboardNumbers).toHaveBeenCalled();
    });
  });
});
