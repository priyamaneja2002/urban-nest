import {Link} from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        SignUp
      </h1>
      <form className="flex flex-col gap-4 ">
        <input type="text" placeholder="username" className="p-3 rounded-lg border" id="username" />
        <input type="email" placeholder="email" className="p-3 rounded-lg border" id="email" />
        <input type="password" placeholder="password" className="p-3 rounded-lg border" id="password" />
        <button className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80">Sign up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">SignIn</span>
        </Link>
      </div>
    </div>
  )
}
