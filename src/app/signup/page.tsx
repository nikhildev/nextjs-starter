type Props = {};

const SignupPage = (props: Props) => (
  <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
      <div className="text-3xl font-bold text-secondary">Signup</div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <div>
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input type="text" className="input input-primary" />
          </div>
          <div className="flex flex-col mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" className="input input-primary" />
          </div>
          <div className="flex flex-col mt-4">
            <label className="label">
              <span className="label-text">Password again</span>
            </label>
            <input type="password" className="input input-primary" />
          </div>
        </div>

        <div className="flex flex-row">
          <button type="submit" className="btn btn-primary flex-auto">
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default SignupPage;
