import { Outlet } from "react-router"

export const UserManagementLayout = () => {

    return <div>
        <nav style={{float: 'left', width: '300px'}}>
            <ul>
                <li>List Users</li>
                <li>Edit Users</li>
                <li>Delete Users</li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
}