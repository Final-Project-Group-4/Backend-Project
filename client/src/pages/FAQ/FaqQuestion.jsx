import React from 'react';
import { useTranslation } from 'react-i18next';
const FaqQuestions = ({ faq, index, toggleFAQ }) => {
  const [t,i18n] = useTranslation()
  return (
    <div  className={'faq ' + (faq.open ? 'open' : '')} key={index} onClick={() => toggleFAQ(index)}>
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqQuestions;
