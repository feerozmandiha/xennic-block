import { lazy } from "react";

export const iconSets = {
    dashicons: [
        {name: 'admin-site', label: 'Site', type: 'dashicon' },
        {name: 'admin-users', label: 'Users', type: 'dashicon' },
        // سایر dashicons
    ],
    fontawesome: [
        {name: 'fa-star', label: 'Star', type: 'font' },
        {name: 'fa-heart', label: 'Heart', type: 'font' },

    ],
    svg: [
        { name: 'xennic-star', label: 'Star Custom', svg: '<svg>...</svg>' },
        { name: 'xennic-lightning', label: 'Lightning', svg: '<svg>...</svg>' },
    ]
};