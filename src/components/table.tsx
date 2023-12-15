export default function TableComponent() {
    return(
        <table className="w-full border-collapse">
        <thead>
        <tr>
            <th>교시</th>
            <th key="월">월</th>
            <th key="화">화</th>
            <th key="수">수</th>
            <th key="목">목</th>
            <th key="금">금</th>
        </tr>
        </thead>
        <tbody>
            {/*
        {[...Array(maxTimeslots)].map((_, timeslotIndex) => (
            <tr key={timeslotIndex}>
            <td>{timeslotIndex + 1}</td>
            {days.map(day => (
                <td key={`${day}-${timeslotIndex}`}>
                {scheduleData[day][timeslotIndex] && (
                    <div>
                    {scheduleData[day][timeslotIndex].subject}
                    <br />
                    {scheduleData[day][timeslotIndex].teacher}
                    </div>
                )}
                </td>
            ))}
            </tr>
        ))}
        */}
        </tbody>
    </table>
    )
}