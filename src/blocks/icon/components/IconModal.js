// src/blocks/icon/components/IconModal.js
import React, { useState } from 'react';
import './icon-modal.css';

 import SearchBar from './searchBar';
import IconGrid from './IconGrid';
import SearchBar from './searchBar';

const IconModal = ({ icons, selectedIcon, onSelect, onConfirm, onClose }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredIcons = icons.filter(icon =>
    icon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="xennic-icon-modal-overlay">
      <div className="xennic-icon-modal">
        <button className="modal-close" onClick={onClose}>×</button>

        <h2 className="modal-title">انتخاب آیکون</h2>

        <SearchBar searchValue={searchValue} onSearch={setSearchValue} />

        <IconGrid
          icons={filteredIcons}
          selectedIcon={selectedIcon}
          onSelect={onSelect}
        />

        {selectedIcon && (
          <div className="selected-preview">
            <span>آیکون انتخاب‌شده:</span>
            <span className="preview-icon">
              <i className={selectedIcon}></i>
            </span>
          </div>
        )}

        <button
          className="confirm-button"
          onClick={() => onConfirm(selectedIcon)}
          disabled={!selectedIcon}
        >
          تایید انتخاب
        </button>
      </div>
    </div>
  );
};

export default IconModal;
