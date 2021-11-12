import { useState, VFC } from 'react';
import { ROUTE_PICK_UP } from '../../consts';
import { FREIGHT_OPTIONS } from '../../consts/delivery';
import { DropdownSelect } from '../../components/dropdown/dropdown-select';
import { onChange } from './index'

const FreightDetails: VFC<onChange> = ({ onChangeFunc }) => {
    const [buttonActive, setButtonActive] = useState<string>('');

    return (
        <>
            <div className="flex-auto px-4 py-10 pt-0">
                <form className="w-full">
                    {/* Type of goods starts */}
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block mb-2"
                                    htmlFor="type-of-goods"
                                >
                                    Type of Goods
                                </label>
                                {
                                    FREIGHT_OPTIONS.map((option) => (
                                        <button
                                            key={option}
                                            className={
                                                `${buttonActive === option ?
                                                    'bg-indigo-900 text-white ' : 'bg-transparent'
                                                } border-l border-t border-b border-2 hover:bg-indigo-900
                                                hover:text-white text-base px-8 py-3`
                                            }
                                            type="button"
                                            onClick={() => setButtonActive(option)}
                                        >
                                            {option}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* Type of goods ends */}

                    {/* Volume starts */}
                    <div className="ml-4">
                        <label className="block mb-4" htmlFor="volume">
                            Volume
                        </label>
                        <div className="md:flex md:items-center mb-10">
                            <div className="md:w-2/9 mr-4">
                                <DropdownSelect name="transport-type" options={ROUTE_PICK_UP} onClickSelect={onChangeFunc} />
                            </div>
                            <div className="md:w-1/9 mr-4">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200
                                    w-12 py-2 px-4 text-gray-700 leading-tight focus:outline-none
                                    focus:bg-white focus:border-purple-500 mt-4"
                                    type="text"
                                    name="amount"
                                    onChange={(e) => onChangeFunc(e)}
                                />
                                <p className="text-xs italic">Amount</p>
                            </div>
                            <div className="md:w-2/9 mr-4">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200
                                    w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
                                    focus:bg-white focus:border-purple-500 mt-4"
                                    type="text"
                                    name="length"
                                    onChange={(e) => onChangeFunc(e)}
                                />
                                <p className="text-xs italic">Length (cm)</p>
                            </div>
                            <div className="md:w-2/9 mr-4">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200
                                    w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
                                    focus:bg-white focus:border-purple-500 mt-4"
                                    type="text"
                                    name="width"
                                    onChange={(e) => onChangeFunc(e)}
                                />
                                <p className="text-xs italic">Width (cm)</p>
                            </div>
                            <div className="md:w-2/9 mr-4">
                                <input
                                    className="
                                    bg-gray-200 appearance-none border-2 border-gray-200
                                    rounded w-full py-2 px-4 text-gray-700 leading-tight
                                    focus:outline-none focus:bg-white focus:border-purple-500 mt-4"
                                    type="text"
                                    name="height"
                                    onChange={(e) => onChangeFunc(e)}
                                />
                                <p className="text-xs italic">Height (cm)</p>
                            </div>
                        </div>
                    </div>
                    {/* Volume ends */}

                    {/* Weight starts */}
                    <div className="md:flex md:items-center mb-10">
                        <div className="md:w-1/6 ml-4">
                            <label className="block mb-1 md:mb-0 pr-4" htmlFor="weight">
                                Weight
                            </label>
                        </div>
                        <div className="md:w-2/6">
                            <input
                                className="bg-gray-200 border-2 w-full py-2 px-4 text-gray-700
                                leading-tight focus:outline-none focus:bg-white focus:border-indigo-900"
                                type="text"
                                name="weight"
                                placeholder="weight"
                                onChange={(e) => onChangeFunc(e)}
                        />
                        </div>
                    </div>
                    {/* Weight ends */}
                </form>
            </div>
        </>
    )
};

export { FreightDetails };