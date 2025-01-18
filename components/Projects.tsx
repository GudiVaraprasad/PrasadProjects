"use client";

import { useState, useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MagicButton2 from "./ui/MagicButton2";
import MagicButton from "./ui/MagicButton";
import { projects as allProjects, Project } from "../data/projects";
import { useOutsideClick } from "./ui/useOutsideClick";
import { FaLocationArrow } from "react-icons/fa6";

// Define categories
const categories = ["AI/ML", "Data Science", "Analytics", "Javascript", "PHP", "Java", "Archived"];

const Projects = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("AI/ML");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Debugging for ref
  useEffect(() => {
    console.log("Ref is attached to:", ref.current);
  }, [ref.current]);

  // Use the hook to close the expanded card on outside click
  useOutsideClick(ref, () => {
    console.log("Outside click detected - closing card");
    setActive(null);
  });

  // Handle filtering
  useEffect(() => {
    let filtered = allProjects;

    if (search) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter((project) => project.tags.includes(category));
    }

    // Sort by ID in descending order
    filtered.sort((a, b) => b.id - a.id);

    setFilteredProjects(filtered);
  }, [search, category]);

  return (

    <div className="relative pb-20 pt-36">

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Prasad <span className="text-accentt">Projects</span>
        </h1>
      </div>



      {/* Background Gradient */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            id="search-projects"
            name="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg bg-black-300 text-white placeholder-gray-200 shadow-md focus:ring-1 focus:ring-accentt focus:bg-black-200 focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {categories.map((cat) => (
            <MagicButton2
              key={cat}
              title={cat}
              handleClick={() => setCategory(cat)}
            />
          ))}
        </div>

        {/* Expanded Card */}
        <AnimatePresence>
          {active && (
            <>
              {/* Blurred Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => { setActive(null); }}
                className="fixed inset-0 backdrop-blur-lg bg-opacity-100 z-50"
              />
              <motion.div
                ref={ref}
                layoutId={`card-${active.title}-${id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => { setActive(null); }}
                className="fixed inset-0 z-50 flex items-center justify-center"
              >
                <motion.div className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-black-300 sm:rounded-2xl p-4 overflow-hidden">
                  <motion.img
                    layoutId={`image-${active.title}-${id}`}
                    src={active.image}
                    alt={active.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="mt-4">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl font-bold text-white-100"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p className="text-white-200 text-sm mt-2">
                      {active.description}
                    </motion.p>
                    <motion.p className="text-accentt text-sm mt-2">
                      Topics: {active.tags.join(", ")}
                    </motion.p>
                    {active.url && (

                      <a href={active.url} target="_blank" rel="noopener noreferrer">
                        <MagicButton title="View Project" icon={<FaLocationArrow />} position="right" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.title}-${id}`}
              onClick={() => setActive(project)}
              className="relative bg-transperant hover:bg-black-300 rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-105"
            >
              <motion.img
                layoutId={`image-${project.title}-${id}`}
                src={project.image}
                alt={project.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
              />
              <div className="p-4">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-medium text-black-300 dark:text-white-200 text-base"
                >
                  {project.title}
                </motion.h3>
                {/* <motion.p className="text-neutral-600 dark:text-neutral-400 text-base">
                  {project.description}
                </motion.p>
                <motion.p className="text-sm text-blue-400 mt-2">
                  Tags: {project.tags.join(", ")}
                </motion.p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
