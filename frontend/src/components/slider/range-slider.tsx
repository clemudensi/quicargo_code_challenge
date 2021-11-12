import { VFC } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range) as React.ElementType;

const RangeSlider: VFC = () => {
    return (
        <>
            <Range
                marks={{
                    0: '00:00',
                    1399: '23:59'
                }}
                min={0}
                max={1440}
                defaultValue={[480, 1110]}
                tipFormatter={(value) =>
                    `${Math.floor(value/60) > 9 ? Math.floor(value/60) :
                        `0${Math.floor(value/60)}`} : ${value % 60 > 9 ?
                            value % 60 : `0${value % 60}`}`
                }
                tipProps={{
                    placement: "top",
                    visible: true
                }}
            />
        </>
    )
};

export { RangeSlider };