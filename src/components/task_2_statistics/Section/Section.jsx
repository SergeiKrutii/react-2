import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children, title, sizeStyle }) => {
  if (sizeStyle) {
    return (
      <section className={s.sectionBig}>
        {title && <h2 className={s.title}>{title}</h2>}
        {children}
      </section>
    );
  }
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
