import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import cow from './assets/cow.jpg';
import braille from './assets/braille-score-demo.jpg';
import luna from './assets/luna-demo.mov';
import pitmap from './assets/pit-mapping.png';
import planetary from './assets/planetry-pitstop.jpg';
import profile from './assets/profile.jpg';
import resume from './assets/resume-noella.pdf';
import zomato from './assets/zomato-gradio-demo.mov';

// Navigation Component
const Navigation = ({ projects, experiences }) => {
  const location = useLocation();
  
  return (
    <nav className="github-nav">
      <div className="nav-content">
        <div className="nav-left">
          <div className="icon">⚡</div>
          <div className="repo-path">
            <span className="username">Noella-Horo</span>
            <span className="separator">/</span>
            <span className="repo-name">portfolio</span>
          </div>
        </div>
        <div className="nav-right">
          <div className="repo-tabs">
            <Link 
              to="/" 
              className={`repo-tab ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <a href= {resume}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-tab"
            >
              Resume
            </a>
            <Link 
              to="/experience" 
              className={`repo-tab ${location.pathname === '/experience' ? 'active' : ''}`}
            >
              Experience <span className="tab-count">{experiences.length}</span>
            </Link>
            <Link 
              to="/projects" 
              className={`repo-tab ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects <span className="tab-count">{projects.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const HomePage = ({ featured }) => {
  return (
    <div className="main-content">
      {/* README Section */}
      <div className="readme-section">
        <div className="readme-header">
          <span className="readme-title">README.md</span>
        </div>
        <div className="readme-content">
          <div className="profile-section">
            <img
                src = {profile}
                alt="Profile"
                className="profile-pic"
              />
            <p className="description">
              Hi! I'm a CS undergrad at Carnegie Mellon University (Class of 2027), passionate about machine learning, robotics, and systems.
              I've built zero-copy transport layers in Rust, NLP models for food tech, and even biomedical tools with Oxford researchers.
              I love solving hard problems and building cool stuff — from lunar mapping pipelines to braille music converters.
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="about-section">
          <h3>About</h3>
          <p>A portfolio website showcasing my projects and experience</p>
          <div className="repo-topics">
            <span className="topic">ML</span>
            <span className="topic">NLP</span>
            <span className="topic">NER</span>
            <span className="topic">Computer Vision</span>
            <span className="topic">React</span>
            <span className="topic">Protobuf</span>
            <span className="topic">OpenCV</span>
            <span className="topic">ONNX</span>
            <span className="topic">TensorFlow</span>
            <span className="topic">Iceoryx2</span>
          </div>
        </div>
        
        <div className="sidebar-section">
          <h4>Language Proficiency</h4>
          <div className="language-bars">
            <div className="language-entry">
              <div className="language-label">Python – 95%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill python" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">Rust – 70%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill rust" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">JavaScript – 90%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill js" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">C/C++ – 85%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill java" style={{ width: '10%' }}></div>
              </div>
            </div>
            <div className="language-entry">
              <div className="language-label">MATLAB/Simulink – 60%</div>
              <div className="language-bar-track">
                <div className="language-bar-fill matlab" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="experience-section">
        <div className="experience-content">
          <div className="experience-header">
            <h2 className="experience-title">Featured Projects</h2>
            <span className="experience-count">{featured.length} repositories</span>
          </div>
          
          <div className="projects-grid">
              {featured.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <span className="project-icon">📦</span>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-visibility">Public</span>
                  </div>
                  
                  {project.mediaType && project.mediaSrc && (
                    <div className="project-media">
                      {project.mediaType === 'image' ? (
                        <img 
                          src={project.mediaSrc} 
                          alt={project.title}
                          className="project-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : project.mediaType === 'video' ? (
                        <video 
                          src={project.mediaSrc}
                          className="project-video"
                          controls
                          muted
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="media-placeholder" style={{display: 'none'}}>
                        🖼️
                      </div>
                    </div>
                  )}
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="project-footer">
                    <div className="project-languages">
                      {project.languages.map((lang, index) => (
                        <div key={index} className="language-item">
                          <span className={`language-dot ${lang.color}`}></span>
                          <span>{lang.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    {project.buttons && project.buttons.length > 0 && (
                      <div className="project-actions">
                        {project.buttons.map((button, index) => (
                          <a 
                            key={index}
                            href={button.link} 
                            className="action-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {button.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

// Projects Page Component
const ProjectsPage = ({ projects }) => {
  return (
    <div className="page-content">
      <section className="experience-section">
        <div className="experience-content">
          <div className="experience-header">
            <h2 className="experience-title">All Projects</h2>
            <span className="experience-count">{projects.length} repositories</span>
          </div>
          
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <span className="project-icon">📦</span>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-visibility">Public</span>
                  </div>
                  
                  {project.mediaType && project.mediaSrc && (
                    <div className="project-media">
                      {project.mediaType === 'image' ? (
                        <img 
                          src={project.mediaSrc} 
                          alt={project.title}
                          className="project-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : project.mediaType === 'video' ? (
                        <video 
                          src={project.mediaSrc}
                          className="project-video"
                          controls
                          muted
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="media-placeholder" style={{display: 'none'}}>
                        🖼️
                      </div>
                    </div>
                  )}
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="project-footer">
                    <div className="project-languages">
                      {project.languages.map((lang, index) => (
                        <div key={index} className="language-item">
                          <span className={`language-dot ${lang.color}`}></span>
                          <span>{lang.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    {project.buttons && project.buttons.length > 0 && (
                      <div className="project-actions">
                        {project.buttons.map((button, index) => (
                          <a 
                            key={index}
                            href={button.link} 
                            className="action-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {button.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

// Experience Page Component
const ExperiencePage = ({ experiences }) => {
  return (
    <div className="page-content">
      <section className="experience-section">
        <div className="experience-content">
          <div className="experience-header">
            <h2 className="experience-title">Work Experience</h2>
            <span className="experience-count">{experiences.length} positions</span>
          </div>

          <div className="projects-grid">
              {experiences.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <span className="project-icon">📦</span>
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-visibility">Public</span>
                  </div>
                  
                  {project.mediaType && project.mediaSrc && (
                    <div className="project-media">
                      {project.mediaType === 'image' ? (
                        <img 
                          src={project.mediaSrc} 
                          alt={project.title}
                          className="project-image"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : project.mediaType === 'video' ? (
                        <video 
                          src={project.mediaSrc}
                          className="project-video"
                          controls
                          muted
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="media-placeholder" style={{display: 'none'}}>
                        🖼️
                      </div>
                    </div>
                  )}
                  
                  <p className="project-description">
                    {project.description}
                  </p>
                  
                  <div className="project-footer">
                    <div className="project-languages">
                      {project.languages.map((lang, index) => (
                        <div key={index} className="language-item">
                          <span className={`language-dot ${lang.color}`}></span>
                          <span>{lang.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    {project.buttons && project.buttons.length > 0 && (
                      <div className="project-actions">
                        {project.buttons.map((button, index) => (
                          <a 
                            key={index}
                            href={button.link} 
                            className="action-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {button.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          
          {/* <div className="projects-grid">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
};

function App() {
  const featured = [
  {
    id: 1,
    title: "Eclipse uProtocol Transport (Rust)",
    description: "Zero-copy shared-memory transport layer for connected vehicles using Iceoryx2 and Protobuf. Integrated into Eclipse ADAS stack.",
    languages: [{ name: "Rust", color: "nodejs" }, { name: "Protobuf", color: "js" }],
    mediaType: "video",
    mediaSrc: luna,
    buttons: [
      { type: "code", label: "Github", link: "https://github.com/eclipse-uprotocol/up-transport-iceoryx2-rust" },
    ]
  },
  {
    id: 2,
    title: "Zomato NLP Query Parser",
    description: "Low-latency NLP system to extract structured food-ordering intents using GLiNER and ONNX. Enhanced search relevance in production.",
    languages: [{ name: "Python", color: "python" }, { name: "ONNX", color: "python" }],
    mediaType: "video",
    mediaSrc: zomato,
    buttons: [
    ]
  },
  {
    id: 3,
    title: "Braille Score Converter",
    description: "Created an application that converts sheet music PDFs into braille using computer vision, enhancing accessibility for visually impaired musicians. As well as to midi files from handwritten or printed scores",
    languages: [{ name: "Python", color: "python" }, { name: "OpenCV", color: "python" }],
    mediaType: "image",
    mediaSrc: braille,
    buttons: [
      { type: "code", label: "Code", link: "https://github.com/catappreciationhours2/BrailleScore" },
      { type: "slides", label: "Slides", link: "https://docs.google.com/presentation/d/1rygZEI5tzSmB1Gt921P_hTT8T2PY4bZnCuLgEwQyMAQ/edit?usp=sharing" }
    ]
  },
  {
    id: 4,
    title: "Astronaut Health Monitoring System",
    description: "Arduino-based prototype that analyzes astronaut excreta to detect health issues. Won special mention at HackCMU.",
    languages: [{ name: "Arduino", color: "js" }, { name: "C++", color: "js" }],
    mediaType: "image",
    mediaSrc: planetary,
    buttons: [
      { type: "code", label: "Code", link: "https://github.com/catappreciationhours2/planetary-pitstop" },
      { type: "devpost", label: "Devpost", link: "https://devpost.com/software/planetary-pitstop" }
    ]
  },
  {
    id: 5,
    title: "SWE Intern Moneyboxx Finance Ltd  ",
    description: "Prototyped a cow muzzle identifiction system using YOLO and Haar Cascade for farmer insurance and lending",
    languages: [{ name: "Python", color: "python" }, { name: "MATLAB", color: "python" }],
    mediaType: "image",
    mediaSrc: cow,
    buttons: []
  },
  {
    id: 6,
    title: "CMU Space Robotics",
    description: "Developed an image processing pipeline for lunar environment mapping, utilizing High Dynamic Range (HDR) and COLMAP 3D modelling software for a NASA rover project.",
    languages: [{ name: "Python", color: "python" }, { name: "MATLAB", color: "python" }],
    mediaType: "image",
    mediaSrc: pitmap,
    buttons: [
      { type: "slides", label: "Slides", link: "https://docs.google.com/presentation/d/1Fr43EZId7VXXtxlc0R_OfvJoi2gizS8lbE758G-oHSA/edit?usp=sharing" }
    ]
  },
];

const projects = [
  {
    id: 3,
    title: "CMU Space Robotics",
    description: "Developed an image processing pipeline for lunar environment mapping, utilizing High Dynamic Range (HDR) and COLMAP 3D modelling software for a NASA rover project.",
    languages: [{ name: "Python", color: "python" }, { name: "MATLAB", color: "python" }],
    mediaType: "image",
    mediaSrc: pitmap,
    buttons: [
      { type: "slides", label: "Slides", link: "https://docs.google.com/presentation/d/1Fr43EZId7VXXtxlc0R_OfvJoi2gizS8lbE758G-oHSA/edit?usp=sharing" }
    ]
  },
  {
    id: 4,
    title: "Braille Score Converter – Hackathon ‘Amplify’",
    description: "Created an application that converts sheet music PDFs into braille using computer vision, enhancing accessibility for visually impaired musicians, and converts to MIDI files from handwritten or printed scores.",
    languages: [{ name: "Python", color: "python" }, { name: "OpenCV", color: "python" }],
    mediaType: "image",
    mediaSrc: braille,
    buttons: [
      { type: "code", label: "Code", link: "https://github.com/catappreciationhours2/BrailleScore" },
      { type: "slides", label: "Slides", link: "https://docs.google.com/presentation/d/1rygZEI5tzSmB1Gt921P_hTT8T2PY4bZnCuLgEwQyMAQ/edit?usp=sharing" }
    ]
  },
  {
    id: 5,
    title: "Astronaut Health Monitoring System – HackCMU ‘Space’",
    description: "Developed and prototyped an astronaut health monitoring system by analyzing excreta using sensors and Arduinos for early detection of potential health issues in space. Won Special Mention and award worth $600.",
    languages: [{ name: "Arduino", color: "js" }, { name: "C++", color: "js" }],
    mediaType: "image",
    mediaSrc: planetary,
    buttons: [
      { type: "code", label: "Code", link: "https://github.com/catappreciationhours2/planetary-pitstop" },
      { type: "devpost", label: "Devpost", link: "https://devpost.com/software/planetary-pitstop" }
    ]
  },
  {
    id: 1,
    title: "Research Assistant – Physical Intelligence Lab, CMU",
    description: "Leading a project on proprioceptive tracking with a KINARM, adapting continuous tracking methods from visual tasks to improve data collection efficiency from 30+ mins to under 3 mins.",
    languages: [{ name: "Python", color: "python" }],
    // mediaType: "image",
    // mediaSrc: "/kinarm.jpg",
    buttons: []
  },
  {
    id: 2,
    title: "Research Project – Oxford University Collaboration",
    description: "Developed a program automating tricuspid valve segmentation from MRI scans using Python and MATLAB; research pending publication.",
    languages: [{ name: "Python", color: "python" }, { name: "MATLAB", color: "python" }],
    // mediaType: "image",
    // mediaSrc: "/mri-segmentation.jpg",
    buttons: []
  },
];

  const experiences = [
  {
    id: 1,
    title: "ML/DS Intern – Eternal Ltd (Food Delivery Marketplace)",
    description: "Engineered and deployed a real-time NER system for Zomato (23M+ monthly users) search to extract structured intent from natural language food queries using GLiNER and ONNX. Achieved low-latency performance (~20–60ms) and integrated with existing search infrastructure to power smarter, intent-driven recommendations.",
    languages: [
      { name: "Python", color: "python" },
      { name: "ONNX", color: "python" }
    ],
    mediaType: "video",
    mediaSrc: zomato,
    buttons: []
  },
  {
    id: 2,
    title: "Open-Source Contributor – uProtocol Project, Eclipse Foundation",
    description: "Developed a high-performance message transport system in Rust for connected vehicles, using zero-copy for instant transmission of large data (camera and LIDAR). Enabled shared-memory transmission of large Protobuf-encoded messages between processes with serialization. Integrated seamlessly into Eclipse’s protocol stack.",
    languages: [
      { name: "Rust", color: "nodejs" },
      { name: "Protobuf", color: "js" }
    ],
    mediaType: "video",
    mediaSrc: luna,
    buttons: [
      { type: "code", label: "GitHub", link: "https://github.com/eclipse-uprotocol/up-transport-iceoryx2-rust" }
    ]
  },
  {
    id: 3,
    title: "SWE Intern – Moneyboxx Finance Ltd",
    description: "Prototyped a cow muzzle recognition system using YOLO and Haar Cascade for farmer insurance and lending.",
    languages: [
      { name: "Python", color: "python" },
      { name: "MATLAB", color: "python" }
    ],
    mediaType: "image",
    mediaSrc: cow,
    buttons: []
  },
  {
    id: 4,
    title: "Teaching Assistant – Web Application Development, CMU",
    description: "Mentored 60+ students in full-stack engineering principles such as React, REST APIs, and cloud deployment. Held weekly office hours and contributed to refining course content and project infrastructure.",
    languages: [
      { name: "JavaScript", color: "js" },
      { name: "React", color: "js" }
    ],
    // mediaType: "image",
    // mediaSrc: "/webapp-ta.jpg",
    buttons: []
  },
  {
    id: 5,
    title: "Undergraduate Tutor – 15-151 Discrete Mathematics, CMU",
    description: "Tutored one-on-one, assisting students with problem solving and mastering a rigorous core CS course.",
    languages: [
      { name: "Mathematics", color: "python" }
    ],
    // mediaType: "image",
    // mediaSrc: "/discrete-math.jpg",
    buttons: []
  },
  {
    id: 6,
    title: "Consulting Intern – Deloitte Consulting",
    description: "Analyzed UI/UX metrics for a digital maturity project for Google, improving publishing workflows.",
    languages: [
      { name: "Excel", color: "python" },
      { name: "UI/UX", color: "python" }
    ],
    // mediaType: "image",
    // mediaSrc: "/deloitte.jpg",
    buttons: []
  }
];

  return (
    <div className="github-container">
      <Navigation projects={projects} experiences={experiences} />
      <Routes>
        <Route path="/" element={<HomePage featured={featured} />} />
        <Route path="/projects" element={<ProjectsPage projects={projects} />} />
        <Route path="/experience" element={<ExperiencePage experiences={experiences} />} />
      </Routes>
    </div>
  );
}

export default App;