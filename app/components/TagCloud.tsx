"use client";

import React from "react";
import { motion, stagger } from "framer-motion";

interface TagSectionProps {
  tags: string[];
  title: string;
  color: string;
}
const TagSection: React.FC<TagSectionProps> = ({ tags, title, color }) => {
  const blueBg = "bg-blue-100";
  const indigoBg = "bg-indigo-100";
  const purpleBg = "bg-purple-100";
  const bg =
    color === "blue" ? blueBg : color === "indigo" ? indigoBg : purpleBg;

  const blueText = "text-blue-700";
  const indigoText = "text-indigo-700";
  const purpleText = "text-purple-700";
  const text =
    color === "blue" ? blueText : color === "indigo" ? indigoText : purpleText;

  const blueFill = "fill-blue-500";
  const indigoFill = "fill-indigo-500";
  const purpleFill = "fill-purple-500";
  const fill =
    color === "blue" ? blueFill : color === "indigo" ? indigoFill : purpleFill;

  return (
    <>
      <motion.h2
        className="font-bold text-xl mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ delay: 0.2, duration: 0.3 }}
        exit={"hidden"}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {title}
      </motion.h2>
      <div className="flex flex-row flex-wrap gap-4 mt-8">
        {tags.map((tag, idx) => (
          <motion.span
            key={tag}
            className={`inline-flex items-center gap-x-1.5 rounded-md ${bg} px-2 py-1 text-base font-medium ${text}`}
            initial="hidden"
            exit={"hidden"}
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.3 + idx * 0.15, duration: 0.3 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <svg
              className={`h-1.5 w-1.5 ${fill}`}
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            {tag}
          </motion.span>
        ))}
      </div>
    </>
  );
};

const TagCloud = () => {
  const leadingTags = [
    "Team Leadership",
    "Agile",
    "Scrum",
    "Kanban",
    "Solution Architecture",
    "Technical Design",
    "Mentoring",
    "Stakeholder Management",
    "Technical Writing",
    "Project Reporting",
    "Full Stack",
    "Project Management",
  ];
  const frontendTags = [
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Design Systems",
    "Figma",
    "CSS",
    "Tailwind",
    "HTML",
    "Accessibility",
  ];
  const backendTags = [
    "C#",
    ".NET",
    "SQL",
    "PostgreSQL",
    "Supabase",
    "Python",
    "Flask",
    "ORM's",
  ];
  return (
    <div>
      <TagSection tags={leadingTags} title={"Leading"} color={"blue"} />
      <TagSection tags={frontendTags} title={"Frontend"} color={"indigo"} />
      <TagSection tags={backendTags} title={"Backend"} color={"purple"} />
    </div>
  );
};

export default TagCloud;
