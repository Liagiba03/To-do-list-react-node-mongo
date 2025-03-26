
/*const Card = (props) => {
    const estado = props.isComplete;
    const title = props.title;
    const description = props.description;*/
const Card = ({id, status, title, description, actualizar, eliminar}) => {
    //const [statusState, setStatusState] = useState(status);
    //console.log(id);

    return (
        <>

            <div className="card col-12 p-2 shadow-sm flex-row justify-content-between mb-2">
                <div className="col-8">
                    <h3 className={status ? 'text-primary' : 'text-secondary text-decoration-line-through'}>{title}</h3>
                    <p className="text-secondary">{description}</p>
                </div>

                <i
                    className={status ?
                        "bi bi-journal-check text-success fs-4" :
                        "bi bi-trash text-danger fs-4"}
                        onClick={()=>{
                            
                            if(!status){
                                //console.log(id)
                                eliminar(id);
                            }else{
                                actualizar(id)
                            }
                        }}></i>

            </div>
        </>
    )
}

export default Card