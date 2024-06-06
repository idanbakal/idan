import React, { useEffect } from "react";
import './desktop.css';
import './desktopRes.css';
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.png";
import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'; // You may need to import the CSS file as well



interface FAQItem {
    question: string;
    answer: string;
  }
  
  const faqItems: FAQItem[] = [
    { question: 'מה זה דף נחיתה?', answer: 'דף נחיתה הוא עמוד אינטרנט שבו המבקרים נוחתים בו. המטרה היא לגרום למבקרים לעשות פעולה מסוימת כמו להשאיר פרטים או לקנות מוצר. זה כלי חשוב מאוד להגדלת מכירות ולהביא לקוחות חדשים.' },
    { question: 'למה חשוב להשקיע בעיצוב דף נחיתה?', answer: 'עיצוב יפה ומקצועי מגדיל את הסיכוי שהמבקרים יעשו את הפעולה שלשמה בנינו את הדף נחיתה. דף נחיתה מעוצב טוב עושה רושם טוב ומדגיש את המסר שלך ומניע לפעולה בקרב הלקוחות. בדיוק בגלל זה יש לנו מעצבת גרפית מדהימה שמוכנה כדי ליצירת האומנות שלך תהיה לצידך.' },
    { question: 'למי זה מתאים?', answer: 'עסקים שלא מרוצים מהתוצאות שדף הנחיתה שלהם מספק. כל עסק שבנה דף ולא מביא תוצאות, זקוק לטיפול והתחזות מקצועית.' },
    { question: 'מהם המרכיבים החשובים ביותר בדף נחיתה?', answer: 'דף נחיתה איכותי הוא מכתב מכירה ברוח החדשה שמסביר מה בדיוק העסק שלך עושה ואיך העסק שלך יכול לעזור. צריך גם מבנה נכון כדי שהמבקרים באתר יבינו כמה שיותר מהר את העסק שלך ומה אתה יכול להציע להם.' },
    { question: 'כמה זמן ייקח כל התהליך?', answer: 'אני רוצה שתקבל את יצירת האומנות שלך כמה שיותר מהר כדי שתוכל להרוויח כמה שיותר. לרוב מדובר ב-14 יום עבודה.' }
  ];

  
export default function Desktop(){

useEffect(()=>{
  Aos.init(
   { duration: 1000 }// Set the duration to 1000 milliseconds (1 second)

  );
},[])

  
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <>
        <section className="header" >
            <h1 data-aos="fade-up">דפי נחיתה שהם יצירת אומנות </h1>
            <p data-aos="fade-down">
            הכלי החזק ביותר לייצר מכירות ולהביא לקוחות חדשים לעסק שלך. <br></br>
תן לי להפוך לך את הדף נחיתה שלך ליצירת אומנות שאי אפשר להתעלם ממנה, <br></br> 
עם עיצוב מרהיב שמשדר מקצועיות ומושך את הלקוחות שלך.
            </p>
            <div className="imgContainer"data-aos="fade-left">
            <img src={Logo} className="logo"alt="עידן בקל דפי נחיתה בקוד" />
            <img src={Profile} className="profile" alt="עידן בקל דפי נחיתה בקוד" />
            </div>
            <a href="#formb"><button data-aos="zoom-in">
                <span>לבנייה של דף נחיתה 
                    -<br></br> יצירת אומנות</span>
            </button></a>
        </section>
        <section className="body">
            <h3 data-aos="fade-up">היי אני עידן </h3>
            <h4 data-aos="fade-up">(מפתח האתרים האחרון שתדבר איתו)</h4>
            <p data-aos="fade-up-right">
            אני מפתח דפי <span >נחיתה בקוד בצורה</span> כזו <span>שאי אפשר להתעלם</span> מהם!<br></br>
            <span>למה דווקא בקוד?</span>
 כי כשדף נחיתה נכתב בקוד אנחנו <span>לא מוגבלים</span> במה שאפשר<br></br>
  לעשות וככה אפשר לייצר את <span>דף הנחיתה מהחלומות שלך!</span> <br></br>
המטרה שלי היא <span>שהעסק שלך יוכל להתחיל להרוויח גם אם אין לך עדיין הוכחות<br></br> חברתיות,</span>
  כי מה לעשות? 
   <span>הלופ של ניסיון מול עבודה</span> הוא לופ שכל בעל עסק בתחילת הדרך חווה. <span>אז בוא נפתור את זה!</span>
            </p>

<h3 className="how" data-aos="fade-up">איך?</h3>
   <p className="howp" data-aos="fade-up-left">
   יחד איתי עובדים מעצבת גרפית וקופירייטר צמודים עד לסוף התהליך! <br></br>
(כלומר כמה זמן שייקח עד שתהיה מרוצה) <br></br>
(אין אותיות קטנות  ) <br></br>
נקבע פגישה שבה נעבור על החזון והערכים שלך <span>כדי שנוכל להבין ביחד מה התוצאה שאתה מצפה לקבל.</span> <br></br>
מייד אחר כך יצטרף אלינו לפגישה הקופירייטר שלנו <span>כדי שנוכל לאפיין ולהיסגר יחד מה ההצעה שלך ומי קהל היעד.</span><br />
מייד אחר כך תעלה לשיחה שלנו המעצבת <span>כדי שתוכל להוסיף את כל מה שחשוב לך בעיצוב האתר.</span><br />
וזהו...כל השאר עלינו!
   </p>
<div className="formb" id="formb"data-aos="fade-up">
    <h3>שניצור יצירת אומנות?</h3>
    <h4>תשאירו פרטים ואני אחזור אליכם ב-24 שעות הקרובות.</h4>
    <form >
        <div className="specific">
    <input type="text" required  placeholder="שם מלא:" />
    <input type="number" required  placeholder="מספר טלפון:" />
    <input type="email" required placeholder="דואר אלקטרוני:"/>
    </div>
    <button className="submit" ><span>ליצירת האומנות שלך</span></button>
    </form>
</div>     
<h3 className="faq" data-aos="fade-up">faq</h3>
<div className="faq-container" data-aos="fade-up-right" >
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
 </section>
 <footer>
 <div className="contact-icons">
          <a href="https://www.facebook.com/profile.php?id=100000605493499" target="_blank"><i className="bx bxl-facebook-circle"></i></a>
          <a href="https://www.instagram.com/idanbakal/" target="_blank"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/idan-amnon-bakal-944239235/" target="_blank"><i className="bx bxl-linkedin"></i></a>
        </div>
        <p ><a href="" className="developed">Developed By Idan Amnon Bakal © 2023</a> </p>
<div className="information">
<span>idan19982@gmail.com<i className='bx bx-send' ></i></span>
<span>052-6642040<i className='bx bx-phone'></i></span>

</div>

<p ><a href="" className="developedres">Developed By Idan Amnon Bakal © 2023</a> </p>


 </footer>

        </>
    )
}