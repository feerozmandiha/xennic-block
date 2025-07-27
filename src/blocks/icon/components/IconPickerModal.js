import { useState } from "react"
import { iconSets } from "../data/iconSets";

const IconPickerModal = ({ onclose, setAttributes, currentIcon }) => {
    const [query, setQuery] = useState('');
    const [icons, setIcons] = useState(defaultIcons);  //dashicons + svg list 
    const [selected , setSelected] = useState(currentIcon);

    const filteredIcons = icons.filter(icon =>
        icon.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (icon) => {
        setSelected(icon.name);
        setAttributes({ icon: icon.name });
        onclose(); //بستن پاپ آپ بعد از انتخاب
    };

    return (
        <div className="xennic-modal-overlay">
            <div className="xennic-modal">
                <input
                type="search"
                placeholder="جستجوی آیکون ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />

                <div className="xennic-icon-grid">
                    {filteredIcons.map((icon) => (
                        <div
                        key={icon.name}
                    className={`icon-item ${selected === icon.name ? 'active' : ''}`}
                        onClick={() => handleSelect(icon)}
                        >
                        <span className={`dashicons dashicons-${icon.name}`}></span>
                        </div>
                    ))}
                    </div>
                    </div>
                    </div>
                );
                };