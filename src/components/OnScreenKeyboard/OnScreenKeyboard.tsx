import "./OnScreenKeyboard.css";
import React from 'react';

interface Props {
  variableClass: string;
  content: string;
  children: React.ReactNode;
}

const OnScreenKeyboard:React.FC<Props> = ({variableClass, children, content}) => {
  return (
    <div className="block">
      <div className={`window ${variableClass}`}>
        <span className="content">{content}</span>
      </div>
      <div className="keyboard">
        {children}
      </div>
    </div>
  );
};

export default OnScreenKeyboard;