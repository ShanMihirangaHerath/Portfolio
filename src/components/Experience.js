import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}&nbsp;|&nbsp;{address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Cipherlix."
            companyLink="http://cipherlix.com/"
            time="2024-Present"
            address="Kandy, Sri Lanka"
            work="I'm a Software Engineer at Cipherlix, where I specialize in crafting innovative and scalable software solutions.  

                Previously, I was part of a team that developed new features for Google Search. My contributions included enhancing 
                the accuracy and relevance of search results and building advanced tools for data analysis and visualization. 
                This experience honed my skills in problem-solving, performance optimization, and delivering impactful technology 
                solutions at scale."
          />

          <Details
            position="Software Developer"
            company="Microcodelink"
            companyLink="#"
            time="2022-2023"
            address="Colombo, Sri Lanka"
            work="Collaborated within a team to develop Amazon's mobile app, 
            focusing on **designing and implementing features like personalized 
            product recommendations and interactive user reviews, while ensuring 
            optimal performance, scalability, and reliability of the application."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
