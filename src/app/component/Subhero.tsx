import Image from "next/image";
import Dining from "../../../public/Pictures/dining.png";
import Living from "../../../public/Pictures/living.png";
import Bedroom from "../../../public/Pictures/bedroom.png";

export default function SubHero() {
  return (
    <>
      <div className="subText text-center mb-8">
        <h3 className="font-bold text-[2rem]">Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="imgArea flex justify-center gap-8">
        <div className="imgOne text-center">
          <Image src={Dining} width={282} height={200} alt="Dining" />
          <h6 className="mt-2">Dining</h6>
        </div>

        <div className="imgTow text-center">
          <Image src={Living} width={282} height={200} alt="Living" />
          <h6 className="mt-2">Living</h6>
        </div>

        <div className="imgThree text-center">
          <Image src={Bedroom} width={282} height={200} alt="Bedroom" />
          <h6 className="mt-2">Bedroom</h6>
        </div>
      </div>
    </>
  );
}
