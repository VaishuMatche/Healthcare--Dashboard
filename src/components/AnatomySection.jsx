import { anatomyData } from '../data/healthData';
import '../styles/AnatomySection.css';

function AnatomySection() {
    return (
        <div className="anatomy-section">
            <div className="anatomy-image">🧍</div>
            <div className="health-indicators">
                {anatomyData.map((item, index) => (
                    <div key={index} className={`indicator ${item.part.toLowerCase()}`}>
                        <span className={`status-dot ${item.color}`}></span>
                        <span>{item.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnatomySection;