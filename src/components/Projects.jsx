import React, { useState, useEffect } from "react";
import { projects } from "../data/mockData";
import {
  ExternalLink,
  Smartphone,
  Globe,
  Filter,
  X,
  Calendar,
  Code,
  Zap,
  Github,
} from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [screenshotViewer, setScreenshotViewer] = useState({
    isOpen: false,
    currentIndex: 0,
    screenshots: [],
    category: "",
  });

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type && p.type === filter);

  const openScreenshotViewer = (screenshots, index, category) => {
    setScreenshotViewer({
      isOpen: true,
      currentIndex: index,
      screenshots,
      category,
    });
  };

  const closeScreenshotViewer = () => {
    setScreenshotViewer({
      isOpen: false,
      currentIndex: 0,
      screenshots: [],
      category: "",
    });
  };

  const nextScreenshot = () => {
    setScreenshotViewer((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.screenshots.length,
    }));
  };

  const prevScreenshot = () => {
    setScreenshotViewer((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === 0
          ? prev.screenshots.length - 1
          : prev.currentIndex - 1,
    }));
  };

  // Keyboard navigation for screenshot viewer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!screenshotViewer.isOpen) return;

      if (e.key === "Escape") {
        closeScreenshotViewer();
      } else if (e.key === "ArrowRight") {
        nextScreenshot();
      } else if (e.key === "ArrowLeft") {
        prevScreenshot();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screenshotViewer.isOpen, screenshotViewer.currentIndex]);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0F0F10] via-[#1A1A1D] to-[#2D2D30] relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute top-10 left-10 w-24 h-24 border border-[#E8B4C8]/20 rotate-12"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
          }}
        />
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-[#FF6B9D]/15 -rotate-45" />
      </div>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8B4C8] to-[#FF6B9D] mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Enterprise systems, mobile apps, UI/UX designs, data processing
            solutions, and freelance projects built with React, Flutter, Python,
            and modern technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Projects", count: projects.length },
            {
              id: "internal",
              label: "Internal",
              count: projects.filter((p) => p.type === "internal").length,
            },
            {
              id: "freelance",
              label: "Freelance",
              count: projects.filter((p) => p.type === "freelance").length,
            },
            {
              id: "startup",
              label: "Startup",
              count: projects.filter((p) => p.type === "startup").length,
            },
            {
              id: "ui ux",
              label: "UI/UX",
              count: projects.filter((p) => p.type === "ui ux").length,
            },
            {
              id: "data",
              label: "Data",
              count: projects.filter((p) => p.type === "data").length,
            },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                filter === f.id
                  ? "bg-gradient-to-r from-[#00FFFF] to-[#FF0080] text-black shadow-lg shadow-[#00FFFF]/30"
                  : "bg-black/40 text-white/70 border border-[#00FFFF]/20 hover:border-[#00FFFF] hover:text-white backdrop-blur-xl"
              }`}
            >
              {f.id === "all" && <Filter className="w-4 h-4" />}
              {f.label}
              <span className="text-xs opacity-75">({f.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-[#1A1A1D] rounded-2xl overflow-hidden border border-[#2D2D30] hover:border-[#E8B4C8] transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ backgroundColor: project.color }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        project.status === "Live"
                          ? "bg-green-500/80 text-white"
                          : "bg-yellow-500/80 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white flex items-center gap-1">
                      {project.category === "mobile" ? (
                        <Smartphone className="w-3 h-3" />
                      ) : (
                        <Globe className="w-3 h-3" />
                      )}
                      {project.platform}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Project Type Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                        project.type === "internal"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : project.type === "freelance"
                            ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                            : project.type === "startup"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : project.type === "ui ux"
                                ? "bg-pink-500/20 text-pink-400 border border-pink-500/30"
                                : project.type === "data"
                                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                  : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                      }`}
                    >
                      {project.type || "Project"}
                    </span>
                    <span className="text-xs text-white/50 font-medium">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00FFFF] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-[#00FFFF]/60 text-sm mb-3 font-medium">
                    {project.client || "Client"}
                  </p>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#2D2D30] text-[#E8B4C8] border border-[#E8B4C8]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#2D2D30] text-white/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-white/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E8B4C8]" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 text-sm font-medium text-[#00FFFF] hover:text-[#FF0080] transition-colors group/link"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-black/40 text-white/50 hover:text-white hover:bg-[#00FFFF]/20 transition-all border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-2xl border border-[#00FFFF]/20 shadow-2xl">
            <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-[#FF0080]/40 flex items-center justify-center text-[#FF0080] hover:bg-[#FF0080]/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Project image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{ backgroundColor: selectedProject.color }}
                />
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Project title overlay */}
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <span className="flex items-center gap-1">
                      {selectedProject.category === "mobile" ? (
                        <Smartphone className="w-4 h-4" />
                      ) : (
                        <Globe className="w-4 h-4" />
                      )}
                      {selectedProject.platform}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.year}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        selectedProject.status === "Live"
                          ? "bg-green-500/80 text-white"
                          : "bg-yellow-500/80 text-white"
                      }`}
                    >
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-8 space-y-6">
                {/* Project Info Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-black/20 border border-[#00FFFF]/20">
                    <div className="text-[#00FFFF] font-bold text-lg">
                      {selectedProject.type
                        ? selectedProject.type.toUpperCase()
                        : "PROJECT"}
                    </div>
                    <div className="text-white/60 text-sm">Project Type</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-black/20 border border-[#FF0080]/20">
                    <div className="text-[#FF0080] font-bold text-lg">
                      {selectedProject.client || "Client"}
                    </div>
                    <div className="text-white/60 text-sm">Client</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-black/20 border border-[#8A2BE2]/20">
                    <div className="text-[#8A2BE2] font-bold text-lg">
                      {selectedProject.platform}
                    </div>
                    <div className="text-white/60 text-sm">Platform</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-[#00FFFF] flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Project Overview
                    </h3>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 text-white hover:text-[#00FFFF] hover:bg-[#00FFFF]/10 transition-all border border-[#00FFFF]/20"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Source Code</span>
                      </a>
                    )}
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-bold text-[#FF0080] mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00FFFF]/20 to-[#FF0080]/20 border border-[#00FFFF]/30 text-[#00FFFF] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-[#8A2BE2] mb-3">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-black/20 border border-[#8A2BE2]/20"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#8A2BE2] mt-2 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshots Section */}
                {selectedProject.screenshots &&
                  selectedProject.screenshots.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-[#00FFFF] mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Application Screenshots
                      </h3>

                      {/* Screenshot Note */}
                      {selectedProject.screenshotNote && (
                        <div className="mb-4 p-4 rounded-lg bg-gradient-to-r from-[#00FFFF]/10 to-[#FF0080]/10 border border-[#00FFFF]/20">
                          <p className="text-sm text-white/80 leading-relaxed">
                            {selectedProject.screenshotNote}
                          </p>
                        </div>
                      )}

                      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {selectedProject.screenshots.map((screenshot, i) => (
                          <div
                            key={i}
                            onClick={() =>
                              openScreenshotViewer(
                                selectedProject.screenshots,
                                i,
                                selectedProject.category,
                              )
                            }
                            className="group/screenshot relative rounded-lg overflow-hidden border border-[#00FFFF]/20 bg-black/20 cursor-pointer hover:border-[#00FFFF]/60 transition-all hover:shadow-lg hover:shadow-[#00FFFF]/20"
                          >
                            <div
                              className={`relative overflow-hidden ${
                                selectedProject.category === "mobile"
                                  ? "aspect-[9/16]"
                                  : "aspect-video"
                              }`}
                            >
                              <img
                                src={screenshot.url}
                                alt={screenshot.title}
                                style={{
                                  filter: screenshot.blurAreas
                                    ? selectedProject.category === "mobile"
                                      ? "blur(2px) brightness(0.95) saturate(1)"
                                      : "blur(1.5px) brightness(1) saturate(1)"
                                    : "none",
                                }}
                                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/screenshot:scale-105"
                              />
                              {screenshot.blurAreas && (
                                <div className="absolute top-2 right-2">
                                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-black/60 text-white/70 backdrop-blur-sm border border-white/20">
                                    Privacy Protected
                                  </span>
                                </div>
                              )}
                              {/* Click to view indicator */}
                              <div className="absolute inset-0 bg-black/0 group-hover/screenshot:bg-black/30 transition-all flex items-center justify-center">
                                <div className="opacity-0 group-hover/screenshot:opacity-100 transition-opacity">
                                  <svg
                                    className="w-12 h-12 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-gradient-to-b from-black/40 to-black/60">
                              <h4 className="text-xs font-bold text-white mb-1 line-clamp-1">
                                {screenshot.title}
                              </h4>
                              <p className="text-[10px] text-white/60 line-clamp-2 leading-relaxed">
                                {screenshot.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screenshot Viewer Modal with Slider */}
      {screenshotViewer.isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={closeScreenshotViewer}
        >
          {/* Close button */}
          <button
            onClick={closeScreenshotViewer}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          {screenshotViewer.screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevScreenshot();
              }}
              className="absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Next button */}
          {screenshotViewer.screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextScreenshot();
              }}
              className="absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={
                  screenshotViewer.screenshots[screenshotViewer.currentIndex]
                    ?.url
                }
                alt={
                  screenshotViewer.screenshots[screenshotViewer.currentIndex]
                    ?.title
                }
                style={{
                  filter: screenshotViewer.screenshots[
                    screenshotViewer.currentIndex
                  ]?.blurAreas
                    ? screenshotViewer.category === "mobile"
                      ? "blur(2.5px) brightness(0.95) saturate(1)"
                      : "blur(2px) brightness(1) saturate(1)"
                    : "none",
                }}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />

              {/* Privacy badge */}
              {screenshotViewer.screenshots[screenshotViewer.currentIndex]
                ?.blurAreas && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-2 rounded-full text-sm font-medium bg-black/70 text-white backdrop-blur-sm border border-white/30">
                    🔒 Privacy Protected
                  </span>
                </div>
              )}
            </div>

            {/* Image info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                {
                  screenshotViewer.screenshots[screenshotViewer.currentIndex]
                    ?.title
                }
              </h3>
              <p className="text-white/70 mb-2">
                {
                  screenshotViewer.screenshots[screenshotViewer.currentIndex]
                    ?.description
                }
              </p>
              {screenshotViewer.screenshots.length > 1 && (
                <p className="text-white/50 text-sm">
                  {screenshotViewer.currentIndex + 1} /{" "}
                  {screenshotViewer.screenshots.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
