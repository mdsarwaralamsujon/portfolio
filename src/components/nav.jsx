import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Section with id "${id}" not found!`);
      return;
    }

    const navHeight = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setOpen(false);
  };

  useEffect(() => {
    const sections = ["skills", "education", "contacts"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = prevScrollPos < currentScrollPos;

      setVisible(
        !scrollingDown ||
          currentScrollPos < 100 ||
          currentScrollPos < prevScrollPos ||
          open
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, open]);

  const NavLink = ({ label }) => {
    const id = label.toLowerCase();
    const isActive = active === id;

    return (
      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(id);
        }}
        className={`
          relative pb-1 transition-all duration-300 cursor-pointer
          ${
            isActive
              ? "text-[var(--active)] font-semibold"
              : "hover:text-[var(--active)]"
          }
          group
        `}
      >
        {label}
        <span
          className={`
            absolute left-0 bottom-0 h-0.5 bg-[var(--active)]
            transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </a>
    );
  };

  const MobileNavLink = ({ label }) => {
    const id = label.toLowerCase();

    return (
      <a
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(id);
        }}
        className="block py-2 px-4 rounded-lg transition-all duration-300 hover:bg-[var(--active)] hover:text-[var(--bg)] hover:translate-x-2 hover:shadow-md"
      >
        {label}
      </a>
    );
  };

  return (
    <>
      {/* Hide effect */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-5 px-6 border-b border-[var(--text)] text-[var(--text)] xl:px-20 bg-[var(--bg)] shadow-md
          transition-transform duration-300 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold transition-all duration-300 hover:text-[var(--active)] hover:scale-105"
        >
          Sarwar Alam Sujon.
        </a>

        <button
          onClick={() => setOpen(true)}
          className="sm:hidden text-3xl p-1 transition-all duration-300 hover:scale-110 hover:text-[var(--active)]"
          aria-label="Open menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <ul className="hidden sm:flex gap-8 md:gap-10 text-xl items-center">
          {["Skills", "Education", "Contacts"].map((label) => (
            <li key={label}>
              <NavLink label={label} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-[var(--bg)] text-[var(--text)] p-6 shadow-2xl
          transform transition-transform duration-400 ease-in-out z-50 sm:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-xl p-2 rounded-2xl bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--active)] transition-all"
        >
          Close
        </button>

        <ul className="flex flex-col gap-6 text-xl mt-16">
          {["Skills", "Education", "Contacts"].map((label) => (
            <li key={label}>
              <MobileNavLink label={label} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
