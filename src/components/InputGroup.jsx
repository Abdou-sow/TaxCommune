import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function InputGroup(props) {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch("http://localhost:9001/" + $props.name + "/")
            .then(res => res.json())
            .then(dataUsers => {
                setUsers(dataUsers)

            })

    }, [])

    return (
        <div>
            <h2>InputGroup</h2>
            <h3>avec un map faire un inputgroupe pour afficher tous les communes/activites</h3>
            <select class="form-select" id="inputGroupSelect02">
                <option selected>{props.name}...</option>
                {setInfo.map(elem => {
                    return (<option>{eleme.name}</option>)
                })}
            </select>
        </div>
    )

}

export default InputGroup;
