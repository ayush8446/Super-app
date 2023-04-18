import Banner from "../Components/Home/Banner/Banner"
import SignupForm from "../Components/Home/SignupForm/SignupForm"

export function Home(){
    return (
        <div style={{display:"flex"}}>
        <Banner/>
        <SignupForm/>
        </div>
        )
}