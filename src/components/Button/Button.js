// Imports
import "./style.css";


const Button = (props) => {

    var background = props.bgColor === "red" ? "red" : props.bgColor === "blue" ? "blue" : "green";

    return (
        <button 
            type={props.type} 
            className={`button ${background}`} 
            bgColor={props.bg}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;