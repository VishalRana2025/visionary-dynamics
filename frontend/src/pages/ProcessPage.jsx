import { useLocation } from "react-router-dom";

const ProcessPage = () => {
  const { state } = useLocation();

  // fallback if user directly opens URL
  const current = state || {
    title: "Process",
    color: "#2563eb",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-10">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg text-center">
        
        <h1 className="text-3xl font-bold mb-6">
          {current.title}
        </h1>

        <button
          className="w-full py-3 rounded-xl font-semibold text-white transition hover:shadow-2xl hover:scale-[1.02]"
          style={{ backgroundColor: current.color }}
        >
          Start This Process
        </button>

      </div>
    </div>
  );
};

export default ProcessPage;