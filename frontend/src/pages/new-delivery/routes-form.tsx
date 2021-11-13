import { VFC } from 'react';
import { ROUTE_PICK_UP } from '../../consts';
import { DropdownSelect } from '../../components/dropdown/dropdown-select';
import { onChange } from './index'

const RouteForm: VFC<onChange> = ({ onChangeFunc }) => {
    return (
        <div className="flex-auto px-4 py-10 pt-0" data-test="routes-form">
            <form className="w-full">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/6">
                        <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Pick Up
                        </label>
                    </div>
                    <div className="md:w-2/6 pr-4">
                        <DropdownSelect name="pick-up-city" options={ROUTE_PICK_UP} onClickSelect={onChangeFunc} />
                    </div>
                    <div className="md:w-3/6">
                        <input
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" name="pick-up-add" onChange={(e) => {onChangeFunc(e)}}
                            data-test="pick-up-add"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/6">
                        <label className="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Delivery
                        </label>
                    </div>
                    <div className="md:w-2/6 pr-4">
                    <DropdownSelect name="delivery-city" options={ROUTE_PICK_UP} onClickSelect={onChangeFunc} />
                    </div>
                    <div className="md:w-3/6">
                        <input
                            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" name="delivery-add"
                            onChange={(e) => {onChangeFunc(e)}}
                            data-test="delivery-add"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
};

export { RouteForm };