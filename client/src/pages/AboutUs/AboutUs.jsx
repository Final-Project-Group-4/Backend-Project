import React from 'react';
import './_AboutUs.scss';
import Contacts from '../../components/shared/Contact/Contacts';

export default function AboutUs() {
  return (
    <div className="container aboutus">
      <div className="about">
        <h2>About us</h2>
        <div className="main">
          <div className="img-section">
            <div className="single-img">
              <img
                src="https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019129/peter%27s%20website/kilimanjaro-peak4_kk3ucv.jpg"
                alt="about us"
              />
            </div>
            <div className="single-img">
              <img
                src="https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019107/peter%27s%20website/peter-in-orange-bg-mountain_ldmsot.jpg"
                alt="about us"
              />
            </div>
          </div>

          <div className="about-text">
            <h3>Our team</h3>
            <p>
              We are a fully licensed and insured, locally owned business with years of experience
              and expertise offering custom made safaris and Kilimanjaro climbs to fit your time,
              interests and budget. Not only is it more cost effective for you to book with an on
              the ground operator you are also supporting the local economy and business owners.
              Unlike many operators, we can ensure you will be fully looked after by our employees
              as we never outsource our clients to other companies. We are fully committed to
              responsible tourism and community development are proud to be one of the few companies
              offering 100% certified ethical Kilimanjaro climbs ensuring the fair and proper
              treatment of the hardworking mountain crew. Our team welcomes you to explore the
              unparalleled natural beauty of East Africa. You'll native traditional tribes, hidden
              waterfalls, dazzling white sands, volcanic craters, and ice-capped mountain peaks all
              within hours of each other. We are able to offer customized unique safari, trekking
              and beach paradise experiences specifically matched to your interests, time and
              budget. Our experienced team and crew are dedicated to planning the perfect Tanzania
              adventure for you. We warmly invite you to explore our beautiful country with us.
              Karibu Tanzania! We have been operating Kilimanjaro climbs since 2000s and have a
              fantastic record of successfully and safely helping our clients to summit. Fundamental
              to our approach and what distinguishes us from nearly all companies offering
              Kilimanjaro climbs is that we are “operators” not “agents”. We do not simply take
              bookings and then sub-contract your climb. Instead we employ all our team directly,
              source all our equipment ourselves and control every aspect of your climb experience
              so that we can give you a cast iron commitment to quality. As part of that commitment
              to quality we adopt best practice in everything we do. - We follow ***Tanzania Porters
              Association***, Kilimanjaro Guides Associations and Kilimanjaro National Park
              regulations and continually work to ensure the best conditions for our crew - Support
              local entrepreneurs - We are committed fully to the principles of ***Leave no Trace***
              For more about how we operate Climb with us: summit safely and have a life-changing
              experience.
            </p>
          </div>
        </div>
      </div>

      <div className="main-history">
        <div className="about-text">
          <h3>History</h3>
          <p>
            The words 'Mt.Kilimanjaro' conjure up romantic images of personal growth, challenge,
            defeat, and success. We have seen pictures and heard stories. The climbers of the first
            Mt.Kilimanjaro climb in1889 had only their courage, passion pushing them on. When asked,
            'Who was the first to climb Mt.Kilimanjaro?', the most common reply isHansMeyer of
            Germany.HansMeyer is credited with the vision behind the expedition, but who was his
            guide? Yohani KinyalaLauwo was only eighteen years old when he ledHansMeyer and Ludwig
            Purtscheller to the highest point of Africa on October 5th,1889. His selection by the
            Mangi (Chagga chief) to beHansMeyer's guide was accidental, but it forever changed his
            life. Kinyala (as he was called) was born and lived his entire life in the village of
            Marangu, nestled on the slopes of Mt.Kilimanjaro. Before Europeans came to East Africa,
            many of theLauwo clan of the Chagga tribe hunted the forest elephants for ivory and sold
            it to the Swahili traders from the coast. The forest also supplied them with honey,
            timber, medicine and Colobus monkey hides. By the timeHansMeyer arrived in Chaggaland,
            KinyalaLauwo was a tall teenager who knew the forest like the back of his hand. By then,
            colonialism had started in Kinyala's homeland and young men were being forced to
            construct roads. Kinyala tried to dodge the 'draft', but was caught. As a result, he was
            summoned for trial at Mangi Marealli's palace. Coincidentally,HansMeyer had just arrived
            at the palace asking for permission to climb the mountain and guides and porters. The
            Mangi's wachili (advisors) spotted Kinyala, knew that he was of theLauwo clan, and asked
            him to guide the expedition. The event led Kinyala (later called MzeeLauwo) to guide
            Mt.Kilimanjaro climbs for more than seventy years! For his first climb, he was only
            wrapped in blankets. Over the years, he obtained appropriate clothing and hiking gear.
            Here he lived with his two wives until his death on May 10th, 1996, after a grand life
            of a one-hundred twenty-five years! then the following month (June) the same year Peter
            Mlay was born, and he is now guiding tourists to the roof of Africa.
          </p>
        </div>
        <div className="img-section">
          <img
            src="https://res.cloudinary.com/dgbrrpbvw/image/upload/v1671019104/peter%27s%20website/native-man-kilimanjaro_vrtygy.jpg"
            alt="about us"
          />
        </div>
      </div>
      <Contacts />
    </div>
  );
}
