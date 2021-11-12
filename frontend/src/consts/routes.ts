import { Route, RouteConfig } from '../types/routes';

import {
    Deliveries,
    History,
    NewDelivery
} from '../pages';

const deliveryRouteConfigs: Record<Route, RouteConfig> = {
    '/': {
        title: 'Deliveries',
        Element: NewDelivery,
        authRoute: false,
    },
    '/deliveries': {
        title: 'Deliveries',
        Element: Deliveries,
        authRoute: false,
    },
    '/history': {
        title: 'History',
        Element: History,
        authRoute: false,
    },
    '/new-delivery': {
        title: 'New Delivery',
        Element: NewDelivery,
        authRoute: false,
    }
};

export { deliveryRouteConfigs };