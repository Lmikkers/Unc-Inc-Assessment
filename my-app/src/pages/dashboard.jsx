// src/pages/Dashboard.jsx
import logo from '../uncincLogo.svg';
import Navbar from '../components/navbar';

export function Dashboard() {
    return (
        <section>
            <img src={logo} alt="logo unc inc" />
            <h1>Dashboard</h1>

            <Navbar/>
        </section>
    )
}

export default Dashboard;