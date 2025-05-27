import { activityBars } from '../data/activityData';
import '../styles/ActivityFeed.css';

function ActivityFeed() {
    return (
        <section className="activity-feed">
            <h2>Activity</h2>
            <p>3 appointments on this week</p>
            <div className="activity-chart">
                {activityBars.map((bar, index) => (
                    <div key={index} className="bar-container">
                        <div className="bar" style={{ height: `${bar.height}px` }}></div>
                        <span>{bar.day}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ActivityFeed;