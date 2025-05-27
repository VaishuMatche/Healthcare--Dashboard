import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/DashboardMainContent.css';

function DashboardMainContent() {
    return (
        <main className="dashboard-main">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <DashboardOverview />
                <div className="right-section">
                    <CalendarView />
                    <UpcomingSchedule />
                </div>
            </div>
            <ActivityFeed />
        </main>
    );
}

export default DashboardMainContent;