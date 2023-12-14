import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Topbar from "../components/Topbar";

describe("Topbar", () => {
  it("renders Topbar with Download button", () => {
    render(<Topbar />);
    
    const button = screen.getByText('Resume');
    expect(button).toBeInTheDocument();
  });

  it("clicking the button triggers the download", async () => {
    render(<Topbar />);
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      blob: jest.fn().mockResolvedValue(new Blob()),
    });
    const button = screen.getByText('Resume');
    fireEvent.click(button);
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
  });
});
