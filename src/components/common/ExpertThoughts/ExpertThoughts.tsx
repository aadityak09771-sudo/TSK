import React, { useState, useEffect } from "react";
import "./ExpertThoughts.css";

const thoughts = [
  {
    quote: '"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."',
    author: "Dr. A.P.J. Abdul Kalam",
  },
  {
    quote: '"Arise, awake and stop not till the goal is reached."',
    author: "Swami Vivekananda",
  },
  {
    quote: '"Education is the manifestation of perfection already in man."',
    author: "Swami Vivekananda",
  },
  {
    quote: '"The root of education is bitter, but the fruit is sweet."',
    author: "Chanakya",
  },
  {
    quote: '"An equation for me has no meaning unless it expresses a thought of God."',
    author: "Srinivasa Ramanujan",
  },
  {
    quote: '"Learning gives creativity, creativity leads to thinking."',
    author: "Dr. A.P.J. Abdul Kalam",
  },
];

const ExpertThoughts: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % thoughts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="expert-thoughts">
      <div className="expert-header container">
        <div className="expert-left">
          <span className="badge">
            💡 INSIGHTS
          </span>
          <h2 className="expert-title">
            Expert <span>Thoughts</span>
          </h2>
          <p className="expert-description">
            Insights, strategies, and practical tips from
            India's greatest minds.
          </p>
        </div>

        <div className="featured-slider">
          {thoughts.map((thought, index) => (
            <div
              className={`featured-card ${index === active ? "active" : ""}`}
              key={index}
            >
              <h3>{thought.quote}</h3>
              <p>{thought.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ExpertThoughts };
