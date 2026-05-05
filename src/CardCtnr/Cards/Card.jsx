import CardActivity from "./CardDetails/CardActivity"
import CardUrgency from "./CardDetails/CardUrgency"
import CardDeadline from "./CardDetails/CardDeadline"
import CardTime from "./CardDetails/CardTime"
import CardThreeDot from "./CardDetails/CardThreeDot"

const Card = ({item, onEdit, onDelete}) => {
  return (
    <div className="card">
        <div className="activityIconCtnr">
        <CardActivity assignmentName={item.assignmentName}/>
        <CardThreeDot assignment={item} onEdit={onEdit} onDelete={onDelete}/>
        </div>
        <CardUrgency urgency={item.urgency}/>
        <div className="dlTimeCtnr">
            <CardDeadline deadline={item.deadline}/>
            <CardTime time={item.time}/>
        </div>
    </div>
  )
}

export default Card