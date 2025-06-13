import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [events, setEvents] = useState({});
  const [eventInput, setEventInput] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const formattedDate = date.toDateString();

  const handleAddEvent = () => {
    if (eventInput.trim() === "") return;
    const updated = { ...events };
    if (!updated[formattedDate]) updated[formattedDate] = [];
    updated[formattedDate].push(eventInput.trim());
    setEvents(updated);
    setEventInput("");
    setSuccessMsg("✅ Event added!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">📅 Calendar</h1>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Calendar Section */}
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            view={view}
            onViewChange={({ activeStartDate, view }) => setView(view)}
            className="dark-calendar"
          />
          <div className="mt-2">
            <select
              value={view}
              onChange={(e) => setView(e.target.value)}
              className="rounded px-2 py-1 text-black"
            >
              <option value="month">Month View</option>
              <option value="week">Week View</option>
            </select>
          </div>
        </div>

        {/* Events Section - RIGHT SIDE */}
        <div className="flex-1 bg-[#111827] p-5 rounded-lg shadow-lg min-w-[300px] max-w-md">
          <h2 className="text-xl font-semibold mb-3">
            Events on {formattedDate}
          </h2>

          {events[formattedDate]?.length ? (
            <ul className="list-disc list-inside mb-4">
              {events[formattedDate].map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          ) : (
            <p className="italic text-gray-400 mb-4">No events for this date.</p>
          )}

          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={eventInput}
              onChange={(e) => setEventInput(e.target.value)}
              placeholder="Enter event"
              className="p-2 rounded text-black flex-1"
            />
            <button
              onClick={handleAddEvent}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              + Add Event
            </button>
          </div>

          {successMsg && (
            <p className="text-green-400 mt-2 font-medium">{successMsg}</p>
          )}
        </div>
      </div>

      {/* Calendar Style */}
      <style>{`
        .dark-calendar {
          background-color: #1e1e2f;
          color: #fff;
          border-radius: 10px;
          padding: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }
        .dark-calendar button {
          background: none;
          color: #fff;
          border: none;
        }
        .dark-calendar button:enabled:hover {
          background-color: #333;
        }
        .dark-calendar .react-calendar__tile--now {
          background: #4b5563;
          color: #fff;
          border-radius: 6px;
        }
        .dark-calendar .react-calendar__tile--active {
          background: #2563eb;
          color: white;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default CalendarPage;
