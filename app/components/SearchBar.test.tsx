import SearchBar from "./SearchBar";
import { render } from "@testing-library/react";

describe("SearchBar component unit tests", () => {
  it("should match snapshot", () => {
    const props = {
      count: 50,
      onChange: () => {},
    };

    const { asFragment } = render(<SearchBar {...props} />);

    // Snapshot testing
    expect(asFragment()).toMatchSnapshot();
  });
});
