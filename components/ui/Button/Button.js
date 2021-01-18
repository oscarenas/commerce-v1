import React, { forwardRef, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import s from './Button.module.css';

const Button = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = 'flat',
    children,
    active,
    width,
    text,
    disabled = false,
    Component = 'button',
    style = {},
    loading = false,
    ...rest
  } = props;
  const ref = useRef(null);

  const rootClassName = cn(
    s.btn,
    {
      [s.slim]: variant === 'slim',
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  );

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <p>Cargando...</p>
        </i>
      )}
    </Component>
  );
});

export default Button;
