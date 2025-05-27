import { calendarAppointments, appointmentDetails } from '../data/calendarData';
import '../styles/CalendarView.css';

function CalendarView() {
    return (
        <section className="calendar-view">
            <h2>This Week</h2>
            <div className="calendar-header">
                <span>October 2021</span>
                <div className="calendar-nav">
                    <span>◄</span>
                    <span>►</span>
                </div>
            </div>
            <div className="calendar-grid">
                {calendarAppointments.map((day, index) => (
                    <div key={index} className="calendar-day">
                        <span>{day.day}</span>
                        {day.times.map((time, idx) => (
                            <div key={idx} className="appointment-time">{time}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="appointment-details">
                {appointmentDetails.map((appt, index) => (
                    <div key={index} className="appointment-card">
                        <h3>{appt.title}</h3>
                        <p>{appt.doctor}</p>
                        <p>{appt.time}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CalendarView;