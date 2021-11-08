import { createRef, useState, VFC } from 'react';
import { createPopper } from '@popperjs/core';
import userAvatar from '../../assets/img/User-avatar.png';
import { Avatar } from '../avatar/avatar';

type DropdownItem = {
    dropdownItems: {
        name: string;
        url: string;
    }[];
};

const Dropdown: VFC<DropdownItem> = ({ dropdownItems }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef: React.RefObject<HTMLAnchorElement> = createRef();
    const popoverDropdownRef: React.RefObject<HTMLDivElement> = createRef();
    const openDropdownPopover = () => {
        createPopper(
            btnDropdownRef.current as never,
            popoverDropdownRef.current as never,
            {
                placement: 'bottom-start',
            }
        );
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <>
            <a
                className="text-blueGray-500 block"
                href="#dropdown"
                ref={btnDropdownRef}
                onClick={(e) => {
                    e.preventDefault();
                    dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                }}
            >
                <Avatar userAvatar={userAvatar} />
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? 'block ' : 'hidden ') +
                    'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
                }
            >
                {dropdownItems &&
                    dropdownItems.map((item) => (
                        <a
                            href={item.url}
                            className={
                                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
                            }
                            onClick={(e) => e.preventDefault()}
                        >
                            {item.name}
                        </a>
                    ))}
            </div>
        </>
    );
};

export { Dropdown };
