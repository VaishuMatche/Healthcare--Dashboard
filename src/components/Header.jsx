import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">HealthCare.</div>
            <div className="header-right">
                <div className="search-bar">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search" disabled />
                </div>
                <span className="notification-icon">🔔</span>
                <div className="user-profile">
                    <span className="avatar">👤</span>
                    <span className="add-icon">➕</span>
                </div>
            </div>
        </header>
    );
}

export default Header;