import '../styles/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ appointment }) {
    return (
        <div className="appointment-card">
            <span className="appointment-icon">{appointment.icon}</span>
            <div>
                <h4>{appointment.title}</h4>
                <p>{appointment.time}</p>
            </div>
        </div>
    );
}

export default SimpleAppointmentCard;