'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import Image from "next/image"
// import BPSLogo from "@/public/bps-logo-w.png"
import Hexagons from "@/public/hexagons.svg"
import Cropped from "@/public/hexagons-cropped.svg"
import Epiphany from "@/public/epiphany.png"
import Workers from "@/public/workers.png"
import Classroom from "@/public/classroom.jpg"
import RealWorld from "@/public/realworld.jpg"
import Robot from "@/public/robot.jpg"
import Bootcamp from "@/public/bootcamp.jpg"
import BigSmiles from "@/public/bigsmiles_transparent.png"
import Laptops from "@/public/laptops.jpg"
import { motion } from "framer-motion"
import LogoText from '@/components/LogoText'
import FilterImage from '@/components/FilterImage'

const navigation = [
  { name: 'About', href: '#' },
  // { name: 'spacer', href: '' },
  { name: 'Python', href: '#' },
  { name: 'Rust', href: '#' },
  { name: 'Data Science', href: '#' },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const bannerElement = document.getElementById("hero");
    const bannerHeight = bannerElement ? bannerElement.offsetHeight : 0;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (bannerHeight - 130));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 bg-gradient-to-b from-slate-950 to-transparent">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <LogoText />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, index) => {
              if (item.name !== "spacer") return (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                  {item.name}
                </a>
              )
              return <span className="select-none text-slate-400" key={`${item.name} + ${index}`}>|</span>
            })}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 text-black font-logo font-semibold">
                Exploring STEM Literacy
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    if (item.name !== "spacer")
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      )
                  })}
                </div>
                <div className="py-6">
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <motion.div
          className="absolute inset-x-0 top-0 -z-10 bg-gradient-to-b from-slate-950 to-slate-900 h-full select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}>
          <Image
            alt=""
            src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
            className="select-none h-full w-auto md:h-full md:w-full absolute inset-0 object-cover opacity-50"
          />
        </motion.div>
      </header>

      {/* Hero section */}
      <div id="hero" className="relative isolate select-none overflow-hidden h-[750px] sm:h-auto bg-slate-900 pb-16 pt-14 sm:pb-20">
        <Image
          alt="students excited about computer science"
          src={BigSmiles}
          priority
          width={700}
          className="absolute left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:-left-10 -scale-x-100 w-[450px] md:w-[480px] lg:w-[680px] h-auto bottom-0 brightness-125 opacity-80 grayscale bg-transparent"
        />
        <Image
          alt="students excited about computer science"
          src={Epiphany}
          priority
          width={700}
          className="absolute hidden sm:block right-0 bottom-0 w-[500px] lg:w-[700px] z-0 brightness-125 opacity-90 grayscale bg-transparent"
        />
        <Image
          alt="students excited about computer science"
          src={Workers}
          priority
          width={550}
          className="absolute hidden xl:block transform left-1/2 -translate-x-1/2 right-0 -bottom-[80px] w-[500px] lg:w-[700px] z-0 brightness-125 opacity-95 grayscale bg-transparent"
        />
        <div className="w-full absolute inset-0 -z-10 object-cover">
          <motion.div
            className="h-full w-auto md:h-auto md:w-full absolute inset-0 object-cover"
            initial={{ opacity: 0.55 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, repeatType: "mirror", ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              alt=""
              src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
              className="h-full w-auto md:h-auto md:w-full absolute inset-0 object-cover"
            />
          </motion.div>
          <div className="w-full h-1/2 absolute top-1/2 bg-gradient-to-b from-transparent to-slate-900">
          </div>
        </div>


        {/* Hero Text Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 select-text">
          <div className="mx-auto max-w-2xl py-32 sm:pt-44 sm:pb-40 lg:pt-48 lg:pb-60">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Turning students into leaders, shaping the future of STEM
              </h1>
              <p className="mt-6 text-lg md:text-xl leading-8">
                Exploring STEM Literacy trains high schoolers with coding and math skills, and empowers them to teach these skills to their peers.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
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
        <section className=" py-16 px-4 relative">
          <div className="max-w-5xl  mx-auto  flex flex-col gap-10 items-center justify-center md:flex-row ">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">What is Exploring STEM Literacy?</h2>
              <p className="mt-4 text-slate-600 text-lg max-w-2xl">
                Exploring STEM Literacy is a three-year elective program designed for 9th to 11th graders. Students learn the fundamentals of <strong>coding</strong>, <strong>computational thinking</strong>, and <strong>mathematical reasoning</strong>, applying these skills to <strong>real-world problems.</strong> This course combines classroom learning with project-based workshops, culminating in a student-led boot camp.
              </p>
            </div>
            <Image
              src={Classroom}
              alt="STEM learning"
              width={380}
              className="rotate-3 right-0 rounded-xl filter brightness-125"
            />
          </div>
        </section>

        {/* Project-Based Learning */}
        <section className=" py-16 px-4 relative">
          <div className="mx-auto max-w-5xl flex flex-col-reverse gap-10 items-center justify-center md:flex-row">
            <Image
              src={RealWorld}
              alt="STEM learning"
              width={380}
              className="-rotate-3 right-0 rounded-xl filter contrast-125 brightness-90"
            />
            <div className='flex-grow' />
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Hands-On Learning Through Projects</h2>
              <p className="mt-4 text-slate-600 text-lg">
                Students don't just learn; they create. From fall to spring, students work on <strong>real-world projects</strong> that integrate math and coding. These projects are designed to give them practical experience in problem-solving and peer collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Boot Camps */}
        <section className="py-16 relative">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col gap-10 items-center justify-center md:flex-row ">
              <div>
                <h2 className="text-3xl font-bold text-slate-800">Prepare to Lead: Spring Boot Camps</h2>
                <p className="mt-4 text-slate-600 text-lg">
                  In the spring, students prepare for an exciting challenge: <strong>leading math and coding boot camps for middle-school students.</strong> They design learning stations based on the course material and put their facilitation skills to the test, making STEM accessible to younger learners.
                </p>
              </div>
              <Image
                src={Robot}
                alt="STEM learning"
                width={380}
                className="rotate-3 right-0 rounded-xl filter brightness-125"
              />
            </div>
          </div>
        </section>

        {/* Culminating Event */}
        <section className="max-w-5xl mx-auto py-16 px-4 relative">
          <div className="flex flex-col-reverse gap-10 items-center justify-center md:flex-row ">
            <Image
              src={Bootcamp}
              alt="STEM learning"
              width={380}
              className="-rotate-3 right-0 rounded-xl"
            />
            <div className='flex-grow' />
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Pop-Up Boot Camp: Students as Leaders</h2>
              <p className="mt-4 text-slate-600 text-lg">
                The program concludes with a pop-up math and coding boot camp, <strong>organized and implemented by the high school students.</strong> This event is a celebration of their learning, where they share their knowledge with younger students, parents, and teachers.
              </p>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="bg-slate-900 text-white py-16 text-center relative">
          <div className="mt-6 space-x-4">
          &copy; The Young People's Project {new Date().getFullYear()}.
          </div>
          <Image
            alt=""
            src={Hexagons} // generated with https://www.fffuel.co/gggyrate/
            className="select-none h-full w-auto md:h-full md:w-full absolute inset-0 object-cover opacity-60"
          />
        </section>
      </main>

    </div>
  )
}
