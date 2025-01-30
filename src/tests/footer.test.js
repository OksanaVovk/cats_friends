/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Footer", () => {
  it("Footer section 'About us' exists on the screen", async () => {
    render(<App />);
    const firstSection = screen.getByText("About us").closest("div");

    expect(firstSection).toBeInTheDocument();
  });
  
  it("Footer section 'Information' exists on the screen", async () => {
    render(<App />);
    const firstSection = screen.getByText("Information").closest("div");
    
    expect(firstSection).toBeInTheDocument();
  });
});
