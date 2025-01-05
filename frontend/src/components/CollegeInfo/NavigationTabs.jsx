import { NAVIGATION_TABS_HEADERS } from "./Constants";

const NavigationTabs = ({ tabSelected, setTabSelected }) => {

    const handleTabSelection = (item)=>{
        setTabSelected(item);
    }

    return (
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 mb-6">
            <div className="flex gap-8">
                {NAVIGATION_TABS_HEADERS.map((item) => {
                    if (item === tabSelected) {
                       return (<button onClick={()=>handleTabSelection(item)} className="px-4 py-2 border-b-2 border-blue-600 text-blue-600">{item}</button>);
                    }
                    else {
                       return  (<button onClick={()=>handleTabSelection(item)} className="px-4 py-2 text-gray-600">{item}</button>);
                    }
                })}

            </div>
        </div>
    );
};

export default NavigationTabs;
