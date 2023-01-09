import { useState } from 'react';
import { Contacts } from '../../components/export';
import FaqQuestions from './FaqQuestion';
import './_FAQ.scss';
const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is included in your Safari Package?',
      answer: [
        <ul>
          <li>1. Accommodation as specified in the itinerary.</li>
          <li>2. All meals at lodges and tented camps.</li>
          <li>
            3. Unlimited kms, Toyota Landcruiser 4×4 Safari vehicle with pop up roof, 6 window
            seats, power adapters, and refrigerator.
          </li>
          <li>4. Experienced English speaking guide.</li>
          <li>5. Drinking water.</li>
          <li>6. All park entry fees and 18% VAT.</li>
        </ul>,
      ],
      open: false,
    },
    {
      question: 'Excluded from your Safari Package?',
      answer: [
        <ul>
          <li>1. International Flights</li>
          <li>2. Visa</li>
          <li>3. Medications</li>
          <li>4. Medical / Travel Insurance</li>
          <li>5. Hot Air Balloon Ride in Serengeti $ 650 per person</li>
          <li>6. Alcoholic and soft drinks</li>
          <li>7. Tip for Your Driver</li>
        </ul>,
      ],
      open: false,
    },
    {
      question: 'What are the items that are included?',
      answer: [
        <ul>
          <li>1. Quality, waterproof, four-season private mountain sleeping tents.</li>
          <li>2. Professional, experienced, mountain guides.</li>
          <li>3. All Park fees.</li>
          <li>4. Rescue fees.</li>
          <li>5. All meals while on the Mountain.</li>
          <li>6. Guides, Porters, cook salaries and park fees.</li>
          <li>7. Quality Mess tents with table and chairs.</li>
          <li>8. Large portions of fresh, healthy nutritious food.</li>
          <li>9. Clean, purified drinking water.</li>
          <li>10. Crisis management and safety procedures.</li>
          <li>11. Fair and ethical treatment of porters.</li>
        </ul>,
      ],
      open: false,
    },
    {
      question: 'What is the items are not included?',
      answer: [
        <ul>
          <li>1. Tanzania Visa</li>
          <li>2. Personal Expenses (e.g. laundry, telephone, beverages, etc.)</li>
          <li>3. Meals not listed above</li>
          <li>4. Optional Tours (short safari after your climb e.t.c)</li>
        </ul>,
      ],
      open: false,
    },
    {
      question: 'What is required for trip ?',
      answer: [
        <ul>
          <li>1. Duffel Bag (51L-100L, No Wheels or Handles).</li>
          <li>2. Pack Rain Cover.</li>
          <li>3. Rain Pants (Lightweight, Waterproof, Breathable).</li>
          <li>4. Insulated Jacket.</li>
          <li>5. Fleece/Wool Jacket or Sweaterr.</li>
          <li>6. Long Underwear Tops and Bottoms (Midweight, Synthetic).</li>

          <li>7. Long Sleeve Shirts (Synthetic, Lightweight).</li>
          <li>8. Hiking Pants (Convertible, Quick-Dry, Lightweight).</li>
          <li>9. Hiking Socks (Synthetic or Wool).</li>
          <li>10. Waterproof Hiking Boots.</li>
          <li>11. Fleece/Wool Hat.</li>
          <li>12. Sun Hat.</li>
          <li>13. Headlamp with Fresh Batteries.</li>
          <li>14. Sunglasses and Accessories.</li>
          <li>15. Sun Block and Lip Balm.</li>
          <li>16. Long Underwear Tops and Bottoms (Heavyweight, Synthetic).</li>
          <li>17. Bandana for Sun Protection.</li>
          <li>18. Day Pack (21L-35L).</li>
          <li>19. Rain Jacket (Hooded, Lightweight, Waterproof, Breathable).</li>
          <li>
            20. Water Bottles (Three 1-Quart) or Hydration System + two 1-quart water bottles.
          </li>
          <li>21. Gloves (Waterproof and Insulating).</li>
          <li>22. Sleeping Bag (1°-14°, Lightweight, Compressible).</li>
        </ul>,
      ],
      open: false,
    },

    {
      question: 'What Is Recommended For The Trip?',
      answer: [
        <ul>
          <li>1. Luggage (1 Piece).</li>
          <li>2. Luggage Tags and Locks (2).</li>
          <li>3. Passport/Money Belt or Pouch.</li>
          <li>4. Casual Clothing for Travel and Town Wear (Lightweight, Easily Washable).</li>
          <li>5. Hiking Shorts (Longer, Quick-Dry, Lightweight).</li>
          <li>6. Liner Socks (Synthetic).</li>
          <li>7. Casual Shoes for Travel and Free Time.</li>
          <li>8. Trekking Poles.</li>
          <li>9. Hand and Toe Warmers.</li>
          <li>10. Energy Snacks and Drink Mixes.</li>
          <li>11. Toiletries.</li>
          <li>12. Camp Towel.</li>
          <li>
            13. Personal Bathroom Kit: Toilet Paper, Ziplock Bags, Personal Wipes, Hand Cleaner.
          </li>
          <li>14. Gaiters (Tall).</li>
          <li>15. Tee Shirts (Cotton and Synthetic).</li>
          <li>16. Balaclava (Synthetic or Wool).</li>
          <li>17. Energy Snacks and Drink Mixes.</li>
          <li>18. Fleece Pants.</li>
          <li>19. Ear Plugs.</li>
          <li>20. Rain Poncho.</li>
          <li>21. Fleece/Wool Gloves.</li>
          <li>22. Insect Repellant (DEET).</li>
          <li>23. Glove Liners (Synthetic).</li>
        </ul>,
      ],
      open: false,
    },

    {
      question: 'Gear list? ',
      answer:
        'The key to staying comfortable while on an active trip is layering. To get maximum comfort with minimum weight, you need versatile layers that mix and match to create the right amount of insulation, ventilation and weather protection. Try to bring only what is necessary—this will help you and the field staff.!',
      open: false,
    },
    {
      question: 'Rentals?',
      answer:
        'Why buy gears that you will only use them once? We will facilitate all necessary gear at 80% cheaper than purchasing. We will make sure you are outfitted for the summit and make your trip relaxing.',
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
    <>
      <div id="faq" className="biggest faq-big">
        <div className="container faqs">
          <h2>Frequently Asked Questions</h2>
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
