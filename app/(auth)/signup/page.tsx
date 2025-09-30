"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Signing up user
    const { error } = await authClient.signUp.email({
      email, // user email address
      password, // user password -> min 8 characters by default
      name, // user display name
    });

    if (error) {
      setError(error.message || "Something went wrong");
    } else {
      toast.success("Signed up successfully.");
      router.push("/");
    }

    console.log("hello");
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              Create an Account
            </h1>
          </div>

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact form */}
          <form onSubmit={handleSignIn} className="max-w-[400px] mx-auto">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block font-medium text-indigo-200/65 text-sm"
                  htmlFor="email"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  className="w-full form-input"
                  placeholder="Your Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full form-input"
                  placeholder="Your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button
                type="submit"
                className="w-full bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-t from-indigo-600 to-indigo-500 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] text-white cursor-pointer btn"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
