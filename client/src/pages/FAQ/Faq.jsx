import {useState} from "react";
import {Navbar, Footer , ContactForm} from "../../components/export"
import FaqQuestions from "./FaqQuestion";
import "./FAQ.scss"
const FAQ = () => {

  const [faqs, setFaqs] = useState([
        {
            question: "What is INCLUDED IN YOUR SAFARI PACKAGE?",
            answer: [
              <ul>
                <li>1_  Accommodation as specified in the itinerary.</li>
                <li>2_ All meals at lodges and tented camps.</li>
                <li>3_ Unlimited kms, Toyota Landcruiser 4×4 Safari vehicle with pop up roof, 6 window seats, power adapters, and refrigerator.</li>
                <li>4_ Experienced English speaking guide.</li>
                <li>5_ Drinking water.</li>
                <li>6_ All park entry fees and 18% VAT.</li>
           
              </ul>
            ],
            open: false,
        },
        {
          question: "EXCLUDED FROM YOUR SAFARI PACKAGE ?",
          answer: [
            <ul>
              <li>1_ International Flights</li>
              <li>2_ Visa</li>
              <li>3_ Medications</li>
              <li>4_ Medical / Travel Insurance</li>
              <li>5_ Hot Air Balloon Ride in Serengeti $ 650 per person</li>
              <li>6_ Alcoholic and soft drinks</li>
              <li>7_ Tip for Your Driver</li>
            </ul>
          ],
          open: false,
      },
      {
        question: "What Is The Items That are included?",
        answer: [
          <ul>
            <li>1_ Quality, waterproof, four-season private mountain sleeping tents.</li>
            <li>2_ Professional, experienced, mountain guides.</li>
            <li>3_ All Park fees.</li>
            <li>4_ Rescue fees.</li>
            <li>5_ All meals while on the Mountain.</li>
            <li>6_ Guides, Porters, cook salaries and park fees.</li>
            <li>7_ Quality Mess tents with table and chairs.</li>
            <li>8_ Large portions of fresh, healthy nutritious food.</li>
            <li>9_ Clean, purified drinking water.</li>
            <li>10_ Crisis management and safety procedures.</li>
            <li>11_ Fair and ethical treatment of porters.</li>
        
          </ul>
        ],
            open: false,
    },
      {
        question: " What Is The Items are not included ?",
        answer: [
          <ul>
            <li>1_ Tanzania Visa</li>
            <li>2_ Personal Expenses (e.g. laundry, telephone, beverages, etc.)</li>
            <li>3_ Meals not listed above</li>
            <li>4_ Optional Tours (short safari after your climb e.t.c)</li>
        
          </ul>
        ],
        open: false,
    },
      {
        question: "What Is Required For Trip ?",
        answer: [<ul>

                <li>1_  Duffel Bag (51L-100L, No Wheels or Handles).</li>
                <li>2_ Pack Rain Cover.</li>
                <li>3_ Rain Pants (Lightweight, Waterproof, Breathable).</li>
                <li>4_ Insulated Jacket.</li>
                <li>5_ Fleece/Wool Jacket or Sweaterr.</li>
                <li>6_ Long Underwear Tops and Bottoms (Midweight, Synthetic).</li>
                
                <li>7_  Long Sleeve Shirts (Synthetic, Lightweight).</li>
                <li>8_ Hiking Pants (Convertible, Quick-Dry, Lightweight).</li>
                <li>9_ Hiking Socks (Synthetic or Wool).</li>
                <li>10_ Waterproof Hiking Boots.</li>
                <li>11_ Fleece/Wool Hat.</li>
                <li>12_ Sun Hat.</li>
                <li>13_  Headlamp with Fresh Batteries.</li>
                <li>14_ Sunglasses and Accessories.</li>
                <li>15_ Sun Block and Lip Balm.</li>
                <li>16_ Long Underwear Tops and Bottoms (Heavyweight, Synthetic).</li>
                <li>17_ Bandana for Sun Protection.</li>
                <li>18_ Day Pack (21L-35L).</li>
                <li>19_  Rain Jacket (Hooded, Lightweight, Waterproof, Breathable).</li>
                <li>20_ Water Bottles (Three 1-Quart) or Hydration System + two 1-quart water bottles.</li>
                <li>21_ Gloves (Waterproof and Insulating).</li>
                <li>22_ Sleeping Bag (1°-14°, Lightweight, Compressible).</li>
          
        </ul>],
        open: false,
    },

  {
    question: "What Is Recommended For The Trip?",
    answer: [
    <ul>

      <li>1_  Luggage (1 Piece).</li>
      <li>2_ 	Luggage Tags and Locks (2).</li>
      <li>3_ Passport/Money Belt or Pouch.</li>
      <li>4_ Casual Clothing for Travel and Town Wear (Lightweight, Easily Washable).</li>
      <li>5_ Hiking Shorts (Longer, Quick-Dry, Lightweight).</li>
      <li>6_ Liner Socks (Synthetic).</li>
      <li>7_  Casual Shoes for Travel and Free Time.</li>
      <li>8_ Trekking Poles.</li>
      <li>9_ Hand and Toe Warmers.</li>
      <li>10_ Energy Snacks and Drink Mixes.</li>
      <li>11_ Toiletries.</li>
      <li>12_ Camp Towel.</li>
      <li>13_  Personal Bathroom Kit: Toilet Paper, Ziplock Bags, Personal Wipes, Hand Cleaner.</li>
      <li>14_ Gaiters (Tall).</li>
      <li>15_ Tee Shirts (Cotton and Synthetic).</li>
      <li>16_ Balaclava (Synthetic or Wool).</li>
      <li>17_ Energy Snacks and Drink Mixes.</li>
      <li>18_ Fleece Pants.</li>
      <li>19_ Ear Plugs.</li>
      <li>20_ Rain Poncho.</li>
      <li>21_ Fleece/Wool Gloves.</li>
      <li>22_ Insect Repellant (DEET).</li>
      <li>23_ Glove Liners (Synthetic).</li>

</ul>],
    open: false,
},

        {
            question: "Gear list? ",
            answer:
                "The key to staying comfortable while on an active trip is layering. To get maximum comfort with minimum weight, you need versatile layers that mix and match to create the right amount of insulation, ventilation and weather protection. Try to bring only what is necessary—this will help you and the field staff.!",
                open: false,
        },
        {
            question: "Rentals?",
            answer: "Why buy gears that you will only use them once? We will facilitate all necessary gear at 80% cheaper than purchasing. We will make sure you are outfitted for the summit and make your trip relaxing.",
            open: false,
        },
   
    ]);

    const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    
<div className="container">
    <div id='faq' className="biggest faq-big">
        <div className="main faqs">
          <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <FaqQuestions 
          faq={faq} 
          index={i}
          toggleFAQ={toggleFAQ}/>
        ))}
      </div>
      </div>
      <ContactForm/>
      </div>
  )
}

export default FAQ;