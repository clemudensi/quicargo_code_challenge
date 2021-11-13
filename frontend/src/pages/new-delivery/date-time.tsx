import { VFC } from 'react';
import { RangeSlider } from '../../components';
import { onChange } from './index'

const DeliveryDateTime: VFC<onChange> = ({ onChangeFunc }) => {
    return (
        <div className="flex-auto px-4 py-10 pt-0">
            <form className="w-full">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/6">
                        <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Pick Up Date
                        </label>
                    </div>
                    <div className="md:w-2/6 mr-6">
                        <input
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date" name="pick-up-date" onChange={(e) => onChangeFunc(e)}
                            data-test="pick-up-date"
                        />
                    </div>
                    <div className="md:w-2/6 pr-4">
                        <RangeSlider />
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/6">
                        <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Delivery Date
                        </label>
                    </div>
                    <div className="md:w-2/6 mr-6">
                        <input
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="date" name="delivery-date"
                            onChange={(e) => onChangeFunc(e)}
                            data-test="delivery-date"
                        />
                    </div>
                    <div className="md:w-2/6 pr-4">
                        <RangeSlider />
                    </div>
                </div>
            </form>
        </div>
    )
};

export { DeliveryDateTime };