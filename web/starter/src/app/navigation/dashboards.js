import { HomeIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import DashboardsIcon from 'assets/dualicons/dashboards.svg?react'
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'

const ROOT_DASHBOARDS = '/dashboards'

const path = (root, item) => `${root}${item}`;

export const dashboards = {
    id: 'dashboards',
    type: NAV_TYPE_ROOT,
    path: '/dashboards',
    title: 'Dashboards',
    transKey: 'nav.dashboards.dashboards',
    Icon: DashboardsIcon,
    childs: [
        {
            id: 'dashboards.home',
            path: path(ROOT_DASHBOARDS, '/home'),
            type: NAV_TYPE_ITEM,
            title: 'Home',
            transKey: 'nav.dashboards.home',
            Icon: HomeIcon,
        },
        {
            id: 'dashboards.adoptions', // Unique identifier
            path: 'dashboards/adoptions', // Route path
            type: NAV_TYPE_ITEM, // Item type (NAV_TYPE_ITEM, NAV_TYPE_ROOT, or NAV_TYPE_COLLAPSE)
            title: 'Adoptions', // Title
            transKey: 'Adoptions', // Translation key (optional)
            Icon: ListBulletIcon, // Icon component (optional)
        }

    ]
}
