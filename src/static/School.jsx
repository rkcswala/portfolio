
import React from "react";

import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCertificate,
} from "react-icons/fa";

const School = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "Diploma in Computer Science Engineering",
      institute: "Government Ramchandara Khaitan Polytechnic, Jaipur",
      board: "BTER, Jodhpur",
      year: "2023 - 2026",
      result: "9.05 CGPA",
    },
    {
      icon: <FaUniversity />,
      title: "Bachelor of Arts (B.A.)",
      institute: "University of Rajasthan",
      year: "2023",
      result: "60.12%",
    },
    {
      icon: <FaSchool />,
      title: "Senior Secondary (12th)",
      institute: "RBSE, Rajasthan Board",
      year: "2020",
      result: "84.20%",
    },
    {
      icon: <FaSchool />,
      title: "Secondary (10th)",
      institute: "RBSE, Rajasthan Board",
      year: "2018",
      result: "78.33%",
    },
    {
      icon: <FaCertificate />,
      title: "RSCIT",
      institute: "Vardhman Mahaveer Open University (VMOU), Kota",
      year: "2023",
      result: "84.00%",
    },
  ];

  return (
    <section id="education">
     

      <div className="timeline">

        {education.map((edu, index) => (
          <div className="timeline-item" key={index}>

         
            <div className="timeline-card">
                <span> {edu.icon}</span>

              <div className="education-header">
                <span className="education-date">
                  {edu.year}
                </span>
              </div>

              <div className="education-body">

                <h3 className="education-title">
                  {edu.title}
                </h3>

                <p className="education-institute">
                  {edu.institute}
                </p>

                {edu.board && (
                  <p className="education-board">
                    {edu.board}
                  </p>
                )}

                <p className="education-result">
                  {edu.result}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default School;
