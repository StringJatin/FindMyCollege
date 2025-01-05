import React from 'react';
import SearchCollege from '../components/SearchCollege';
import HeaderImage from '../components/CollegeInfo/HeaderImage';
import NavigationTabs from '../components/CollegeInfo/NavigationTabs';
import Overview from '../components/CollegeInfo/Overview';
import Sidebar from '../components/CollegeInfo/SideBar';
import { useState } from 'react';
import { GetTabComponent } from '../components/CollegeInfo/Utils';



const CollegeInfo = () => {
    const [tabSelected,setTabSelected] = useState('Overview');
    return (
        <div className="min-h-screen bg-white">
            {/* Search Section */}
           <SearchCollege/>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* College Header Image */}
                <HeaderImage />

                {/* Navigation Tabs */}
                <NavigationTabs tabSelected={tabSelected} setTabSelected={setTabSelected} />

               

                {/* Main Layout */}
                <div className="grid grid-cols-3 gap-8">
                   
                    <div className="col-span-2">
                    <GetTabComponent tabSelected={tabSelected} />
                    </div>

                    {/* Right (Sidebar Section) */}
                    <div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeInfo;
