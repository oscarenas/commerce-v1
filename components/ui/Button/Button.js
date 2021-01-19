import React, { forwardRef, useRef } from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import s from './Button.module.css';
import LoadingDots from '../LoadingDots';
import PropTypes from 'prop-types';

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
          <LoadingDots />
        </i>
      )}
    </Component>
  );
});

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['flat', 'slim']),
  active: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  Component: PropTypes.string,
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default Button;
