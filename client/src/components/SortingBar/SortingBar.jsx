import './SortingBar.scss';
import React from 'react';
import sortIcon from '../../Assets/Icons/sort-24px.svg';

function SortingBar({ labels }) {
  return (
    <section className="sorting-bar">
      {labels?.map((label) => (
        <article className="sorting-bar__item sorting-bar__item--big-width">
          <h4 className="sorting-bar__label">{label}</h4>
          <img src={sortIcon} alt="sortIcon" />
        </article>
      ))}
      <article className="sorting-bar__item sorting-bar__item--small-width">
        <h4 className="sorting-bar__label">ACTIONS</h4>
      </article>
    </section>
  );
}

export default SortingBar;
