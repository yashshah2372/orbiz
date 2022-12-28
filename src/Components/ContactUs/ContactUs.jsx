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
            <div className="mt-40 mb-8 px-8">
                <Tabs tabCategories={["Enquire Here", "Vendor", "Job Openings"]} handleTabChange={handleTabChange} />
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
