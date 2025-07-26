<?php

/**
 * راه اندازی بلوک های افزونه
 * @package Xennic Block
 */

class XennicBlock {
    public function __construct()
    {
        //فراخوانی توابع مورد نیاز هنگام اجرا
        add_action('init', [
            $this,
            'register_blocks'
        ]);
        
        // فیلتر اضافه کردن دسته به بلوک های افزونه
        add_filter('block_categories_all', [
            $this,
            'add_block_category'
        ],
        10,
        2
    );
    }

    public function register_blocks(){
        //ثبت اسکریپت React بلوک ها
        wp_register_script(
            'xennic-block-editor',
            plugins_url('../build/index.js',__FILE__),
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
            filemtime(plugin_dir_path(__FILE__).'../build/index.js')
        );

        //ثبت یک بلوک تست اولیه برای بررسی عملکرد
        register_block_type('xennic/test-block', [
            'editor_script'=>'xennic-block-editor',
        ]);
    }

    //تابع ساخت دسته بندی اختصاصی بلوک
    public function add_block_category($categories, $post) {
        return array_merge(
            $categories,
            [
                [
                    'slug'    => 'xennic-block',
                    'title'   => 'Xennic Blocks',
                    'icon'    => 'star-filled',
                ],
            ]
            );
    }
}

//ایجاد نمونه از کلاس
new XennicBlock();