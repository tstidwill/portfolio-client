import { useRef, useEffect, useState } from "react";
import "./Reading.scss";

export default function Reading() {
  const readingBooksRef = useRef(null);
  const readingCardsRef = useRef([]);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCardPosition = () => {
    const cardWidth = readingCardsRef.current[0]?.clientWidth || 0;
    if (readingBooksRef.current) {
      readingBooksRef.current.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
    }
  };

  useEffect(() => {
    updateCardPosition();
    window.addEventListener("resize", updateCardPosition);

    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (prevBtn) prevBtn.addEventListener("click", handlePrevClick);
    if (nextBtn) nextBtn.addEventListener("click", handleNextClick);

    return () => {
      if (prevBtn) prevBtn.removeEventListener("click", handlePrevClick);
      if (nextBtn) nextBtn.removeEventListener("click", handleNextClick);
      window.removeEventListener("resize", updateCardPosition);
    };
  }, [currentIndex]);

  const handleNextClick = () => {
    if (currentIndex < readingCardsRef.current.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(readingCardsRef.current.length - 1);
    }
  };

  return (
    <section className="reading">
      <h2 className="reading__header">BOOK CLUB</h2>
      <div className="reading__books" ref={readingBooksRef}>
        <section
          className="reading__card card"
          ref={(el) => (readingCardsRef.current[0] = el)}
        >
          <div className="card__text">
            <h3>Just Finished</h3>
            <h5 className="card__title">A Future We Can Love</h5>
            <h5 className="card__author">Susan Bauer-Wu</h5>
          </div>
          <div className="card__imagecontainer">
            <img src="/images/future_we_can_love.jpg" className="card__image" />
          </div>
        </section>
        <section
          className="reading__card card"
          ref={(el) => (readingCardsRef.current[1] = el)}
        >
          <div className="card__text">
            <h3>Currently Reading</h3>
            <h5 className="card__title">
              Less is More: How Degrowth will Save the World
            </h5>
            <h5 className="card__author">Jason Hickel</h5>
          </div>
          <div className="card__imagecontainer">
            <img src="/images/Less_is_more.jpeg" className="card__image" />
          </div>
        </section>
        <section
          className="reading__card card"
          ref={(el) => (readingCardsRef.current[2] = el)}
        >
          <div className="card__text">
            <h3>Up Next</h3>
            <h5 className="card__title">Losing Earth: A Recent History</h5>
            <h5 className="card__author">Nathaniel Rich</h5>
          </div>
          <div className="card__imagecontainer">
            <img src="/images/Losing_Earth.jpg" className="card__image" />
          </div>
        </section>
      </div>
      <button
        className="reading__button reading__button--prev"
        ref={prevBtnRef}
      >
        &lt;
      </button>
      <button
        className="reading__button reading__button--next"
        ref={nextBtnRef}
      >
        &gt;
      </button>
    </section>
  );
}
