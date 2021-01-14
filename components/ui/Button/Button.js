import React from 'react';
import s from './Button.module.css';

function Button({ text }) {
  return (
    <a href="#" className={s.btn}>
      {text}
    </a>
  );
}

export default Button;
