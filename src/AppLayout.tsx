import { Link, Outlet } from "react-router-dom"

export const AppLayout = () => {
    return <main>
        <nav>
            <Link to="/">🏠 Home Page</Link> • <Link to="/application">💻 Applications</Link>
        </nav>
        <hr/>
        <div style={{minHeight: '400px'}}>
            <Outlet />
        </div>
        <hr/>
        <footer>
            hello project &copy; 2023
        </footer>
    </main>
}