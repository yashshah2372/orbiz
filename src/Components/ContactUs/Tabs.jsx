import { Tab } from "@headlessui/react";

const Tabs = ({ tabCategories, handleTabChange }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div className="flex w-full sm:px-0 shadow">
            <Tab.Group
                onChange={index => handleTabChange(index)}
            >
                <Tab.List className="flex space-x-1">
                    {tabCategories.map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    "w-28 py-3 font-semibold leading-5 tracking-wider focus:outline-none text-base",
                                    selected
                                        ? "bg-white text-indigo-600 border-b-2 border-indigo-600"
                                        : "text-gray-900 hover:bg-white/[0.12]"
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    );
};

export default Tabs;