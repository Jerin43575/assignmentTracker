import { FiEdit, FiTrash2 } from "react-icons/fi";

const DeleteEditIcon = ({assignment, onEdit, onDelete}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        right: 0,
        background: "white",
        border: "1px solid #ccc",
        padding: "8px",
        borderRadius: "6px",
        display: "grid",
        gap: "10px"
      }}
    >
      <FiEdit style={{color: "black", cursor:"pointer"}} onClick={()=>onEdit(assignment)}/>
      <FiTrash2 style={{color: "black", cursor:"pointer"}} onClick={()=>onDelete(assignment)}/>
    </div>
  );
};

export default DeleteEditIcon;