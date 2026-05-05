import {useEffect, useState} from 'react'
import Activity from './inputs/Activity'
import Argency from './inputs/Argency'
import Deadline from './inputs/deadline'
import Time from './inputs/Time'
import AddBtn from './inputs/AddBtn'

const InputCtnr = ({onSubmit, editData}) => {
    
    const initialStage = {assignmentName : "",
        deadline : "",
        urgency : "",
        time : ""};

    const [formData, setFormData] = useState(initialStage);

    useEffect (() =>{
        if(editData){
            setFormData(editData);
        }
    }, [editData]);

    const handleChange = (name, value) => {
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
        setFormData(initialStage);
    };


  return (
    <form onSubmit={handleSubmit}>
        <Activity 
        name = "assignmentName"
        label = "Assignment"
        value = {formData.assignmentName || ''}
        onChange = {handleChange}
        />
        <Argency
        name = "urgency"
        label = "Urgency"
        value = {formData.urgency || ''}
        onChange = {handleChange}
        />
        <Deadline
        name = "deadline"
        label = "Deadline"
        value = {formData.deadline || ''}
        onChange = {handleChange}
        />
        <Time
        name = "time"
        label = "Time"
        value = {formData.time || ''}
        onChange = {handleChange}
        />
        <AddBtn assignmentId={formData.assignmentId}/>
    </form>
  )
}

export default InputCtnr