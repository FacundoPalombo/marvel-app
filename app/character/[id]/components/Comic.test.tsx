import { render } from "@testing-library/react";
import Comic from "./Comic";

describe("Comic unit tests", () => {
  it("should match to snapshot", () => {
    const props = {
      img: "image",
      title: "Tremendo comic",
      issueDate: "2024",
    };

    const { asFragment } = render(<Comic {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render ok", () => {
    const props = {
      img: "image",
      title: "Tremendo comic",
      issueDate: "2024",
    };

    const { getByRole } = render(<Comic {...props} />);

    expect(
      getByRole("heading", { name: "Tremendo comic" })
    ).toBeInTheDocument();
  });
});
