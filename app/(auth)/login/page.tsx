"use client";
import { useState } from "react";
import Image from "next/image";
import Hexagons from "@/public/hexagons.svg";
import LogoText from "@/components/LogoText";

export default function LoginPage() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="relative isolate flex min-h-[100vh] flex-col justify-center px-6 py-8 lg:px-8 bg-slate-900 overflow-hidden">
        <Image
          alt=""
          src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
          className="h-full w-auto md:h-auto md:w-full absolute inset-0 object-cover -z-10"
        />
        <div>
          <div className="absolute w-full h-[10%] inset-x-0 top-0 px-8 pt-5 z-50 bg-gradient-to-b from-slate-950 to-transparent">
            <LogoText />
          </div>
        </div>
        <div className="bg-white -mt-24 w-fit sm:mx-auto sm:w-full sm:max-w-sm text-slate-900 px-8 py-12 rounded-lg">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight ">
            Sign in to access course content
          </h2>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium ">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full px-3 rounded-md border border-slate-200 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10  outline-none focus:ring-inset focus:ring-secondary sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium "
                  >
                    Password
                  </label>
                  {/* <div className="text-sm"> */}
                  {/*   <a */}
                  {/*     href="#" */}
                  {/*     className="font-semibold text-accent hover:text-accent" */}
                  {/*   > */}
                  {/*     Forgot password? */}
                  {/*   </a> */}
                  {/* </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full px-3 rounded-md border border-slate-200 bg-white/5 py-1.5  shadow-sm ring-1 ring-inset ring-white/10  outline-none focus:ring-inset focus:ring-secondary sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={() => setClicked(true)}
                  className="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm/6 font-semibold  shadow-sm hover:bg-accent-hover focus-visible:outline text-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div
              className={`mt-5 text-rose-800 ${clicked ? "block" : "hidden"}`}
            >
              Hmm... couldn't find your account.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
