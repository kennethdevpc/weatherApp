import React from "react";
import s from "./NavBar.module.css";
export default function NavBar() {
  return (
    <div>
      <p className={s.logo_text}>
        {" "}
        <span>W</span> eatherApp
      </p>

      <nav className={s.nav_bar}>
        <ul>
          <li>
            menu
            <ul>
              <a
                href="https://github.com/kennethdevpc/weatherApp"
                target="_blank"
              >
                <li>Code</li>
              </a>
              <a href="#123">
                <li>Description</li>
              </a>
              <a href="#1234">
                <li>Footer</li>
              </a>
            </ul>
          </li>

          <li>
            socials
            <ul>
              <a href="https://wa.link/gvjrns" target="_blank">
                <li>whatsapp </li>
              </a>
              <a
                href="https://www.linkedin.com/in/kennethe-p-813311225/"
                target="_blank"
              >
                <li>LinkedIn</li>
              </a>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
