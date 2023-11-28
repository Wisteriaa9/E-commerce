import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import {BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small> &copy; {copyrightYear} Dealio Corporation</small>
      <div className="social-links">
      <Link to="mailto:jkonmail27@gmail.com" target="_blank">
  <BsEnvelope />
</Link>
        <Link to="https://github.com/wisteriaa9" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://www.linkedin.com/in/jaskirat-kaur-b74335233/" target="_blank">
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
