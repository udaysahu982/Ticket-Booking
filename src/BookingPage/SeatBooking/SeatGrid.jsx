import React from 'react'

const SeatGrid = ({bookedSeats, selectedSeats, setSelectedSeats}) => {

    let rows = ["A", "B", "C", "D", "E"];
    let cols = [1, 2, 3, 4, 5, 6];

  return (
    <div className="space-y-4 overflow-x-auto">
          {rows.map((row) => (
            
            <div key={row} className="flex items-center justify-center gap-3">
              
              {/* Row Label */}
              <span className="w-6 text-sm font-semibold text-gray-500">
                {row}
              </span>

              {/* Seats */}
              {cols.map((col) => {

                let seatId=row+col;

                let isBooked=bookedSeats.includes(seatId);
                let isSelected=selectedSeats.includes(seatId);
                    
                return (
              <div
                key={col}
                onClick={()=>
                    {
                    if(isBooked) return;
                    setSelectedSeats((prev)=>
                        prev.includes(seatId) ?
                     prev.filter((s)=>s!==seatId)
                     : [...prev,seatId]
                    )

                }

                }
                className={`
                  w-8 h-8 md:w-9 md:h-9 rounded-md flex items-center justify-center
                  text-xs font-semibold cursor-pointer transition
                  ${
                    isBooked
                      ? "bg-gray-300 cursor-not-allowed"
                      : isSelected
                      ? "bg-green-500 text-white"
                      : "bg-green-100 border border-green-500 hover:bg-green-500 hover:text-white"
                  }
                `}
              >
                {col}
              </div>
            );
                })}
            </div>
          ))}
        </div>
  )
}

export default SeatGrid
