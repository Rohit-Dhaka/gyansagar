
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowUpRight,
  MapPin,
  Mail,
  GraduationCap,
} from "lucide-react";

import Logo from "../../assets/image/Logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Faculty", path: "/faculty" },
    { name: "Contact", path: "/contact" },
  ];

  const courses = [
    { name: "UGC NET", path: "/courses/ugc-net", tag: "Popular" },
    { name: "CSIR NET", path: "/courses/csir-net" },
    { name: "HTET", path: "/courses/htet" },
    { name: "CTET", path: "/courses/ctet" },
    { name: "DSSSB", path: "/courses/dsssb" },
    { name: "TGT / PGT", path: "/courses/tgt-pgt" },
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setCourseOpen(false);
  };

  const navClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-sm font-bold transition-colors duration-200
    after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-[#a51620] after:transition-all after:duration-300
    ${
      isActive
        ? "text-[#a51620] after:w-full"
        : "text-slate-700 after:w-0 hover:text-[#a51620] hover:after:w-full"
    }`;

  const courseActive = courses.some(
    (course) => window.location.pathname === course.path
  );

  return (
    <header className="relative z-50 w-full shrink-0 bg-white">

      {/* TOP INFORMATION BAR */}
      <div className="hidden h-9 w-full items-center bg-[#850f18] text-white md:flex">
        <div className="flex w-full items-center justify-between gap-4 px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs font-medium text-red-50">
            <GraduationCap size={16} />
            <span>Welcome to Gyan Sagar NET Classes</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:gyansagar02102018@gmail.com"
              className="flex items-center gap-2 text-xs font-medium transition hover:text-yellow-300"
            >
              <Mail size={14} />
              gyansagar02102018@gmail.com
            </a>

            <a
              href="tel:+919728306888"
              className="flex items-center gap-2 text-xs font-bold transition hover:text-yellow-300"
            >
              <Phone size={14} />
              +91 97283-06888
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="relative h-[76px] w-full border-b border-slate-100 bg-white shadow-sm md:h-[82px]">
        <div className="flex h-full w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex shrink-0 items-center"
          >
            <img
              src={Logo}
              alt="Gyan Sagar NET Classes"
              className="h-12 w-auto object-contain transition duration-300 group-hover:scale-[1.03] sm:h-14 lg:h-[62px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden h-full items-center gap-5 xl:flex 2xl:gap-8">

            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={navClass}
              >
                {link.name}
              </NavLink>
            ))}

            {/* DESKTOP COURSES */}
            <div
              className="group relative flex h-full items-center"
              onMouseEnter={() => setCourseOpen(true)}
              onMouseLeave={() => setCourseOpen(false)}
            >
              <div className="flex items-center gap-1">
                <NavLink
                  to="/courses"
                  className={() =>
                    `relative whitespace-nowrap py-2 text-sm font-bold transition-colors duration-200 ${
                      courseActive ||
                      window.location.pathname === "/courses"
                        ? "text-[#a51620]"
                        : "text-slate-700 hover:text-[#a51620]"
                    }`
                  }
                >
                  Courses
                </NavLink>

                <button
                  type="button"
                  onClick={() => setCourseOpen((prev) => !prev)}
                  aria-label="Open courses dropdown"
                  aria-expanded={courseOpen}
                  className="flex h-8 w-7 items-center justify-center text-slate-700 transition hover:text-[#a51620]"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      courseOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* DROPDOWN */}
              <div
                className={`absolute left-0 top-full z-50 w-64 rounded-xl border border-slate-100 bg-white p-2 shadow-xl transition-all duration-200 ${
                  courseOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-2 opacity-0"
                }`}
              >
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#a51620]">
                    Our Courses
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Choose your preparation program
                  </p>
                </div>

                <div className="py-1">
                  {courses.map((course) => (
                    <NavLink
                      key={course.name}
                      to={course.path}
                      onClick={() => setCourseOpen(false)}
                      className={({ isActive }) =>
                        `group/item flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition ${
                          isActive
                            ? "bg-red-50 text-[#a51620]"
                            : "text-slate-700 hover:bg-red-50 hover:text-[#a51620]"
                        }`
                      }
                    >
                      <span>{course.name}</span>
                      <ArrowUpRight
                        size={15}
                        className="text-slate-400 transition group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-[#a51620]"
                      />
                    </NavLink>
                  ))}
                </div>

                <Link
                  to="/courses"
                  onClick={() => setCourseOpen(false)}
                  className="mt-1 flex items-center justify-center rounded-lg bg-red-50 px-4 py-3 text-xs font-bold text-[#a51620] transition hover:bg-[#a51620] hover:text-white"
                >
                  Explore All Courses
                  <ArrowUpRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={navClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP APPLY BUTTON */}
          <div className="hidden shrink-0 xl:block">
            <Link
              to="/admissions"
              className="group flex items-center gap-3 rounded-lg bg-[#a51620] px-5 py-3 text-sm font-bold text-white shadow-md shadow-red-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#800e17] hover:shadow-lg"
            >
              <span>Apply Now</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setCourseOpen(false);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#850f18] transition hover:bg-[#850f18] hover:text-white xl:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        className={`absolute left-0 top-full z-50 w-full border-b border-slate-100 bg-white shadow-xl transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "visible max-h-[calc(100svh-125px)] overflow-y-auto opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-5">

          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-bold transition ${
                  isActive
                    ? "bg-red-50 text-[#a51620]"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* MOBILE COURSES */}
          <div>
            <div className="flex items-center justify-between rounded-lg px-4 py-3 transition hover:bg-slate-50">
              <NavLink
                to="/courses"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `text-sm font-bold ${
                    isActive ||
                    courses.some(
                      (course) => window.location.pathname === course.path
                    )
                      ? "text-[#a51620]"
                      : "text-slate-700"
                  }`
                }
              >
                Our Courses
              </NavLink>

              <button
                type="button"
                onClick={() => setCourseOpen((prev) => !prev)}
                aria-label="Expand courses"
                aria-expanded={courseOpen}
                className="flex h-7 w-7 items-center justify-center text-slate-700"
              >
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    courseOpen ? "rotate-180 text-[#a51620]" : ""
                  }`}
                />
              </button>
            </div>

            {courseOpen && (
              <div className="ml-4 flex flex-col border-l-2 border-red-100 pl-3">
                {courses.map((course) => (
                  <NavLink
                    key={course.name}
                    to={course.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-red-50 text-[#a51620]"
                          : "text-slate-600 hover:bg-red-50 hover:text-[#a51620]"
                      }`
                    }
                  >
                    {course.name}
                  </NavLink>
                ))}

                <Link
                  to="/courses"
                  onClick={closeMobileMenu}
                  className="px-4 py-2.5 text-sm font-bold text-[#a51620]"
                >
                  View All Courses →
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-sm font-bold transition ${
                  isActive
                    ? "bg-red-50 text-[#a51620]"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* APPLY BUTTON */}
          <Link
            to="/admissions"
            onClick={closeMobileMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#a51620] px-5 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#800e17]"
          >
            Apply for Admission
            <ArrowUpRight size={18} />
          </Link>

          {/* PHONE */}
          <a
            href="tel:+919728306888"
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-red-100 px-5 py-3 text-sm font-bold text-[#850f18] transition hover:bg-red-50"
          >
            <Phone size={17} />
            +91 97283-06888
          </a>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
            <MapPin size={14} className="text-[#a51620]" />
            Hisar, Haryana
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
