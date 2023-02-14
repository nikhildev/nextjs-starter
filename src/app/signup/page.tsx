"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface ISignupForm {
  email: string;
  password: string;
  passwordAgain: string;
}

const Error = (props: { message: string }) => (
  <span className="text-sm text-error m-2">{props.message}</span>
);

const SignupPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignupForm>();
  const onSubmit: SubmitHandler<ISignupForm> = (data) => console.log(data);

  return (
    <div className="flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-3xl font-bold text-secondary">Signup</div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="text"
                autoComplete="email"
                className="input input-primary"
                {...register("email", { required: true })}
              />
              {errors.email && <Error message="Email is incorrect" />}
            </div>
            <div className="flex flex-col mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                autoComplete="new-password"
                className="input input-primary"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="label">
                <span className="label-text">Password again</span>
              </label>
              <input
                type="password"
                autoComplete="new-password"
                className="input input-primary"
                {...register("passwordAgain", { required: true })}
              />
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
};

export default SignupPage;
