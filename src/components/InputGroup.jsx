import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function InputGroup(props) {
    const [info, setInfo] = useState(["abdou","bakagnan","fasulu","ahmed","karim"])
    // const url ="http://localhost:9001/"+props.name+"/"
    // console.log("url",url);

    // useEffect(() => {
    //     fetch("http://localhost:9001/"+props.name+"/")
    //         .then(res => res.json())
    //         .then(dataUsers => {
    //             setUsers(dataUsers)

    //         })

    // }, [])

    return (
        <div className="input-group mb-3">
            <select class="form-select" id="inputGroupSelect02">
                <option selected>{props.name}...</option>
                {info.map((elem) => {
                    return (<option>{elem}</option>)
                })}
            </select>
        </div>
    )

}

export default InputGroup;
