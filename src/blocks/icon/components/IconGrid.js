// src/blocks/icon/components/IconGrid.js
import React from 'react';
import './icon-grid.css';

const IconGrid = ({ icons, selectedIcon, onSelect }) => {
  return (
    <div className="xennic-icon-grid">
      {icons.map((icon) => (
        <div
          key={icon.name}
          className={`icon-item ${selectedIcon === icon.name ? 'active' : ''}`}
          onClick={() => onSelect(icon.name)}
          title={icon.label || icon.name}
        >
          {icon.type === 'dashicon' && (
            <span className={`dashicons dashicons-${icon.name}`}></span>
          )}

          {icon.type === 'font' && (
            <i className={icon.name}></i>
          )}

          {icon.type === 'svg' && (
            <span
              className="svg-icon"
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            ></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
