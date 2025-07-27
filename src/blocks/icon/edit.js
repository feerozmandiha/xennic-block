// edit.js

import Panel from './panel';
import Preview from './preview';
import Modal from './modal';
import { useState } from 'react';

import IconModal from './components/IconModal';


const Edit = (props) => {
    const { attributes, setAttributes } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(attributes.icon || '');


    return (
        <div {...useBlockProps()}>
            <Panel attributes={attributes} setAttributes={setAttributes} />
            <Preview attributes={attributes} />
            {isModalOpen && <Modal setAttributes={setAttributes} close={() => setIsModalOpen(false)} />}
        
        
        {isModalOpen && (
  <IconModal
    icons={iconList}
    selectedIcon={selectedIcon}
    onSelect={setSelectedIcon}
    onConfirm={(iconName) => {
      setAttributes({ icon: iconName });
      setIsModalOpen(false);
    }}
    onClose={() => setIsModalOpen(false)}
  />
)}

        <Button
  isSecondary
  onClick={() => setIsModalOpen(true)}
>
  انتخاب آیکون
</Button>
{selectedIcon && (
  <div className="xennic-icon-display">
    <i className={selectedIcon}></i>
  </div>
)}

        </div>
    );
};