import { useState, useEffect } from "react";

function FaqsItem({ faq, index }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (index === 0) setShow(true);
  }, [index])
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="faq-box">
      <div className="faq-que">
        <button className={show?"arrow-down":""} onClick={toggle}>{">"}</button>
        <div>{faq.question}</div>
      </div>
      <div className="faq-ans">{show && <div>{faq.answer}</div>}</div>
    </div>
  );
}

export default FaqsItem;
