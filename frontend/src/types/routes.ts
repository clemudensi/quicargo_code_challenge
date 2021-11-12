import { VFC } from 'react';

type Route =
    '/' |
    '/new-delivery' |
    '/deliveries' |
    '/history';

interface RouteConfig {
    title?: string;
    Element: VFC;
    authRoute: boolean;
}

export type { Route, RouteConfig };