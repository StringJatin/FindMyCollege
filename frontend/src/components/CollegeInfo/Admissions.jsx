import React from "react";
import Accordion from "../Accordion";

const Admissions = () => {
  const faqData = [
    {
      question: "What is the application deadline?",
      answer:
        "The application deadline for California State University: Fresno is typically November 30th for fall admissions. However, deadlines may vary depending on the program.",
    },
    {
      question: "What are the admission requirements?",
      answer:
        "Applicants must submit their SAT/ACT scores, transcripts, and a completed application form. International students also need to provide proof of English proficiency.",
    },
    {
      question: "Is financial aid available?",
      answer:
        "Yes, financial aid is available in the form of grants, scholarships, work-study programs, and loans. Applicants are encouraged to fill out the FAFSA to determine eligibility.",
    },
    {
      question: "What is the acceptance rate?",
      answer:
        "California State University: Fresno has an acceptance rate of 96%.",
    },
  ];

  return (
    <>
      {/* Quick Facts */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Add quick facts content */}
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">
        California State University: Fresno is a very large, 4-year, public
        university. This west college is located in a large city in an urban
        setting and is primarily a commuter campus. It offers bachelor's,
        certificate, master's, and doctoral degrees. This college has an
        acceptance rate of 96% and a graduation rate of 55%.
      </p>

      {/* FAQ Accordion */}
      <Accordion items={faqData} multiExpand={true} />
    </>
  );
};

export default Admissions;
