import Card from "./Card";
import { render } from "@testing-library/react";

describe("Card component unit tests", () => {
  it("should match snapshot", () => {
    const props = {
      image: "image/mock",
      title: "Mr Beast",
      favorite: false,
      onClickFavorite: () => {},
    };

    const { asFragment } = render(<Card {...props} />);

    // Snapshot testing
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render ok with props", () => {
    const props = {
      image: "image/mock",
      title: "Mr Beast",
      favorite: false,
      onClickFavorite: () => {},
    };

    const { getByText } = render(<Card {...props} />);

    expect(getByText("Mr Beast")).toBeInTheDocument();
    expect(getByText("Mr Beast is not favorite")).toBeInTheDocument();
  });
});
