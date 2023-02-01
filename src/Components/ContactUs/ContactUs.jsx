import { useState } from "react";
import Career from "./Career";
import Enquire from "./Enquire";
import Tabs from "./Tabs";
import Vendor from "./Vendor";

function ContactUs() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (selectedTab) => setActiveTab(selectedTab);
    const [toast, setToast] = useState("Hii");

    return (
        <>
            <div className="mt-6 lg:mt-40 mb-8 lg:px-8">
                {/* <p className="text-center">{toast}</p> */}
                <Tabs tabCategories={["Flat Enquiry", "Vendor", "Job Openings"]} handleTabChange={handleTabChange} />
                {activeTab === 0 && <Enquire setToast={(e) => setToast(e)} />}
                {activeTab === 1 && <Vendor setToast={setToast} />}
                {activeTab === 2 && <Career setToast={setToast} />}
            </div>
        </>
    );
}

export default ContactUs;
