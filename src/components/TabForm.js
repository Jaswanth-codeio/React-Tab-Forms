import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [data, setData] = useState({
    name: "jaswanth",
    age: 21,
    email: "jaswanthdadi1347@gmail.com",
    interests: ["coding", "JavaScript"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveComponent = tabs[activeTab].component;
  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleNextClick = () => {
    setActiveTab((prev) => prev + 1);
  };
  const handleSubmitClick = () => {
    console.log("submitted Successfully");
  };

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-body">
        <ActiveComponent data={data} setData={setData} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};
export default TabForm;
