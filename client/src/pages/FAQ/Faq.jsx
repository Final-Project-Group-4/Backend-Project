import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Contacts } from '../../components/export';
import FaqQuestions from './FaqQuestion';
import './_FAQ.scss';
const FAQ = () => {
  const {t}= useTranslation();
  const [faqs,setFaqs]= useState([])
  useEffect(()=> {
  setFaqs([
    {
      question: t('questionOne'),
      answer: [
        <ul>
          {t("answersOne", {returnObjects:true}).map(({answer1})=> (
            <li>{answer1}</li>
          ))}
        </ul>,
      ],
      open: false,
    },
    {
      question: t('questionTwo'),
      answer: [
        <ul>
          {t('answersTwo', { returnObjects: true }).map(({ answer2 }) => (
            <li>{answer2}</li>
          ))}
        </ul>,
      ],
      open: false,
    },
    {
      question: t('questionThree'),
      answer: [
        <ul>
          {t('answersThree', { returnObjects: true }).map(({ answer3 }) => (
            <li>{answer3}</li>
          ))}
        </ul>,
      ],
      open: false,
    },
    {
      question: t('questionFour'),
      answer: [
        <ul>
          {t('answersFour', { returnObjects: true }).map(({ answer4 }) => (
            <li>{answer4}</li>
          ))}
        </ul>,
      ],
      open: false,
    },
    {
      question: t('questionFive'),
      answer: [
        <ul>
          {t('answersFive', { returnObjects: true }).map(({ answer5 }) => (
            <li>{answer5}</li>
          ))}
        </ul>,
      ],
      open: false,
    },

    {
      question: t('questionSix'),
      answer: [
        <ul>
          {t('answersSix', { returnObjects: true }).map(({ answer6 }) => (
            <li>{answer6}</li>
          ))}
        </ul>,
      ],
      open: false,
    },

    {
      question: t('GearList'),
      answer: t('GearListAnswer'),
      open: false,
    },
    {
      question: t('RentalsQuestion'),
      answer: t('RentalsAnswer'),
      open: false,
    },
  ])
  },[t]);

  const toggleFAQ = (index) => {
   setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <div id="faq" className="biggest faq-big">

        <div className="container faqs">
          <h2>{t('FrequentlyAskedQuestions')}</h2>
           
          {faqs.map((faq, i) => (
            <FaqQuestions faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <Contacts />
    </>
  );
};

export default FAQ;
