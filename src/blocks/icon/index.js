// blocks/icon/index.js

import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import './styles/editor.scss';

registerBlockType('xennic/icon-block', {
    title: 'آیکونهای قابل تنظیم',
    icon: 'smiley',
    category: 'xennic-block',
    attributes: { /*تعریف attributes  اولیه */ },
    edit,
    save
});