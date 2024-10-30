"use client";
import React from "react";
import Image from "next/image";
import Hexagons from "@/public/hexagons.svg";


interface FooterProps {
  children?: React.ReactNode;
}


const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <footer
      id="footer"
      className="text-white py-12 text-center relative overflow-hidden"
    >
      <div>
        {" "}
        {/* Video Section */}
        <div className="flex items-center justify-center pb-10 ">
          <h2 className="text-3xl font-bold white">
            A look at the work in action
          </h2>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col gap-3 items-center justify-center md:flex-row">
          <div className="flex-1 w-full">
            <iframe
              className="rounded-xl w-full h-auto aspect-video grayscale hover:grayscale-0 transition duration-300"
              src="https://www.youtube.com/embed/E7PxbzUo7Jk?si=t2c89QnzIWLbbxqc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex-1 w-full">
            <iframe
              className="rounded-xl w-full h-auto aspect-video grayscale hover:grayscale-0 transition duration-300"
              src="https://player.vimeo.com/video/1012962496?h=47edf1d6ff&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              title="YPP CS For All // Teacher Professional Development"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <button
            onClick={() => window.open("https://vimeo.com/typp", "_blank")}
            className="mt-10 bg-transparent hover:bg-green-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
          >
            More Videos
          </button>
        </div>
      </div>
      <div className="mt-10 z-10 space-x-4">
        &copy; The Young People's Project {new Date().getFullYear()}.
      </div>
      <div className="absolute bottom-0 -z-10 w-full object-cover overflow-hidden bg-slate-900">
        <Image
          alt=""
          src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
          className="w-screen"
        />
      </div>
    </footer>
  );
};

export default Footer;
