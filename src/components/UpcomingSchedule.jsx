import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingSchedule } from '../data/upcomingSchedule';
import '../styles/UpcomingSchedule.css';

function UpcomingSchedule() {
    return (
        <section className="upcoming-schedule">
            <h2>The Upcoming Schedule</h2>
            {upcomingSchedule.map((schedule, index) => (
                <div key={index} className="schedule-day">
                    <h3>{schedule.day}</h3>
                    {schedule.appointments.map((appt, idx) => (
                        <SimpleAppointmentCard key={idx} appointment={appt} />
                    ))}
                </div>
            ))}
        </section>
    );
}

export default UpcomingSchedule;