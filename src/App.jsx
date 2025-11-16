"use client";
import Nav from "./components/nav";
import Footer from "./components/footer";
import heroimg from "./images/himg.png";

export default function App() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <div
        id="hero"
        className="Hero p-10 md:p-20 mt-20 xl:mt-10 xl:justify-between lato-regular flex flex-col xl:flex-row gap-5 text-[var(--text)] items-center justify-center"
      >
        <div className="flex flex-col gap-5 md:gap-6 xl:gap-8">
          <h1 className="text-3xl sm:text-4xl md:text-7xl lato-semibold transition-all duration-300">
            Hi, I’m <br />
            Sarwar Alam Sujon.
          </h1>

          <p className="text-lg sm:text-xl md:text-3xl transition-all duration-300">
            • a CSE student and web developer.
          </p>

          <div className="flex gap-5 md:gap-10 items-center">
            <button className="p-2 px-3 lg:px-5  text-lg sm:text-xl md:text-2xl text-[var(--bg)] bg-[var(--text)] rounded-2xl transition-all duration-300 hover:bg-[var(--active)] hover:text-[var(--bg)] hover:scale-105 shadow-lg">
              Contact
            </button>

            <button className="p-2 px-3 lg:px-5  text-lg sm:text-xl md:text-2xl border border-[var(--text)] rounded-2xl transition-all duration-300 hover:bg-[var(--active)] hover:text-[var(--bg)] hover:border-[var(--active)] hover:scale-105">
              Experience
            </button>
          </div>
        </div>

        <img
          src={heroimg}
          alt="heroimage"
          className="mt-8 xl:mt-0 xl:h-120 w-auto max-w-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* About Me */}
      <div
        id="about"
        className="AboutMe p-10 md:p-20 lato-regular flex flex-col gap-5 text-[var(--text)]"
      >
        <h1 className="text-2xl lato-semibold md:text-4xl transition-all duration-300 hover:text-[var(--active)]">
          About Me
        </h1>
        <div className="w-full h-[1px] bg-[var(--text)] transition-all duration-300"></div>
        <p className="md:text-2xl md:leading-relaxed transition-all duration-300">
          I’m Mohammad Sarwar Alam Sujon, a Computer Science and Engineering
          student passionate about technology, networking, and web development.
          Skilled in Python, C, C++, Java, and front-end web technologies, with
          certifications in CCNA and MTCNA. I currently work as an Assistant
          Business Development Manager at New Vision Information Technology
          Ltd., where I handle client communication, marketing, and project
          coordination.
        </p>
      </div>

      {/* What Can I Do */}
      <div
        id="wcid"
        className="WhatCanIDo p-10 lato-regular flex flex-col gap-5 text-[var(--text)] md:p-20"
      >
        <h1 className="text-2xl lato-semibold md:text-4xl transition-all duration-300 hover:text-[var(--active)]">
          What can I do for you
        </h1>
        <div className="w-full h-[1px] bg-[var(--text)]"></div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8">
          {[
            {
              icon: "fa-desktop",
              title: "Web & App Development",
              desc: "Using Python, C, C++, Java, HTML, CSS, and JavaScript I can build websites and apps.",
            },
            {
              icon: "fa-handshake",
              title: "Coordinate IT business operations",
              desc: "Managing client communication, project planning, and marketing.",
            },
            {
              icon: "fa-toolbox",
              title: "Use office and design tools",
              desc: "Word, Excel, PowerPoint, Canva, Photoshop for documentation, presentations, and visuals.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--bg2)] p-5 rounded-3xl my-shadow md:p-8 xl:p-10 w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="bg-[var(--bg)] rounded-full h-15 w-15 mb-6 my-shadow flex items-center justify-center p-7 md:p-10 transition-all duration-300 group-hover:bg-[var(--active)]">
                <i
                  className={`fas ${item.icon} text-3xl text-[var(--text)] transition-all duration-300 group-hover:text-[var(--bg)]`}
                ></i>
              </div>
              <h2 className="mb-5 text-xl md:text-2xl transition-all duration-300 group-hover:text-[var(--active)]">
                {item.title}
              </h2>
              <p className="lato-light md:text-xl text-[var(--text2)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div
        id="skills"
        className="Skills p-10 lato-regular flex flex-col gap-5 text-[var(--text)] md:px-20"
      >
        <div>
          <h1 className="text-2xl lato-semibold md:text-4xl transition-all duration-300 hover:text-[var(--active)]">
            Skills
          </h1>
          <p className="mb-2 md:text-xl xl:text-2xl">
            A clear list of my technical.
          </p>
          <div className="w-full h-[1px] bg-[var(--text)]"></div>
        </div>

        {[
          {
            title: "Programming Languages",
            desc: "Build efficient applications using Python, C, C++, and Java.",
          },
          {
            title: "Web Development",
            desc: "Create responsive, user-friendly websites with HTML, CSS, and JavaScript.",
          },
          {
            title: "Tools & Software",
            desc: "Prepare documents, data sheets, and visuals with Microsoft Office, Canva, and Photoshop.",
          },
          {
            title: "Networking",
            desc: "Configure and manage networks using CCNA and MTCNA knowledge.",
          },
        ].map((skill, idx) => (
          <div key={idx}>
            <h2 className="mb-5 text-xl lato-semibold md:text-3xl transition-all duration-300 hover:text-[var(--active)]">
              {skill.title}:
            </h2>
            <p className="text-[var(--text2)] mb-8 md:text-xl">{skill.desc}</p>
            <a href="#" className="flex items-center gap-3 group">
              <h3 className="text-xl hover:underline md:text-2xl transition-all duration-300 group-hover:text-[var(--active)]">
                Learn More
              </h3>
              <div className="bg-[var(--text)] p-3 rounded-full h-10 w-10 my-shadow flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--active)]">
                <i className="fas fa-arrow-right text-xl text-[var(--bg)] transition-all duration-300 group-hover:text-[var(--bg)]"></i>
              </div>
            </a>
            {idx < 3 && (
              <div className="w-full h-[1px] bg-[var(--text)] my-6"></div>
            )}
          </div>
        ))}
      </div>

      {/* Experience */}
      <div
        id="skills"
        className="Experience p-10 lato-regular flex flex-col gap-5 text-[var(--text)] md:px-20"
      >
        <div>
          <h1 className="text-2xl lato-semibold text-center md:text-4xl transition-all duration-300 hover:text-[var(--active)]">
            Professional Experience
          </h1>
          <p className="text-center mb-2 md:text-xl xl:text-2xl">
            My professional roles and key responsibilities.
          </p>
          <div className="w-full h-[1px] bg-[var(--text)]"></div>
        </div>
        <div className="xl:justify-center md:items-center md:flex md:flex-col transition-all duration-300 hover:text-[var(--active)]">
          <h2 className="text-xl lato-semibold mb-1 md:mt-4 md:text-3xl">
            Assistant Business Development Manager
          </h2>
          <p className="underline md:text-2xl">
            New Vision Information Technology Ltd.
          </p>
          <p className="lato-light-italic mb-5 md:text-2xl">2023 – Present</p>
          <ul className="list-disc list-inside space-y-3">
            {[
              "Coordinate between clients and the IT team to ensure smooth project delivery.",
              "Support marketing campaigns and promote company services.",
              "Participate in training sessions, seminars, and business development planning.",
            ].map((item, i) => (
              <li
                key={i}
                className="md:text-2xl transition-all duration-300 hover:text-[var(--active)] hover:translate-x-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Education */}
      <div
        id="education"
        className="Education p-10 lato-regular flex flex-col gap-5 xl:gap-8 xl:justify-between text-[var(--text)] md:p-20 xl:flex-row"
      >
        <div className="xl:space-y-4">
          <h1 className="text-2xl lato-semibold md:text-4xl transition-all duration-300 hover:text-[var(--active)]">
            Education
          </h1>
          <p className="mb-2 md:text-xl xl:text-2xl">
            Academic history and qualifications.
          </p>
          <div className="w-full h-[1px] bg-[var(--text)] xl:hidden"></div>
        </div>
        <div className="grid gap-5 xl:grid-cols-2 xl:w-200">
          {[
            {
              degree:
                "Bachelor of Science in Computer Science and Engineering.",
              institute: "University of Creative Technology, Chittagong.",
              year: "2025",
            },
            {
              degree: "Diploma in Engineering (Computer Technology)",
              institute: "Chittagong Polytechnic Institute",
              year: "2019",
            },
            {
              degree: "Secondary School Certificate (SSC)",
              institute: "Nityananda High School, Guzra, Chittagong",
              year: "2014",
            },
          ].map((edu, idx) => (
            <div
              key={idx}
              className="p-5 bg-[var(--bg2)] space-y-2 rounded-3xl my-shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <h2 className="text-xl lato-semibold md:text-2xl group-hover:text-[var(--active)] transition-all duration-300">
                {edu.degree}
              </h2>
              <h3 className="lato-light md:text-xl">{edu.institute}</h3>
              <div className="w-full h-[1px] bg-[var(--text)]"></div>
              <p className="lato-regular-italic md:text-lg">
                Completed: {edu.year}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div
        id="contacts"
        className="Contact p-10 lato-regular flex flex-col gap-5 xl:gap-50 text-[var(--text)] md:px-20 xl:flex-row-reverse xl:justify-between"
      >
        <div>
          <h1 className="text-2xl lato-semibold md:text-4xl xl:mb-3 transition-all duration-300 hover:text-[var(--active)]">
            Contacts
          </h1>
          <p className="mb-2 md:text-xl xl:text-2xl">
            Easy ways to reach me via email or social platforms.
          </p>
          <div className="w-full h-[1px] bg-[var(--text)] xl:hidden"></div>
        </div>
        <div className="w-full md:w-3/4 xl:w-2/3 space-y-5">
          {[
            {
              icon: "fa-envelope",
              label: "Email",
              value: "Sarwaralamsujon@gmail.com",
              href: "mailto:Sarwaralamsujon@gmail.com",
            },
            {
              icon: "fa-phone",
              label: "WhatsApp",
              value: "+880 1863256391",
              href: "https://wa.me/8801863256391",
            },
            {
              icon: "fa-brands fa-linkedin-in",
              label: "LinkedIn",
              value: "Md Sarwar Alam",
              href: "https://www.linkedin.com/in/md-sarwar-alam-10a69b33a/",
            },
          ].map((contact, idx) => (
            <div key={idx}>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 group transition-all duration-300"
              >
                <div className="bg-[var(--text)] p-4 md:p-8 rounded-full h-12 w-12 my-shadow flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--active)]">
                  <i
                    className={`fas ${contact.icon} text-xl md:text-2xl xl:text-3xl text-[var(--bg)] transition-all duration-300`}
                  ></i>
                </div>
                <div>
                  <h2 className="text-lg md:text-xl xl:text-2xl group-hover:text-[var(--active)] transition-all duration-300">
                    {contact.label}
                  </h2>
                  <p className="text-sm md:text-base xl:text-lg">
                    {contact.value}
                  </p>
                </div>
              </a>
              {idx < 2 && (
                <div className="w-full h-[1px] bg-[var(--text)] my-5"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
