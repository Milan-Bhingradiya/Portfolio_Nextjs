"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Briefcase,
  Award,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Experience {
  id: number;
  type: "work" | "internship" | "hackathon";
  title: string;
  company?: string;
  date: string;
  description: string;
  skills?: string[];
  images?: string[];
  teamMembers?: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    date: "2022 - Present",
    description:
      "Led the development of multiple high-impact web applications using Next.js and React. Implemented responsive designs and improved performance metrics by 40%.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    ],
  },
  {
    id: 2,
    type: "internship",
    title: "Software Engineering Intern",
    company: "StartupX",
    date: "Summer 2021",
    description:
      "Developed and maintained features for the company's main product. Collaborated with senior developers to implement new functionalities.",
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    type: "hackathon",
    title: "HealthTech Hackathon Winner",
    date: "March 2021",
    description:
      "Built an AI-powered health monitoring system in 48 hours. Won first place among 50+ teams.",
    teamMembers: ["John Doe", "Jane Smith", "Mike Johnson"],
    images: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    ],
    link: "https://devpost.com/example",
  },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle mouse drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStart) {
      setTouchEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative group">
      <div
        ref={containerRef}
        className="relative h-64 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500"
          priority
          draggable="false"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-white scale-125"
                      : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const FilterButton = ({
  type,
  selected,
  onClick,
}: {
  type: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md transition-all ${
      selected
        ? "bg-[#64ffda] text-[#0a192f]"
        : "bg-[#112240] hover:bg-[#233554] text-[#ccd6f6]"
    }`}
  >
    {type.charAt(0).toUpperCase() + type.slice(1)}
  </button>
);

const ExperienceCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const Icon = typeIcons[exp.type];

  return (
    <motion.div
      key={exp.id}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-[#112240] rounded-lg p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="flex flex-col md:flex-row gap-8">
        {exp.images && exp.images.length > 0 && (
          <div className="md:w-1/3">
            <ImageCarousel images={exp.images} />
          </div>
        )}

        <div
          className={`${
            exp.images && exp.images.length > 0 ? "md:w-2/3" : "w-full"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-6 h-6 text-[#64ffda]" />
            <h3 className="text-2xl font-bold text-[#e6f1ff]">{exp.title}</h3>
          </div>

          {exp.company && (
            <p className="text-lg text-[#a8b2d1] mb-2">{exp.company}</p>
          )}

          <p className="text-sm text-[#64ffda] mb-4">{exp.date}</p>

          <p className="text-[#a8b2d1] mb-6 leading-relaxed">
            {exp.description}
          </p>

          {exp.skills && (
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-[#233554] text-[#ccd6f6] rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {exp.teamMembers && (
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-[#64ffda]" />
              <p className="text-[#a8b2d1]">
                Team: {exp.teamMembers.join(", ")}
              </p>
            </div>
          )}

          {exp.link && (
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#64ffda] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const typeIcons = {
  work: Briefcase,
  internship: Calendar,
  hackathon: Award,
};

export default function ExperiencePage() {
  const [selectedType, setSelectedType] = useState<
    "all" | "work" | "internship" | "hackathon"
  >("all");

  const filteredExperiences = experiences.filter(
    (exp) => selectedType === "all" || exp.type === selectedType
  );

  return (
    <main className="min-h-screen bg-[#0a192f] text-[#e6f1ff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#64ffda]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "work", "internship", "hackathon"].map((type) => (
            <FilterButton
              key={type}
              type={type}
              selected={selectedType === type}
              onClick={() => setSelectedType(type as any)}
            />
          ))}
        </div>

        <div className="space-y-12">
          {filteredExperiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
