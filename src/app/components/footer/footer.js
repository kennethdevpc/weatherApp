import React from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobeAmericas,
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import s from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={s.container}>
        <div className={s.header_footer}>
          <p className={s.title_footer}>
            <span>K</span>ennethPC
          </p>
          <p className="">
            I am 27 years old Colombian who loves electronic systems and
            technology. Thanks to virtualization, I got to know the branch of
            computing, where I found a new look and a new taste for learning. In
            this way i learned systems, AGILE methodologies, server and client
            side software technologies to join them in the development of
            applications. So i get a new focuse and passion for programming,
            achieved a full stack web develper certification.
          </p>
        </div>

        <div className={s.menu_link}>
          <h2>skills</h2>
          <ul>
            Desarrollador Full stack
            <li>*Php *Node.JS *sequelize * Express * Laravel *docker </li>
            <li>*Javascript * React *Redux *angular *postgreSQL</li>
          </ul>
        </div>

        <div className={s.contact}>
          <h2>Connect with me</h2>
          <div className={s.directions_container}>
            <div className={s.directions}>
              <div className={s.icon}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <p>Cali, Colombia,</p>
                <p>Universidad del valle</p>
              </div>
            </div>

            <div>
              <div className={s.icon}>
                <FaPhoneAlt />
              </div>
              <div>
                <p>+57 3184484423</p>
              </div>
            </div>

            <div className={s.email}>
              <div className={s.icon}>
                <FaGlobeAmericas />
              </div>
              <div className={s.emails_p}>
                <p>kennethdevpc@gmail.com</p>
                <p>ingkeneidel@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.suscribe}>
          <h2>Text me</h2>
          <div className={s.subscribe_description}>
            <p>Contect via whatsap</p>
          </div>
          <a href="https://wa.link/gvjrns">
            <li>whatsapp </li>
          </a>
        </div>
      </div>
      <div className={s.final_footer}>
        <p>© 2022 All Rights Reserved By Kenneth</p>
        <div className={s.policy}>
          <ul>
            <li>
              <a href="https://es.reactjs.org/">References react</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
