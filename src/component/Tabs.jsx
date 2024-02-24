import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-row"  item-center>
      <div
        onClick={() => handleTabClick(1)}
        className={`py-2 px-4 cursor-pointer ${activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Tab 1
      </div>
      <div
        onClick={() => handleTabClick(2)}
        className={`py-2 px-4 cursor-pointer ${activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Tab 2
      </div>
      <div
        onClick={() => handleTabClick(3)}
        className={`py-2 px-4 cursor-pointer ${activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Tab 3
      </div>
    </div>
  );
};

export default Tabs;
