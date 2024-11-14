import React from "react";
import { motion } from "framer-motion";

interface CourseCardProps {
  children?: React.ReactNode;
  name?: string;
  icon?: React.ElementType;
  href?: string;
  setOpen: () => void;
  open: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  // children,
  name,
  open,
  setOpen,
  icon: Icon,
}) => {
  return (
    <>
      <div
        onClick={() => setOpen()}
        className={`text-center relative hover:cursor-pointer border  hover:border  rounded-lg py-2 transition-all duration-[0.35s] ${open ? "bg-slate-800 border-secondary/50 *:text-slate-100" : "hover:border-slate-200 bg-slate-50 border-slate-50"}`}
      >
        <h2 className="m-0 text-lg flex items-center justify-center gap-2 px-2">
          {Icon && <Icon className="text-2xl" />}
          {name}
        </h2>
        {/* { */}
        {/*   open &&  */}
        {/* } */}
        {/* {open && ( */}
        {/*   <motion.div */}
        {/*     className="absolute w-full h-full -bottom-0 left-0 z-10 border-accent border-[1.5px] rounded-lg" */}
        {/*     layoutId="course-card" */}
        {/*     transition={{ duration: 0.25, ease: "easeInOut" }} */}
        {/*   ></motion.div> */}
        {/* )} */}
      </div>
    </>
  );
};

export default CourseCard;
