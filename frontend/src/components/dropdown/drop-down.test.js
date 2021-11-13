import { render, fireEvent } from '@testing-library/react';
import { DropdownSelect } from '.';
import { ROUTE_PICK_UP } from '../../consts';

const renderComponent = () =>
    render(
        <DropdownSelect
            name="city"
            options={ROUTE_PICK_UP}
        />
    );


describe('<DropdownSelect/>', () => {
    it('renders without crashing', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('drop-down-select-city')).toBeInTheDocument();
    });

    describe('Select option', () => {
        it('it renders select option items', () => {
            const { getByTestId, getAllByTestId } = renderComponent();
            fireEvent.change(getByTestId('drop-down-select-city'), { target: { value: 'coevorden, nl' } });

            let options = getAllByTestId('select-option')
            expect(options[0].selected).toBeFalsy();
            expect(options[1].selected).toBeTruthy();
            expect(options[2].selected).toBeFalsy();
        });
    });
});