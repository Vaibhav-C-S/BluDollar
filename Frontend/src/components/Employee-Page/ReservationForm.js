import React from "react";

const ReservationForm = ({
    floor,
    setFloor,
    date,
    setDate,
    time,
    setTime,
    duration,
    setDuration,
}) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Reservation Form</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label className="block mb-1 font-medium">Floor</label>
                    <select
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                    >
                        <option>Ground Floor</option>
                        <option>First Floor</option>
                        <option>Second Floor</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Time</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Duration</label>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md"
                    >
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ReservationForm;