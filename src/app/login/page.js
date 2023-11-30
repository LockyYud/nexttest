"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [username, setusername] = useState();
  const [pass, setpass] = useState();
  const onSubMit = async () => {
    const result = await signIn("credentials", {
      username: username,
      password: pass,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            User Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
        </div>
      </form>
      <button className="btn btn-primary" onClick={onSubMit}>
        Sign in
      </button>
    </div>
  );
}
