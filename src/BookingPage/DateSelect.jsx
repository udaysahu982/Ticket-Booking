
import { useState } from "react";

const getNextThreeDays = () => {
  const days = [];
  const options = { weekday: "short" };

  for (let i = 0; i < 3; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    days.push({
      id: i,
      day: date.toLocaleDateString("en-US", options),
      date: date.getDate(),
      fullDate: date,
    });
  }

  return days;
};

const DateSelect = () => {
  const [selected, setSelected] = useState(0);
  const days = getNextThreeDays();

  return (
    <div className="flex gap-3">
      {days.map((item) => (
        <button
          key={item.id}
          onClick={() => setSelected(item.id)}
          className={`md:w-16 py-2 rounded-lg border text-center transition
            ${
              selected === item.id
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-black"
            }`}
        >
          <div className="text-sm font-semibold">
            {item.day}
          </div>
          <div className="text-lg font-bold">
            {item.date}
          </div>
        </button>
      ))}
    </div>
  );
};

export default DateSelect;
