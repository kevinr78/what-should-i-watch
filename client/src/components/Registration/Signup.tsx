import { createApiRequest, sendApiRequest } from "@/utils/fetch";
import { useNavigate } from "react-router";
import { showErrorToast } from "@/utils/toastNotification";
import endpoints from "@/config/endpoints";

export default function Signup() {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data directly from event target
    const formData = new FormData(e.currentTarget);

    formData.append(
      "name",
      formData.get("first-name") + " " + formData.get("last-name")
    );

    const data = Object.fromEntries(formData.entries());
    // Create API request
    try {
      const apiRequest = createApiRequest(endpoints["signup"], "POST", data);
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
    <div className="w-full px-8">
      <header className="container-title">
        <h1 className="text-2xl font-bold">Sign Up</h1>
      </header>
      <div className="container-contents w-full flex justify-center px-10 md:w-full">
        <form
          method="POST"
          className="w-full"
          id="signup-form"
          onSubmit={handleSubmit}
        >
          <div className=" w-full form-item flex flex-col gap-2 sm:flex-row sm:w-full ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text"> First Name</span>
              </div>
              <input
                type="first-name"
                id="first-name"
                className="input input-bordered w-full "
                name="first-name"
                required
              />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text"> Last Name</span>
              </div>
              <input
                type="last-name"
                id="last-name"
                className="input input-bordered w-full "
                name="last-name"
                required
              />
            </label>
          </div>
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
              />
            </label>
          </div>
          <button type="submit" className="btn rounded btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
