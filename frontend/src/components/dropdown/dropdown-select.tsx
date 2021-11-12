import { VFC } from 'react';

type SelectMenu = {
    name: string;
    options: {
        name: string,
        value: string
    }[];
    onClickSelect?: (arg0: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownSelect: VFC<SelectMenu> = ({ name, options, onClickSelect }) => {
    return (
        <select
            className="form-select block w-full"
            name={name}
            id={name}
            onChange={(e) => onClickSelect && onClickSelect(e)}
            data-test={`drop-down-select-${name}`}
        >
            <option value=''>{name}</option>
            {
                options.map((item) => (
                    <option
                        value={item.value}
                        key={item.name}
                        data-test="select-option"
                    >
                        {item.name}
                    </option>
                ))
            }
        </select>
    )
};

export { DropdownSelect };