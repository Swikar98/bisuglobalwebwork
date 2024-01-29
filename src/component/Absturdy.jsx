import { useState } from "react";
import Tabs from "./Tabs"; // assuming the Tabs component is in the same directory

const YourComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <h1>Your Content</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Add content for each tab based on the activeTab state */}
      {activeTab === 1 && <div>Tab 1 Content</div>}
      {activeTab === 2 && <div>Tab 2 Content</div>}
      {activeTab === 3 && <div>Tab 3 Content</div>}
    </div>
  );
};

export default YourComponent;

