import { useParams } from "react-router"

export const UserInfo = () => {

    const params = useParams();

    console.log('params', params);

    return <div>
        <h1>User Details</h1>
        <hr/>
    </div>
}