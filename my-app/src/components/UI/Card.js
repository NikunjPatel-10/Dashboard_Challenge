import './Card.css'

function Card(props){

    // add white place after writing default class name 
    // eg 'card '
   const classes = 'card ' + props.className
    return(
        <div className={classes}>{props.children}</div>
    )
}
export default Card