import MoviePoster from "@assets/login-movie-poster.avif";

export default function Signup() {
  return (
    <div className="flex h-screen">
      <div className="signup-container flex flex-col flex-1  justify-center items-center">
        <header className="container-title">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </header>
        <div className="container-contents w-full flex justify-center px-10 md:w-full">
          <form method="POST" className="w-full">
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
      <div className="container-image hidden flex-1 md:block">
        <img src={MoviePoster} alt="" className="h-full" />
      </div>
    </div>
  );
}
