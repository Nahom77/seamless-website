export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              Welcome back
            </h1>
          </div>
          {/* Contact form */}
          <form className="max-w-[400px] mx-auto">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block font-medium text-indigo-200/65 text-sm"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full form-input"
                  placeholder="Your email"
                />
              </div>
              <div>
                <div className="mb-1 flex justify-between items-center gap-3">
                  <label
                    className="block font-medium text-indigo-200/65 text-sm"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-gray-600 text-sm hover:underline"
                    href="/reset-password"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full form-input"
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="w-full bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-t from-indigo-600 to-indigo-500 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] text-white btn">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
