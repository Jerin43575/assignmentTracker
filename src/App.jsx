
import Heading from './Heading/Heading'
import InputCtnr from './InputCtnr'
import CardCtnr from './CardCtnr/CardCtnr'
import { createAssignment, getAllAssignments, editAssignment, deleteAssignment } from './services/Service'
import { useState, useEffect } from 'react'

const App = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const result = await getAllAssignments();
        setData(result);
        
      }
      catch(error){
        console.error(error);
      }
    };
    fetchData();
  },[]);

  const handleCreateAssignment = async(newAssignment)=>{
      try{
          if(newAssignment.assignmentId){
            const updated = await editAssignment(newAssignment);

            setData((prev) =>
              prev.map((item) =>
                item.assignmentId === updated.assignmentId ? updated : item
              )
            );
          }
          else{
            const saved = await createAssignment(newAssignment);
            setData((prev) => [...prev, saved]);
          }
      }
      catch(error){
        console.error(error);
      }
    };

  const [editData, setEditData] = useState([]);

  const handleDeleteAssignment = async(deletedAssignment) =>{
    try{
      await deleteAssignment(deletedAssignment.assignmentId);
      setData((prev) => prev.filter((item)=>item.assignmentId !== deletedAssignment.assignmentId));
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <div>
    <Heading />
    <InputCtnr onSubmit={handleCreateAssignment} editData={editData}/>
    <CardCtnr data={data} onEdit={setEditData} onDelete={handleDeleteAssignment}/>
    </div>
  )
}

export default App