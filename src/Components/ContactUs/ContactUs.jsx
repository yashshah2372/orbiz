import { useState } from "react";
import Career from "./Career";
import Enquire from "./Enquire";
import Tabs from "./Tabs";
import Vendor from "./Vendor";

function ContactUs() {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = selectedTab => setActiveTab(selectedTab);

    return (
        <>
            <div className="mt-6 lg:mt-40 mb-8 lg:px-8">
                <Tabs tabCategories={["Flat Enquiry", "Vendor", "Job Openings"]} handleTabChange={handleTabChange} />
                {
                    activeTab === 0 && <Enquire />
                }
                {
                    activeTab === 1 && <Vendor />
                }
                {
                    activeTab === 2 && <Career />
                }
            </div>
        </>
    );
}

export default ContactUs;
