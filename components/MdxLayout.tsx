"use client"
import clsx from "clsx"

export default function MdxLayout({ children, className }: { children: React.ReactNode, className?: string }) {
  // Create any shared layout or styles here
  return (
    <div className={clsx(
      className,
      'prose max-w-3xl mx-auto prose-slate w-full flex-grow px-6 py-12',
      // headings
      'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:lg:prose-headings:scroll-mt-[8.5rem]',
      // lead
      'prose-lead:text-slate-500',
      // links
      'prose-a:font-semibold',
      // link underline
      'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.indigo.300))] hover:prose-a:[--tw-prose-underline-size:6px',
      // pre
      'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg',
      // hr
      'prose-hr:border-slate-300',
      'prose-par: text-[1.05rem]'
    )}>
      {children}
    </div>
  )
}