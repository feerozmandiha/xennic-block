// src/blocks/icon/components/Tabs.js

import React from "react";

const Tabs = ({ categories, activeCategory, onChange }) => {
    return(
        <div className="xennic-tabs-wrapper">
            <div className="xennic-tabs">
                {categories.map((cat) => (
                    <button
                    key={cat.slug}
                className={`xennic-tab ${cat.slug === activeCategory ? 'active' : ''}`}
            onClick={() => onChange(cat.slug)}
        >
            {/* {cat.icon && <span className={`tab-icon ${cat.icon}`}></span>} */}
            {cat.label}
        </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;