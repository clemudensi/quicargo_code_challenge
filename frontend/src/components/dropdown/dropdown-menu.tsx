import { createRef, useState, FC } from 'react';
import { createPopper } from '@popperjs/core';

type DropdownItem = {
    container?: JSX.Element;
    list: JSX.Element;
};
const Dropdown: FC<DropdownItem> = ({ container, list }) => {
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
                {container}
            </a>
            <div
                ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? 'block ' : 'hidden ') +
                    'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
                }
            >
                {list}
            </div>
        </>
    );
};

export { Dropdown };
