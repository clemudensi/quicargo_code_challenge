import { FC } from "react";

type Card = {
    bgColor: string;
    title?: string;
}

const CardContainer: FC<Card> = ({ children, bgColor, title }) => {
    return (
        <div
            className={
            `flex flex-col min-w-0 break-words w-full m-4 shadow-lg rounded ${bgColor}`
            }
        >
            <div className="rounded-t mb-0 px-4 py-3 border-2">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full">
                        {
                            title &&
                            <h3
                                className={
                                `font-semibold text-lg ${bgColor} pb-6`
                                }
                            >
                                {title}
                            </h3>
                        }
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
};

export { CardContainer };