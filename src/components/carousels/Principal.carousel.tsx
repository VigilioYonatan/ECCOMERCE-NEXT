import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { PrincipalButton } from "../buttons/Principal.button";

export const PrincipalCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            swipeable
        >
            <div className="flex items-center h-[300px] md:h-[450px] bg-center md:bg-cover bg-no-repeat bg-[url('https://demo-60.woovinapro.com/wp-content/uploads/2022/03/slider2.jpg')]">
                <div className="container mx-auto flex flex-col gap-4 justify-center items-baseline">
                    <div className="w-[400px]">
                        <h3 className="text-3xl font-bold text-white">
                            Disney Collection Toy Buzz Lightyear
                        </h3>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta, harum.
                        </p>
                    </div>
                    <PrincipalButton title="Comprar ahora" />
                </div>
            </div>
            <div className="flex items-center h-[300px] md:h-[450px] bg-center md:bg-cover bg-no-repeat bg-[url('https://demo-60.woovinapro.com/wp-content/uploads/2022/03/slider2.jpg')]">
                <div className="container mx-auto flex flex-col gap-4 justify-center items-baseline">
                    <div className="w-[400px]">
                        <h3 className="text-3xl font-bold text-white">
                            Disney Collection Toy Buzz Lightyear
                        </h3>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta, harum.
                        </p>
                    </div>
                    <PrincipalButton title="Comprar ahora" />
                </div>
            </div>
        </Carousel>
    );
};
