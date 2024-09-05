import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./TypedText.scss";

const TypedText = ({ strings, className }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span className={className} ref={el}></span>;
};

export default TypedText;
