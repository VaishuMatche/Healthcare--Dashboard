import { navigationLinks } from '../data/navigation';
import '../styles/Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>General</h2>
            <nav>
                <ul>
                    {navigationLinks.map((link, index) => (
                        <li key={index} className={link.name === "Dashboard" ? "active" : ""}>
                            <span className="nav-icon">{link.icon}</span>
                            {link.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;