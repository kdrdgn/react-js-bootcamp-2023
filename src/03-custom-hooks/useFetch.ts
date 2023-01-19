import { useEffect, useState } from "react"

const useFetch = (url: string): Array<any> => {
    const [data, setData] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setData([]);
        setHasError(false);
        setIsLoading(true);
        fetch(url)
        .then((res) => {
            console.log('Api data is loaded', res);
            if(res.status === 200){
                return res.json();
            }else{
                throw Error('Opps');
            }
        })
        .then((data:any) => {
            console.log('Api data is converted to JSON');
            setData(data);
            setIsLoading(false);
        }).catch(() => {
            console.log('404 on api');
            setHasError(true);
            setData([]);
        });
    }, [url]);

    return [data, isLoading, hasError];
}

export default useFetch;