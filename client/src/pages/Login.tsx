import MoviePoster from "@assets/login-movie-poster.avif";

export default function Login() {
  return (
    <div className="flex h-screen">
      <div className="signup-container flex flex-col flex-1  justify-center items-center">
        <header className="container-title">
          <h1 className="text-2xl font-bold">Sign Up</h1>
        </header>
        <div className="container-contents w-full flex justify-center px-10 md:w-full">
          <form method="POST" className="w-full">
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
              Login
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
