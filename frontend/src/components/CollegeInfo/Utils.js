import Academics from "./Academics";
import Admissions from "./Admissions";
import CampusLife from "./CampusLife";
import Cost from "./Cost";
import Overview from "./Overview";

export function GetTabComponent({tabSelected}){
    switch(tabSelected){
        case 'Overview' : 
        return <Overview/>
        case 'Admissions' : 
        return <Admissions/>
        case 'Academics' : 
        return <Academics/>
        case 'Cost' : 
        return <Cost/>
        case 'Campus Life' : 
        return <CampusLife/>
        default : 
        return <Overview/>
    }
}