import React from 'react';
import '../Sections.css';
import '../SectionsMedia.css';

export default function FirstSection() {
  return (
    <div className="section-container">
      <div className="section-container__block-1">
        <div className="section-container__block-1_photo-container-3" />
        <div className="section-container__block-1__text-1">
          <p className="section-container__block-1__text-1__header">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="section-container__block-1__text-1__content-1">
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur
          </p>
          <p className="section-container__block-1-text-1__content-2">
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="section-container__block-1_photo-container-4" />
        <div className="section-container__block-1__text-2">
          <p className="section-container__block-1__text-2__header"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className="section-container__block-1__text-2__content-1">
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="section-container__block-1__text-2__content-2">
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>

  );
}
