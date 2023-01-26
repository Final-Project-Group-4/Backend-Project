import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const FaqQuestions = ({ faq, index, toggleFAQ }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowRotation = (id) => {
    const arrow = document.getElementById(id);
    arrow.style.transform = `${
      isOpen
        ? "translateY(5%) rotate(360deg)"
        : "translateY(-5%) rotate(180deg)"
    }`;
    setIsOpen((oldState) => !oldState);
  };

  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
        <span
          className="faq-icon"
          id={index}
          onClick={() => {
            arrowRotation(index);
          }}
        >
          <FaArrowDown size={25} />
        </span>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqQuestions;
