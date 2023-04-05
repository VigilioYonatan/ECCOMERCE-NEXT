import { Carousel } from "react-responsive-carousel";
import { PrincipalButton } from "~/components/buttons/Principal.button";

export const CategoriaCarouselComponent = () => {
    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay
            infiniteLoop
            swipeable
        >
            <div className="flex items-center  justify-center h-[250px] bg-center md:bg-cover bg-no-repeat bg-[url('https://demo-60.woovinapro.com/wp-content/uploads/2022/03/slider2.jpg')]">
                <div className="container w-1/2 mx-auto flex flex-col gap-4 justify-center items-center">
                    <div className="">
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
            <div className="flex items-center  justify-center h-[250px] bg-center md:bg-cover bg-no-repeat bg-[url('https://demo-60.woovinapro.com/wp-content/uploads/2022/03/slider2.jpg')]">
                <div className="container w-1/2 mx-auto flex flex-col gap-4 justify-center items-center">
                    <div className="">
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
