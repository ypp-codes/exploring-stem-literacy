"use client";
import CourseCard from "@/components/CourseCard";
import { FaPython } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { FaCode } from "react-icons/fa6";
import { useState } from "react";
import Robot from "@/public/robot.jpg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const PythonSection = () => (
  <>
    <h2 className="flex gap-2 items-center mt-0">
      <FaPython /> Python Course
    </h2>
    <h3>What is Python?</h3>
    <p>
      Python is a popular, beginner-friendly programming language known for its
      simple syntax and wide-ranging applications. It&apos;s used in everything
      from web development to artificial intelligence, making it one of the most
      versatile languages for people getting started with coding.
    </p>
    <h3>How is the course structured?</h3>
    <p>
      The course starts with foundational concepts like variables, loops, conditionals,
      and functions, gradually building up to more complex topics such as data
      handling and applications that solve real world problems. Many of the experiences include
      peer-teaching exercises, where students work in pairs or small groups to
      reinforce their understanding by explaining concepts to one another.
    </p>
  </>
);

const RustSection = () => (
  <>
    <h2 className="flex gap-2 items-center mt-0">
      <FaRust /> Rust Course
    </h2>
    <h3>What is Rust?</h3>
    <p>
      Rust is a programming language focused on performance and safety,
      especially in system-level programming. It&apos;s known for preventing
      common bugs that other languages allow, making it popular in industries
      like robotics, game development, and software for embedded devices.
    </p>
    <h3>How is the course structured?</h3>
    <p>
      This course covers Rust basics, including syntax, memory management, and
      error handling. Students will work on small projects to build practical
      skills while collaborating with classmates on group exercises and peer-led
      sessions.
    </p>
  </>
);

const DSSection = () => (
  <>
    <h2 className="flex gap-2 items-center mt-0">
      <SlGraph /> Data Science
    </h2>
    <h3>Why Python in Data Science?</h3>
    <p>
      Data science is the process of analyzing data to find patterns and
      insights. Python is one of the most popular languages for data science due
      to its readability and powerful libraries, making it ideal for tasks like
      analyzing trends, building visualizations, and making data-driven
      decisions.
    </p>
    <h3>How is the course structured?</h3>
    <p>
      This course introduces students to data science fundamentals, starting
      with data collection, cleaning, and basic analysis. Students will learn to
      use Python libraries like Pandas and Matplotlib, working on small projects
      that involve analyzing real-world data. Collaborative exercises and
      peer-teaching are integrated throughout to reinforce concepts.
    </p>
  </>
);

const CSSection = () => (
  <>
    <h2 className="flex gap-2 items-center mt-0">
      <FaCode /> CS For All
    </h2>
    <h3>What is CS For All?</h3>
    <p>
      In 2020, YPP was awarded a National Science Foundation grant to develop a research-practice partnership 
      that aimed to increase the number of high school computer science teachers through a professional
      development model that uses culturally relevant pedagogy and integration
      into mathematics classrooms. Since then, we have augmented the Bootstrap:Algebra curriculum that math teacher 
      can utilize in their classrooms to deepen student understanding of functions. 
    </p>
    <h3>Why Bootstrap:Algebra?</h3>
    <p>
    We like the Bootstrap: Algebra curriculum because students deeply engage with 
    the fundamental mathematical concept of functions. By creating video games, 
    designing shapes, and learning through trial and error, they master essential 
    algebraic principles, including order of operations, function composition, 
    function definition, inequalities, piecewise functions, and the distance formula. 
    Alongside these mathematical skills, students also explore key computer 
    science concepts like reactive programming, data types, testing, and code 
    reviews, making the learning experience both interdisciplinary and practical.{" "}
      
    </p>
  </>
);

const CoursesPage = () => {
  const [pyOpen, setPyOpen] = useState(true);
  const [rsOpen, setRsOpen] = useState(false);
  const [dsOpen, setDsOpen] = useState(false);
  const [csOpen, setCsOpen] = useState(false);

  function openSection(section: "py" | "rs" | "ds" | "cs") {
    switch (section) {
      case "py":
        setPyOpen(true);
        setRsOpen(false);
        setDsOpen(false);
        setCsOpen(false);
        break;

      case "rs":
        setPyOpen(false);
        setRsOpen(true);
        setDsOpen(false);
        setCsOpen(false);
        break;

      case "ds":
        setPyOpen(false);
        setRsOpen(false);
        setDsOpen(true);
        setCsOpen(false);
        break;

      case "cs":
        setPyOpen(false);
        setRsOpen(false);
        setDsOpen(false);
        setCsOpen(true);
        break;
    }
  }

  return (
    <div className="prose max-w-3xl mx-auto px-3 py-8">
      <h1>Courses</h1>
      <p>
        The Exploring STEM Literacy experiences cover a variety of content areas,
        equipping students with skills from various parts of the STEM world.
      </p>
      <p>
        There are currently <strong>4</strong> courses available. Click one to
        learn more!
      </p>
      <div className="grid py-8 max-w-sm sm:max-w-xl m-auto grid-cols-1 sm:grid-cols-2 gap-4">
        <CourseCard
          name="Python"
          href="/courses/python"
          icon={FaPython}
          setOpen={() => openSection("py")}
          open={pyOpen}
        />
        <CourseCard
          name="Rust"
          href="/courses/rust"
          icon={FaRust}
          setOpen={() => openSection("rs")}
          open={rsOpen}
        />
        <CourseCard
          name="Data Science"
          href="/courses/data-science"
          icon={SlGraph}
          setOpen={() => openSection("ds")}
          open={dsOpen}
        />
        <CourseCard
          name="CS For All"
          href="/courses/cs-for-all"
          icon={FaCode}
          setOpen={() => openSection("cs")}
          open={csOpen}
        />
      </div>

      <section className="py-8 relative">
        <div className="max-w-4xl border rounded-xl border-slate-200 p-4 mb-8">
          <AnimatePresence mode="wait">
            {pyOpen && (
              <motion.div
                key="python"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PythonSection />
              </motion.div>
            )}
            {rsOpen && (
              <motion.div
                key="rust"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <RustSection />
              </motion.div>
            )}
            {dsOpen && (
              <motion.div
                key="datascience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <DSSection />
              </motion.div>
            )}
            {csOpen && (
              <motion.div
                key="computerscience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CSSection />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mx-auto max-w-5xl flex flex-col gap-10 items-center justify-center md:flex-row">
          <div>
            <h2 className="text-3xl mt-0 font-bold text-slate-800">
            Why Exploring STEM Literacy Matters Now
            </h2>
            <p className="mt-4 text-slate-600">
            There is a pressing national and global need for the content 
            in the Exploring STEM Literacy series to reach as many 
            children as possible across the United States. Watch this 
            insightful video essay by Cliff Freeman, which delves 
            into the moral, political, and societal imperatives facing 
            our country and world today—challenges these materials 
            are designed to address.
            </p>
          </div>
          {/* <div className="flex-grow" /> */}
          <Image
            src={Robot}
            alt="STEM learning"
            width={300}
            className="rotate-3 rounded-xl min-w-[300px] filter brightness-125"
          />
        </div>
      </section>
      <section className="py-8 relative">
        <div>
          <h3 className="text-3xl mt-0 font-bold text-slate-800">
            I want to look at the content myself!
          </h3>
          <p className="mt-4 text-slate-600">
            All of the content for the courses are available for teachers.{" "}
            <Link href="/login">Log in</Link> to view.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
