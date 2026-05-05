
const AddBtn = ({assignmentId}) => {
  return (
    <button type="submit" className="addbtn">
      {assignmentId ? "Edit" : "Add"}
      </button>
  )
}

export default AddBtn