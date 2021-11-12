import { VFC } from 'react';
import { NavBar } from '../../types';
import { Dropdown } from '../dropdown';
import { USER_DROP_DOWN } from '../../consts';
import userAvatar from '../../assets/img/User-avatar.png';
import { Avatar } from '../avatar/avatar';
import { UserDropDown } from '../dropdown';

const Navbar: VFC<NavBar> = ({
	title,
	bgColor,
}) => {
	return (
		<>
			{/* Navbar */}
			<nav className={`w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 ${bgColor}`}>
				<div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
					{/* Brand */}
					<a
						className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
						href="/"
						onClick={(e) => e.preventDefault()}
					>
						{title}
					</a>

					<ul className="flex-col md:flex-row list-none items-center hidden md:flex">
						<Dropdown
							container={<Avatar userAvatar={userAvatar} />}
							list={<UserDropDown dropdownItems={USER_DROP_DOWN} />}
						>
						</Dropdown>
					</ul>
				</div>
			</nav>
			{/* End Navbar */}
		</>
	);
}

export { Navbar };