"use client"
// IMAGES
import Hexagons from "@/public/hexagons.svg"
import Epiphany from "@/public/epiphany.png"
import Workers from "@/public/workers.png"
import Classroom from "@/public/classroom.jpg"
import RealWorld from "@/public/realworld.jpg"
import Robot from "@/public/robot.jpg"
import Bootcamp from "@/public/bootcamp.jpg"
import BigSmiles from "@/public/bigsmiles_transparent.png"

// COMPONENTS
import Image from "next/image"
import { motion } from "framer-motion"
import ScrollyImage from '@/components/ScrollyImage'

export default function Example() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div
        id="hero"
        className="relative isolate select-none overflow-hidden h-[850px] sm:h-auto bg-slate-900 pb-16 pt-14 sm:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-1/2 transform !-translate-x-1/2 sm:!translate-x-0 sm:-left-10 w-[450px] md:w-[480px] lg:w-[680px] h-auto bottom-0 brightness-125 opacity-90 grayscale bg-transparent"
        >
          <Image
            alt="students excited about computer science"
            src={BigSmiles}
            priority
            width={700}
            className="w-full h-auto scale-x-100 sm:-scale-x-100"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="absolute hidden sm:block right-0 bottom-0 w-[500px] lg:w-[700px] z-0 brightness-125 opacity-90 grayscale bg-transparent"
        >
          <Image
            alt="students excited about computer science"
            src={Epiphany}
            priority
            width={700}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="absolute hidden xl:block left-1/4 transform translate-x-1/2 -bottom-[80px] w-[500px] lg:w-[700px] z-0 brightness-125 opacity-95 grayscale bg-transparent"
        >
          <Image
            alt="students excited about computer science"
            src={Workers}
            priority
            width={550}
            className="w-full h-auto"
          />
        </motion.div>

        <div className="w-full absolute inset-0 -z-10 object-cover">
          <motion.div
            className="h-full w-auto md:h-auto md:w-full absolute inset-0 object-cover"
            initial={{ opacity: 0.55 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.3,
              repeatType: "mirror",
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Image
              alt=""
              src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
              className="h-full w-auto md:h-auto md:w-full absolute inset-0 object-cover"
            />
          </motion.div>
          <div className="w-full h-1/2 absolute top-1/2 bg-gradient-to-b from-transparent to-slate-900"></div>
        </div>

        {/* Hero Text Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 select-text">
          <div className="mx-auto max-w-2xl py-20 sm:pt-44 sm:pb-40 lg:pt-44 lg:pb-60">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Turning students into leaders, shaping the future of STEM
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-8">
                Exploring STEM Literacy is a series of integrated Math
                and Computer Science modules designed to equip high
                school students with essential math and coding skills,
                empowering them to teach these skills to their younger peers.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* <a
                  href="#"
                  className="z-20 text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
                <a
                  href="#about"
                  className="z-20 text-sm font-semibold leading-6 text-white"
                >
                  See how we do it <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <main className="relative isolate">
        {/* <Image
          src={Cropped}
          width={200}
          className="absolute left-0 top-0 inset-0 h-full transform -scale-x-100"
        /> */}
        {/* About the Program */}
        <section id="about" className="py-5 px-4 relative">
          <div className="max-w-5xl mx-auto pt-5 flex flex-col gap-10 items-center justify-center md:flex-row ">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                What is Exploring STEM Literacy?
              </h2>
              <p className="mt-4 text-slate-600 text-lg max-w-2xl">
                Exploring STEM Literacy is a three-year elective program
                designed for 9th to 11th graders. Students learn the
                fundamentals of <strong>coding</strong>,{" "}
                <strong>computational thinking</strong>, and{" "}
                <strong>mathematical reasoning</strong>, applying these skills
                to <strong>real-world problems.</strong> This course combines
                classroom learning with project-based workshops, culminating in
                a student-led boot camp.
              </p>
            </div>
            <div className="flex-grow" />
            <ScrollyImage
              src={Classroom}
              alt="STEM learning"
              width={380}
              className="rotate-3 rounded-xl min-w-[380px]"
              filters="brightness-125"
            />
          </div>
        </section>

        {/* Project-Based Learning */}
        <section className=" py-16 px-4 relative">
          <div className="mx-auto max-w-5xl flex flex-col-reverse gap-10 items-center justify-center md:flex-row">
            <ScrollyImage
              src={Robot}
              alt="STEM learning"
              width={380}
              className="-rotate-3 rounded-xl min-w-[380px]"
              filters="brightness-125"
            />
            <div className="flex-grow" />
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Hands-On Learning Through Projects
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                Students don't just learn; they create. From fall to spring,
                students work on <strong>real-world projects</strong> that
                integrate math and coding. These projects are designed to give
                them practical experience in problem-solving and peer
                collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Boot Camps */}
        <section className="py-16 relative">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col gap-10 items-center justify-center md:flex-row ">
              <div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Prepare to Lead: Spring Boot Camps
                </h2>
                <p className="mt-4 text-slate-600 text-lg">
                  In the spring, students prepare for an exciting challenge:{" "}
                  <strong>
                    leading math and coding boot camps for middle-school
                    students.
                  </strong>{" "}
                  They design learning stations based on the course material and
                  put their facilitation skills to the test, making STEM
                  accessible to younger learners.
                </p>
              </div>
              <div className="flex-grow" />
              <ScrollyImage
                src={RealWorld}
                alt="STEM learning"
                width={380}
                className="rotate-3 rounded-xl min-w-[380px]"
                filters="contrast-125 brightness-90"
              />
            </div>
          </div>
        </section>

        {/* Culminating Event */}
        <section className="max-w-5xl mx-auto py-16 px-4 relative">
          <div className="flex flex-col-reverse gap-10 items-center justify-center md:flex-row ">
            <ScrollyImage
              src={Bootcamp}
              alt="STEM learning"
              width={380}
              className="-rotate-3 rounded-xl min-w-[380px]"
            />
            <div className="flex-grow" />
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Pop-Up Boot Camp: Students as Leaders
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                The program concludes with a pop-up math and coding boot camp,{" "}
                <strong>
                  organized and implemented by the high school students.
                </strong>{" "}
                This event is a celebration of their learning, where they share
                their knowledge with younger students, parents, and teachers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
