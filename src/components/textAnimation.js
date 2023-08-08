import React from 'react';
import { CSSTransition } from 'react-transition-group';

const TextAnimation = ({ isVisible }) => {
  return (
    <CSSTransition
      in={isVisible}
      timeout={1000}
      classNames="fade"
      unmountOnExit
    >
      <h1 className="text-4xl font-bold text-center mt-10 text-blue-800 text-[30px] ">Unlocking More Job Opportunities!</h1>
    </CSSTransition>
  );
};

export default TextAnimation;
