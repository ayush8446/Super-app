import React, {useState} from "react";
import "./Category.css";

const Category = (props) =>{
    const [choices, setChoices] = useState([])
    const [selected, setSelected] = useState(false)

    const handleChoice = (elem)=>{
        setSelected(true);
        document.getElementById(elem).style.border= "5px solid green"
        console.log(selected);
        if (elem && !choices.includes(elem)){
            setChoices((prevChoice) => [...prevChoice,elem])
        }
    }

    const handleRemoveChoice = (choiceToRemove) =>{
        console.log(choiceToRemove)
        document.getElementById(choiceToRemove).style.border="none"
        setChoices((prevChoice) =>
        prevChoice.filter((choices) => choices !== choiceToRemove)
    )
    }

    const handleSubmit = () =>{
        if(choices.length < 3)
        {
            alert("choose atleast 3 categories")
        }
        else{
            let string=JSON.stringify(choices)
            localStorage.setItem('choices', string)
        }
    }

    return(
        <div className="container">
            <div className="left">
                <div className="iconName">Super App</div>
                <div className="heading">Choose your entertainment category</div>
                {choices && (
                    <div className="choice">
                        {choices.map((choice)=>{
                            return(
                                <div key={choice} className="choiceTag">
                                    {choice}&nbsp;
                                    <span onClick={() => handleRemoveChoice(choice)}>X</span>
                                </div>
                            )
                        })}
                    </div>
                ) }
            </div>

            <div className="right">
                {props.details.map((values,index) => (
                    <div className="card" style={{background:values.background}} key={index} id={values.title} onClick={() =>handleChoice(values.title)}>
                        <div className="title">{values.title} </div>
                        <div className="cardimg">
                            <img src={values.img} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
            <button className="nextButton" type="submit" onClick={handleSubmit}>Next Page</button>
        </div>
    )
}

export default Category;