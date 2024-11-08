import React from "react";

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
        className={`text-center hover:cursor-pointer border border-slate-50 hover:border hover:border-slate-200 bg-slate-50 rounded-lg py-2 transition ${open ?? "bg-slate-200"}`}
      >
        <h2 className="m-0 text-lg flex items-center justify-center gap-2 px-2">
          {Icon && <Icon className="text-2xl" />}
          {name}
        </h2>
      </div>
    </>
  );
};

export default CourseCard;
