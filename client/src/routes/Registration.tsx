import { useState } from "react";
import Login from "@components/Registration/Login";

import Signup from "@components/Registration/Signup";
import HouseBg from "@/assets/bgPic.jpg";

export default function Registration() {
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  return (
    <div className="flex h-screen">
      <div className="signup-container flex flex-col flex-1  justify-center items-center">
        {isLoggingIn && <Login />}
        {!isLoggingIn && <Signup />}
        <button
          role="button"
          className="btn btn-accent "
          onClick={() => {
            setIsLoggingIn(!isLoggingIn);
          }}
        >
          {isLoggingIn
            ? "New Here? Click here to Signup"
            : "Already a user? Click here to Login"}
        </button>
      </div>

      <div className="container-image hidden flex-1 md:block">
        <img src={HouseBg} alt="" className="h-full" />
      </div>
    </div>
  );
}
