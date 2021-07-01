import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function InputGroup(props) {

    const [info, setInfo] = useState([])

    useEffect(async () => {

        const url = "http://localhost:9001/"+props.name
        console.log("url :",url);
        const response = await axios.get(url)
        setInfo(response.data.List)
        console.log("response.data.List :",response.data.List);


    },[])

    return (
        <div className="input-group mb-3">
            <select class="form-select" id="inputGroupSelect02">
                <option selected>{props.name}...</option>
                {info.map((elem, index ) => {
                    return (<option key={index}>{elem.name}</option>)
                })}
            </select>
        </div>
    )

}

export default InputGroup;
