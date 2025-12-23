import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg"
          alt="background-logo"
        />
      </div>
      <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="text-3xl font-bold py-4">Sign In</h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
        <button type="submit" className="py-4 my-6 bg-red-700 w-full rounded-lg">
          Login
        </button>
        <p className="py-2">New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
