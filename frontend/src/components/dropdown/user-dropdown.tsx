import { VFC } from 'react';

type UserDropdownList = {
    dropdownItems: {
        name: string;
        url: string;
    }[];
}

const UserDropDown: VFC<UserDropdownList> = ({ dropdownItems }) => {
    return (
        <>
            {dropdownItems &&
                dropdownItems.map((item) => (
                    <a
                        href={item.url}
                        className={
                            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
                        }
                        onClick={(e) => e.preventDefault()}
                        key={item.name}
                    >
                        {item.name}
                    </a>
                ))
            }
        </>
    )
};

export { UserDropDown };