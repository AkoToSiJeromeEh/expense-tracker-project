

import tabsData from '../data/tabsData';
import { useState } from 'react';
import Addexpense from '../components/Addexpense';
import Addreminder from '../components/Addreminder';
const AddContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabs = (index) => {
    setActiveTab(index);
  }

  return (
    <main className="min-h-screen flex p-5 items-center flex-col gap-10 text-white">
      <div className="flex flex-row gap-8">
      {tabsData.map((tab, index) => (
          <button
          key={tab.id}
          name={tab.name}
          onClick={() => handleTabs(index)}
          className={
            activeTab === index
              ? 'active text-white p-5 rounded-full text-2xl w-56 button-tab bg-black'
              : 'text-white p-5 rounded-full text-2xl w-56 button-tab bg-black'
          }
        >
          {tab.title}
        </button>
      ))}
  
      </div>
      {activeTab === 0 ? (
        <div id="content-1" className="w-full tab-content">
            <Addexpense/>
        </div>
      ) : activeTab === 1 ? (
        <div id="content-2" className="w-full tab-content">
         <Addreminder/>
        </div>
      ) : (
        ''
      )}
    </main>
  );
};

export default AddContent;
