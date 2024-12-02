import React from "react";

const Dashboard: React.FC = () => {
  // Handle click method for opportunities
  const handleClick = (data: { type: string; id: number }) => {
    console.log("Clicked Item:", data);
  };

  return (
    <main className="flex-1 bg-white pr-16 pl-6 overflow-y-auto">
      {/* Reminder Section */}
      <div className="bg-gray-200 py-4 px-6 rounded-md text-gray-700 flex items-center justify-between">
        <span>
          Reminder: Here any reminder goes to Sales/Supervisor or App Engg
          (e.g., Check this new project)
        </span>
        <button className="bg-custom-black text-white py-1 px-3 rounded-md">
          CTA
        </button>
      </div>

      {/* Opportunities Section */}
      <div className="grid grid-cols-5 gap-4 mt-6">
        {[
          { title: "Create New Opportunity", data: { type: "new", id: 1 } },
          { title: "Generated Opp.", data: { type: "generated", id: 2 } },
          { title: "All Quotes/Projects", data: { type: "quotes", id: 3 } },
          { title: "Success/Approved", data: { type: "success", id: 4 } },
          {
            title: "Rejected/Not Converted",
            data: { type: "rejected", id: 5 },
          },
        ].map((item, index) => (
          <div
            key={index}
            className="cursor-pointer bg-custom-black h-36 flex items-center justify-center text-center rounded-3xl text-gray-100 hover:bg-gray-800"
            onClick={() => handleClick(item.data)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Main Graphs Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Left Box */}
        <div className="bg-gray-300 h-96  py-24 rounded-2xl flex items-center justify-center text-center text-gray-700 -mb-5">
          View all Supervisors/Teams/Clients statuses
        </div>

        {/* Graph Box */}
        <div className="bg-custom-gray h-5/6 rounded-2xl flex items-center justify-center text-center text-gray-700">
          Graph view of All Opportunities, Success, Rejections, WIP, Targets,
          etc.
        </div>

        {/* Footer Widgets */}
        <div className="col-start-2 grid grid-cols-4 gap-4 -mt-9">
          {["Calendar", "Favorite", "Widget 3", "Widget 4"].map(
            (widget, index) => (
              <div
                key={index}
                className="bg-gray-300 py-8 h-36 rounded-xl text-center cursor-pointer hover:bg-gray-400"
              >
                {widget}
              </div>
            )
          )}
        </div>
      </div>

      {/* <div className="bg-yellow-300 py-4 rounded-md text-center cursor-pointer hover:bg-yellow-400">
          Chatbot
      </div> */}
    </main>
  );
};

export default Dashboard;
