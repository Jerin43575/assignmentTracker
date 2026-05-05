import Card from "./Cards/Card"

const CardCtnr = ({data, onEdit, onDelete} ) => {
    return (
      <div className="cardctnr">
        {data.map((item,index)=>(
          <Card key={index} item={item} onEdit={onEdit} onDelete={onDelete}/>
          ))}
      </div>
    );
}

export default CardCtnr