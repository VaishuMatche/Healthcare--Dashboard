import { anatomyData } from '../data/healthData';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
    return (
        <div className="health-status-cards">
            {anatomyData.slice(1).map((item, index) => (
                <div key={index} className="health-card">
                    <h3>{item.status}</h3>
                    <p>Date: {item.date}</p>
                    <div className={`status-bar ${item.color}`}></div>
                </div>
            ))}
        </div>
    );
}

export default HealthStatusCards;