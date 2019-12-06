import { useLayoutEffect } from 'react';

const UseLockBoodyScroll = () => {
  useLayoutEffect(() => {
    const bodyOriginStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = bodyOriginStyle;
  }, []);
};

export default UseLockBoodyScroll;
