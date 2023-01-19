import { useEffect, useState } from "react"
import { useParams } from "react-router";
import useFetch from "./useFetch";

const Todo = () => {

    const params = useParams();

    const [url, setUrl] = useState<string>(`https://jsonplaceholder.typicode.com/users/${params.userId}/todos`);
    const [data, isLoading, hasError] = useFetch(url);

    const handleChangeAPIEndPoint = () => {
        setUrl('https://jsonplaceholder.typicode.com/users/2/todos');
    }

    console.log('data', data, isLoading, hasError);

    return (
        <>
            <h1>Simple Todo List</h1>
            <button onClick={handleChangeAPIEndPoint}>Change API End Point {isLoading ? 'Loading' : ''}</button>
            {hasError ? 'Oppps something is wrong' : ''}
            <hr />
            {(data && data.length > 0) ? data.map((item:any) => {
                const { id, title } = item;
                return <p key={id}>{title}</p>
            }): null}
        </>
    )
}

export default Todo;