import { useState, VFC } from 'react';
import { CardContainer } from '../../components/card-container';
import { MapDirection } from '../../components/map';
import { DeliveryDateTime } from './date-time';
import { FreightDetails } from './freight-details';
import { RouteForm } from './routes-form';
import { getLatLng } from '../../utils';

export type onChange = {
    onChangeFunc: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const NewDelivery: VFC = () => {
    const [shipping, setShipping ] = useState({
        'pick-up-add': '',
        'delivery-add': ''
    });

    const onChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setShipping({
            ...shipping,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="flex flex-wrap" data-test="new-delivery-page">
            <div className="w-full xl:w-6/12 mb-12 pr-2">
                <CardContainer bgColor="bg-white" title="Routes">
                    <RouteForm onChangeFunc={onChange} />
                </CardContainer>
                <CardContainer bgColor="bg-white" title="Freight-container">
                    <FreightDetails onChangeFunc={onChange} />
                </CardContainer>
                <CardContainer  bgColor="bg-white" title="Date & Time">
                    <DeliveryDateTime onChangeFunc={onChange} />
                </CardContainer>
            </div>
            <div className="w-full xl:w-6/12 px-4 my-4">
                <MapDirection
                    origin={getLatLng(shipping['pick-up-add'])}
                    destination={getLatLng(shipping['delivery-add'])}
                />
            </div>
        </div>
    )
};

export { NewDelivery };