"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn, scrollIntoView } from "@/lib/utils";
import { FolderKanban, Home, Mail, PenLine, UserRound, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Lottie from "lottie-react";
import underlineAnimation from "@/constants/lottie-underline.json";
import { iconVariants } from "@/constants/variants";
import { IconBurger } from "@tabler/icons-react";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Determine when to toggle the state
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 64 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest < 64 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const links = [
    {
      label: "Home",
      url: "hero",
      icon: <Home className="h-4 w-4" />,
    },
    {
      label: "About",
      url: "about",
      icon: <UserRound className="h-4 w-4" />,
    },
    {
      label: "Experience",
      url: "experience",
      icon: <PenLine className="h-4 w-4" />,
    },
    {
      label: "Projects",
      url: "projects",
      icon: <FolderKanban className="h-4 w-4" />,
    },
    { label: "Contact", url: "contact", icon: <Mail className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <header
    //   className={`bg-transparent fixed top-0 w-full z-50 ${isScrolled && "backdrop-blur-md shadow-sm"}`}
    // >
    //   <div className="container-screen">
    //     <div className="flex h-16 items-center justify-between">
    //       <div className="md:flex md:items-center md:gap-12">
    //         <Link className="block text-zinc-300 hover:scale-95 transition-transform transform duration-150 -rotate-3" href="/">
    //           {/* <svg
    //             className="h-8"
    //             viewBox="0 0 28 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
    //               fill="currentColor"
    //             />
    //           </svg> */}
    //           <div>
    //             <p className="font-bold">Josh K<span className="text-accent-two">&#46;</span></p>
    //             <Lottie animationData={underlineAnimation} loop={false} className="w-14" />
    //           </div>
    //         </Link>
    //       </div>

    //       {/* Tablet nav */}
    //       <div className="hidden md:block">
    //         <nav aria-label="Global">
    //           <ul className="flex items-center gap-6 text-sm">
    //             {links.map((link, index) => (
    //               <li key={index}>
    //                 <Button onClick={() => scrollIntoView(link.url)}
    //                   variant={"ghost"}
    //                   className="font-medium text-base -tracking-wide text-zinc-300 transition hover:text-indigo-500 ease-in-out duration-300 hover:bg-transparent px-2 py-1"
    //                 >
    //                   {link.label}
    //                 </Button>
    //               </li>
    //             ))}
    //           </ul>
    //         </nav>
    //       </div>

    //       {/* Mobile nav */}
    //       <div className="block md:hidden relative">
    //         <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
    //           <DropdownMenuTrigger asChild>
    //             <Button>
    //               {isOpen ?
    //                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
    //                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
    //                 </motion.div>
    //                 :
    //                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .5 }}>
    //                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
    //                 </motion.div>
    //               }
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent className="bg-secondary-two border-none text-zinc-100 !h-fit">
    //             {links.map((item, i) => (
    //               // <motion.div key={i}
    //               //   variants={fadeUp}
    //               //   initial="initial"
    //               //   whileInView="animate"
    //               //   transition={{ duration: .25, delay: 0.15 * i, type: "spring" }}
    //               // >
    //               //   {item.url &&
    //               <DropdownMenuItem key={i} onClick={() => scrollIntoView(item.url)} className="font-semibold py-2 flex items-center gap-2 transition hover:text-indigo-500 ease-in-out duration-300">
    //                 {item.icon}
    //                 {item.label}
    //               </DropdownMenuItem>
    //               //   }
    //               // </motion.div>
    //             ))}
    //           </DropdownMenuContent>
    //         </DropdownMenu>

    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header className={cn("sticky top-0 z-[99] h-16 w-full")}>
      <motion.div
        initial={{ y: 0, width: "100%" }}
        animate={{
          y: isScrolled && isDesktop ? 10 : 0,
          width: isScrolled && isDesktop ? "60%" : "100%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          type: "just",
        }}
        className={cn(
          "container-screen relative flex flex-col overflow-hidden rounded-b-lg py-2 backdrop-blur-md lg:flex-row lg:justify-between lg:rounded-full",
          isScrolled && "bg-secondary-two/50",
          isOpen && "bg-secondary-two/50",
        )}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            className="flex-grow-0 -rotate-3 transform text-zinc-300 transition-transform duration-150 hover:scale-95"
            href="/"
          >
            <div>
              <p className="font-bold">
                Josh K<span className="text-accent-two">&#46;</span>
              </p>
              <Lottie
                animationData={underlineAnimation}
                loop={false}
                className="w-14"
              />
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-2 lg:flex">
            {links.map((item) => (
              <Button
                key={item.url}
                variant={"link"}
                onClick={() => scrollIntoView(item.url)}
                className="group"
              >
                <span className="hover-effect group-hover:-translate-y-1">
                  {item.label}
                </span>
              </Button>
            ))}
          </div>

          {/* Mobile nav toggle */}
          <Button
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="bg-tranparent hover:!bg-transparent hover:!text-zinc-50 lg:hidden"
          >
            <div
              style={{ position: "relative", width: "24px", height: "24px" }}
            >
              <AnimatePresence initial={false} mode="wait">
                {isOpen ? (
                  <motion.div
                    key="x"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.1 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="burger"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.1 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <IconBurger />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Button>

          {/* CV Download button */}
          <Button
            className={cn(
              "hover-effect hidden rounded-full hover:text-zinc-300 lg:inline-block",
              isScrolled && "bg-secondary-two",
            )}
          >
            Resume
          </Button>
        </div>

        {/* Mobile links */}
        {isOpen && (
          <div className="mt-2 flex flex-col">
            {links.map((item, i) => (
              <motion.div
                key={item.url}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
              >
                <Button
                  className="w-fit !px-2 !py-1 text-zinc-100"
                  variant="link"
                  onClick={() => {
                    scrollIntoView(item.url), setIsOpen(!isOpen);
                  }}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            {/* Mobile CV Download button */}
            {/* <Button className="hover-effect rounded-full hover:text-zinc-300 lg:hidden">
              Resume
            </Button> */}
          </div>
        )}
      </motion.div>
    </header>
  );
}
