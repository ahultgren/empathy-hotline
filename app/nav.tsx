"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 z-40 w-full border-b bg-gray font-bold text-gray"
      role="navigation"
    >
      <div className="mx-auto max-w-5xl sm:flex">
        <div className="flex min-h-12 px-4">
          <button
            type="button"
            className="leading-1 order-1 ml-auto self-center rounded border px-3 py-1 sm:hidden"
            onClick={() => setOpen(!isOpen)}
          >
            <span className="sr-only">Toggle navigation</span>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          <a
            className="block self-center py-1 text-lg hover:text-grayhover"
            href="#"
          >
            Andreas Hultgren
          </a>
        </div>

        <ul
          className="sm:!max-h-96 ml-auto bg-gray text-sm sm:flex sm:bg-transparent overflow-hidden transition-all"
          style={
            isOpen
              ? { maxHeight: "24rem", transition: "max-height 0.15s ease-out" }
              : { maxHeight: "0rem", transition: "max-height 0.15s ease-in" }
          }
        >
          <li className="sm:py-[14px]">
            <a
              className="block bg-darkgray px-4 py-4 text-grayactive hover:text-grayhover sm:inline"
              href="#empathy"
            >
              What
            </a>
          </li>
          <li className="sm:py-[14px]">
            <a
              className="block px-4 py-4 hover:text-grayhover sm:inline"
              href="#how"
            >
              How
            </a>
          </li>
          <li className="sm:py-[14px]">
            <a
              className="block px-4 py-4 hover:text-grayhover sm:inline"
              href="#who"
            >
              Who
            </a>
          </li>
          <li className="sm:py-[14px]">
            <a
              className="block px-4 py-4 hover:text-grayhover sm:inline"
              href="#money"
            >
              Donate
            </a>
          </li>
          <li className="sm:py-[14px]">
            <a
              className="block px-4 py-4 hover:text-grayhover sm:inline"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li className="sm:py-[14px]">
            <a
              className="block px-4 py-4 hover:text-grayhover sm:inline"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
