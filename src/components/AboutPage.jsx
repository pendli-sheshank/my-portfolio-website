import React from "react";
import "../styles/AboutPage.css";

const timelineData = [
  {
    type: "experience",
    title: "Trainee Software Engineer",
    subtitle: "Spinebiz, Chennai, Tamilnadu",
    date: "12/2021 - 07/2023",
    details: [
      "Built responsive front-end interfaces with React JS, Bootstrap, Material UI, and Redux Toolkit.",
      "Developed Laravel CRUD operations and managed MySQL databases.",
      "Used Git for version control and team collaboration.",
    ],
  },
  {
    type: "education",
    title: "IRC, CCBP Tech 4.0 Intensive Program",
    subtitle: "NxtWave",
    date: "Completed 12/2021",
    details: [
      "Transitioned from the automobile industry to software.",
      "Learned Python, JavaScript, HTML, CSS, SQL, Node JS, and React JS.",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering in Automobile",
    subtitle: "MVSR College of Engineering, Hyderabad, Telangana",
    date: "Graduated 12/2020",
    details: [
      "Achieved 6.54 GPA.",
      "Participated in road awareness programs.",
      "Final Year Project: Created a Grass Cutter using an ATV vehicle.",
    ],
  },
  {
    type: "education",
    title: "Diploma in Mechanical Engineering",
    subtitle:
      "Annamacharya Institution of Technology & Science, Hyderabad, Telangana",
    date: "Completed 04/2017",
    details: [
      "Achieved 60% score.",
      "Completed a 6-month internship at Kesoram Cement Company.",
    ],
  },
  {
    type: "education",
    title: "Secondary Education",
    subtitle: "Little Flowers High School, Mandamarri, Telangana",
    date: "Completed 04/2013",
    details: ["Achieved 7.7 CGPA."],
  },
];

const AboutPage = () => {
  return (
    <section id="about" className="aboutSection">
      <h2>About Me & Journey</h2>

      {/* --- Enhanced Summary Section --- */}
      <div className="summaryContainer">
        <p className="aboutSummary">
          As a front-end developer with 1.5 year of hands-on experience, I have
          a strong background in ReactJS, HTML, CSS, and JavaScript.
          Additionally, I have experience working with MySQL, Laravel Framework,
          and Java Spring Boot. I am skilled in developing responsive and
          user-friendly interfaces, integrating back-end APIs, and
          troubleshooting technical issues.
        </p>
        <p className="aboutSummary">
          I am a quick learner and constantly seek to improve my skills and stay
          up-to-date with the latest trends and technologies in the field. With
          a passion for web development, I am dedicated to delivering
          high-quality work and creating engaging user experiences.
        </p>
      </div>
      {/* --- End of Summary Section --- */}

      {/* --- Timeline Section --- */}
      <div className="timelineContainer">
        <h3>My Journey (Experience & Education)</h3>
        <div className="timeline">
          {timelineData.map((item, index) => (
            // Consider adding a unique ID from data instead of index if possible later
            <div
              key={item.title || index}
              className={`timelineItem ${item.type}`}
            >
              <div className="timelineNode"></div>
              <div className="timelineContent">
                <span className="timelineDate">{item.date}</span>
                <h4 className="timelineTitle">{item.title}</h4>
                <p className="timelineSubtitle">{item.subtitle}</p>
                {item.details && item.details.length > 0 && (
                  <ul className="timelineDetailsList">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* --- End Timeline Section --- */}
    </section>
  );
};

export default AboutPage;
