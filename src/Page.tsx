import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link } from './Link';

export const Page = () => {

    const navigate = useNavigate();

    const handleGoToApplication = () => {

        navigate('/application');
    }
    return <div>
        Hello first page
        <button onClick={handleGoToApplication}>Click me to apply to application</button>
        <RouterLink to="/application">Go to Application</RouterLink>
        <hr />
        <Link href="/application" title="Go to application"></Link>
    </div>
}

