import React from 'react'
import { FaCircleNotch } from "react-icons/fa";
import BackDrop from '../BackDrop/BackDrop'
import Aux from '../../../hoc/Holder'
import './Loader.css';

const loader = () => (
    <Aux>
        <BackDrop />
        <div className="Loader">
            <FaCircleNotch className="Spinner"/>
        </div>
    </Aux>
)

export default loader;