import { VFC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { deliveryRouteConfigs } from '../consts';

const DeliveryRoutes: VFC = memo(() => (
    <Routes>
        {
            Object.entries(deliveryRouteConfigs).map(([route, {Element, authRoute}]) =>
                !authRoute
                ? <Route element={<Element/>} path={route} key={route}></Route>
                : null
            )
        }
    </Routes>
));

export { DeliveryRoutes };