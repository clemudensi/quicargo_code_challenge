import { VFC } from 'react';

type avatar = {
    userAvatar: string;
};

const Avatar: VFC<avatar> = ({ userAvatar }) => {
    return (
        <div className="items-center flex">
            <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                <img
                    alt="avatar"
                    className="w-full rounded-full align-middle border-none shadow-lg"
                    src={userAvatar}
                />
            </span>
        </div>
    );
};

export { Avatar };
