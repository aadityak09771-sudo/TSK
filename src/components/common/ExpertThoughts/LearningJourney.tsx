import React from "react";
import {
  BookOpen,
  PlaySquare,
  Radio,
  FileText,
  Pencil,
  ClipboardCheck,
  RefreshCw,
  Target,
} from "lucide-react";

import "./LearningJourney.css";

const steps = [
  {
    icon: <BookOpen size={32} />,
    title: "Chapter",
  },
  {
    icon: <PlaySquare size={32} />,
    title: "Orientation Video",
  },
  {
    icon: <Radio size={32} />,
    title: "Live Video",
  },
  {
    icon: <FileText size={32} />,
    title: "Notes",
  },
  {
    icon: <Pencil size={32} />,
    title: "Practice",
  },
  {
    icon: <ClipboardCheck size={32} />,
    title: "Test",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Revision",
  },
  {
    icon: <Target size={34} />,
    title: "Exam Ready",
    active: true,
  },
];

const LearningJourney = () => {
  return (
    <section className="journey-section">
      <div className="container">
        <div className="journey-heading-wrapper">
          <span className="heading-line"></span>
          <h2>Your Learning Journey</h2>
          <span className="heading-line"></span>
        </div>

        <div className="journey-track">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`journey-step ${
                  step.active ? "active" : ""
                }`}
              >
                <div className="journey-icon">
                  {step.icon}
                </div>

                <p>{step.title}</p>
              </div>

              {index !== steps.length - 1 && (
                <div className="journey-connector"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;