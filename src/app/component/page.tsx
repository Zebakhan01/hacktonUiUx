import Image from "next/image"
import Dining from "../../public/Pictures/dining (1).png"
import Living from "../../public/Pictures/living.png" 
import Bedroom from "../../public/Pictures/bedroom.png" 
export default function Hero2(){

    return (
        <div className="w-[1183px] h-[685px] top-[869px] left-[131px] absolute">
        <div className="subText">
            <h3> Browse The Range</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne">

            <Image src={Dining} width={282} alt="Picture of the author" />
                <h6>Dining</h6>
            </div>
                

            <div className="imgTow">
            <Image src={Living} width={282} alt="Picture of the author" />
            <h6>Living</h6>
            </div>
            
            <div className="imgThree">

            <Image src={Bedroom} width={282} alt="Picture of the author" />
            <h6>Bedroom</h6>    
            </div>
           </div>

        </div> 
    )
}