import React from 'react';

const ButtonElem = props => {
  const { className, onClick, children } = props;

  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default ButtonElem;