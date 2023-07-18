import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import { SiMedium } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { IconContext } from "react-icons";
import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      ease: "easeOut",
      duration: 0.1,
    },
  },
};

const links = [
  {
    name: "Twitter",
    link: "https://twitter.com/StakeGG",
    icon: <FaTwitter />,
    aniDelay: 2,
  },
  {
    name: "Blog",
    link: "https://stakeai.medium.com",
    icon: <SiMedium />,
    aniDelay: 1,
  },
];

const Navbar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const toggleHamburger = () => {
    hamburgerClicked ? setHamburgerClicked(false) : setHamburgerClicked(true);
  };

  const hoverIcon = () => {
    return "hover";
  };

  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: -50 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className={styles.navbar}
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className={styles.logo}
        >
          {/* <img src="/StakeLogo.png" alt="Stake Logo" width={32} height={32} /> */}
          <Image
            src="/StarStakeLogo.png"
            alt="Stake Logo"
            width={80}
            height={26}
          />
          {/* <p>Stake</p> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className={styles.navigation}
        >
          {links.map(({ name, link, icon }) => (
            <a key={name} href={link} className={styles.link}>
              <div className={styles.icon}>{icon}</div>
            </a>
          ))}
          <a href="https://stakeai.medium.com">
            <button className={styles.join}>Primer</button>
          </a>
        </motion.div>

        <IconContext.Provider value={{ className: styles.hamburger }}>
          {hamburgerClicked ? (
            <RxCross2 onClick={toggleHamburger} onMouseEnter={hoverIcon} />
          ) : (
            <HiBars2 onClick={toggleHamburger} />
          )}
        </IconContext.Provider>
      </motion.div>
      <motion.div
        variants={variants}
        className={styles.navDropdown}
        animate={hamburgerClicked ? "open" : "closed"}
        style={{ display: hamburgerClicked ? "flex" : "none" }}
      >
        {links.map(({ name, link, aniDelay, icon }) => (
          <a key={name} href={link} className={styles.link}>
            <div className={styles.hamburgerLinks}>
              <div className={styles.hamburgerIcon}>{icon}</div>
              <p>{name}</p>
            </div>
          </a>
        ))}
        <a href="https://stakeai.medium.com">
          <button className={styles.join}>Primer</button>
        </a>
      </motion.div>
    </>
  );
};

export default Navbar;
