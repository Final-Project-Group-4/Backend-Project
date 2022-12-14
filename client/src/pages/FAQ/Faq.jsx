import { useState } from 'react';
import { ContactForm } from '../../components/export';
import FaqQuestions from './FaqQuestion';
import './FAQ.scss';
const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is included in safari package?',
      answer:
        'Accommodation as specified in the itinerary.\nAll meals at lodges and tented camps.\nExperienced English speaking guide.\nUnlimited kms, Toyota Landcruiser 4x4 Safari vehicle with pop up roof, 6 window seats, power adapters, and refrigerator.\nDrinking water.\nAll park entry fees and 18% VAT.',
      open: false,
    },
    {
      question: 'Where does it come from??',
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      open: false,
    },
    {
      question: 'Why do we use it?',
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      open: false,
    },
    {
      question: 'Ho many tours we have?',
      answer: 'until now we have 9 tours ',
      open: false,
    },
    {
      question: 'Ho many tours we have?',
      answer: 'until now we have 9 tours ',
      open: false,
    },
    {
      question: 'do i have to be professional to join the trip?',
      answer: 'no it is not necessary to be professional ',
      open: false,
    },
    {
      question: 'here we can put peter questions ? ',
      answer: 'here we can answer what peter questions put !',
      open: false,
    },
    {
      question: 'are you hungry?',
      answer: 'yes i am.',
      open: false,
    },
    {
      question: 'coffee?',
      answer: 'Yes,lets do that.',
      open: false,
    },
  ]);

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
    <div className="container">
      <div id="faq" className="biggest faq-big">
        <div className="main faqs">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <FaqQuestions faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default FAQ;
