import './Cards.css'

function Cards(props){
    return(
        <div className="cards">
            <div className='bgcolor' style={{background:props.colorcode}}>
            </div>
            <div className="colordata">
            <h2>{props.colorcode}</h2>
            <span style={{color:props.colorcode}}>{props.name}</span>
            </div>
            
        </div>
    )
}

export default  Cards;