import Category from "../Components/Genre/Category";
import cardData from "../Components/Genre/cardData";

export function Genre(){
    return (
        <>
            <Category details={cardData}/>
        </>
    )
}