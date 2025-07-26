//فایل: src/blocks/test-block/index.js

import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

/**
 * ثبت بلوک تست
 * بلوک ابتدایی برای بررسی اتصال React و وردپرس
 */

registerBlockType('xennic/test-block', {
    title: 'بلوک تست زنیک',
    icon: 'smiley',
    category: 'xennic-block',
    edit: ({ attributes, setAttributes }) => {
        return (
            <RichText
            tagName="p"
            value={attributes.content}
            onChange={(value) => setAttributes({content: value })}
            placeholder="متن خود را وارد کنید..."
            />
        );
    },
    save: ({ attributes }) => {
        return <RichText.Content tagName='p' value={attributes.content} />;
    },

    attributes: {
        content: { type: 'string' }
    }
});