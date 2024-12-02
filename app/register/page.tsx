"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/login");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    
    if (!name ) {
      setError("Enter your name!");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }
    

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200 || res.status === 201) {
        setError("");
        router.push("/login"); // Shouldn't this be "/dashboard" instead of "/login"?
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex flex-col items-center justify-between min-h-screen p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="mb-8 text-4xl font-semibold text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full px-3 py-2 mb-4 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="name"
             
            />
            <input
              type="text"
              className="w-full px-3 py-2 mb-4 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="w-full px-3 py-2 mb-4 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              {" "}
              Register
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="mt-4 text-center text-gray-500">- OR -</div>
          <Link
            className="block mt-2 text-center text-blue-500 hover:underline"
            href="/login"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default Register;