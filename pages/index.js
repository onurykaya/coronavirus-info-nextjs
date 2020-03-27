import {useState, useEffect} from 'react';
import CasesInfo from "../components/item";

const HomePage = () => {
    const [data, setData] = useState([]);
    ;

    useEffect(() => {
        fetch("https://corona.lmao.ninja/countries")
            .then(data => data.json())
            .then(cor => {
                setData([cor])
            })

            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <>
            {
                data.map((item) => {
                    return <CasesInfo data={item}/>
                })
            }
            </>
    );
}
    export default HomePage