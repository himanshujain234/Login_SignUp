import {
  fireEvent,
  getAllByRole,
  getByRole,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import SigninForm from "../Components/Pages/SigninForm";
import "@testing-library/jest-dom";

// Mock the fetch API
global.fetch = jest.fn();

describe("SignIn component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });
  test("renders email and password fields, and login button", () => {
    const { getByPlaceholderText, getByText } = render(<SigninForm />);
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByText("Sign In")).toBeInTheDocument();
  });

  test("updates state on input change", () => {
    const { getByPlaceholderText } = render(<SigninForm />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("shows error if form fields empty", () => {
    const { getByText } = render(<SigninForm />);
    const loginButton = getByText("Sign In");
    fireEvent.click(loginButton);
    expect(getByText("All fields required!")).toBeInTheDocument();
  });
  test("handles a successful login", async () => {
    // Mock successful response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ("Sign in successful" ),
    });
    render(<SigninForm />);
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Sign In"));

    // Check if alert is shown (mocked alert)
    expect(fetch).toHaveBeenCalledWith(
      "https://video-dashboard-neon.vercel.app/api/v1/users/login",
      expect.any(Object)
    );
  });
  test("handles a failed login", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });
    render(<SigninForm />);
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@xample.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByText("Sign In"));
    // expect(screen.getByDisplayValue("error")).toHaveTextContent("Something went wrong!");
  });

  test("redirects to the correct URL when the button is clicked", () => {
    // Mock window.location.href
    delete window.location;
    window.location = { href: "" };

    render(<SigninForm />);

    // Simulate button click
    fireEvent.click(getAllByRole("button"));

    // Assert that window.location.href was set correctly
    expect(window.location.href).toBe("https://next-solution-be.vercel.app/auth/google");
  });
});
