import { createApiRequest, sendApiRequest } from "@/utils/fetch";
import { showErrorToast } from "@utils/toastNotification.ts";
import endpoints from "@/config/endpoints";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data directly from event target
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Create API request
    try {
      const apiRequest = createApiRequest(endpoints["login"], "POST", data);
      if (!apiRequest) {
        showErrorToast("Error while making Request! Please try again");
        return;
      }
      const { full_URL, options } = apiRequest;
      const response = await sendApiRequest(full_URL, options);

      if (response.data.isFirstTime) {
        console.log("First-time login detected");
        return;
      }
      localStorage.setItem("token", response.token);
      navigate("/home");
    } catch (error) {
      if (error instanceof Error) {
        showErrorToast(
          error.message || "Something went wrong. Please try again."
        );
      } else {
        showErrorToast("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="signup-container w-full px-8">
      <header className="container-title">
        <h1 className="text-2xl font-bold">Login</h1>
      </header>
      <div className="container-contents w-full flex justify-center px-10 md:w-full">
        <form
          method="POST"
          className="w-full"
          id="login-form"
          onSubmit={handleSubmit}
        >
          <div className="form-item">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                id="email"
                className="input input-bordered w-full "
                name="email"
                required
                defaultValue="kevinrodrigues43@gmail.com"
              />
            </label>
          </div>
          <div className="form-item">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                id="password"
                className="input input-bordered w-full "
                name="password"
                required
                defaultValue="Kevinr@78"
              />
            </label>
          </div>
          <button type="submit" className="btn rounded btn-primary mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
