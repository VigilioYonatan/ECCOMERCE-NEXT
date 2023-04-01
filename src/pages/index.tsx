import { WebLayout } from "~/layouts/Web.layout";
import { PrincipalCarousel } from "~/components/carousels/Principal.carousel";
import { arrayFrom } from "~/utils/helpers";
import { HrExtra } from "~/components/extras/Hr.extra";
import { SecondaryButton } from "~/components/buttons/Secondary.button";
import StarIcon from "@heroicons/react/24/outline/StarIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import { ProductComponent } from "~/services/product/components/Product.component";
import { ProductCard } from "~/services/product/components";
export default function Home() {
    return (
        <WebLayout title="Inicio">
            <PrincipalCarousel />
            <div className="container mx-auto px-2 flex flex-col gap-4 my-6">
                <section className=" py-3 px-5 bg-paper-light dark:bg-paper-dark">
                    <div className="flex flex-col md:flex-row items-center  py-2">
                        <h2 className="py-4 text-xl text-center font-semibold dark:text-white text-black">
                            Search Trending
                        </h2>
                        <HrExtra classname="md:hidden" />
                        <ul className="flex items-center gap-8 overflow-auto w-full ml-6">
                            {arrayFrom(10).map((_, i) => (
                                <li
                                    key={i}
                                    className="flex hover-button relative   py-3 flex-col justify-center items-center cursor-pointer group"
                                >
                                    <StarIcon className="w-7 h-7 dark:text-white text-black" />
                                    <p className="text-sm group-hover:text-primary text-center dark:text-white text-black ">
                                        Hot Trending
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <HrExtra />
                    <div className="flex my-3 flex-wrap justify-center gap-4 ">
                        {arrayFrom().map((_, i) => (
                            <div key={i} className="">
                                <picture>
                                    <img
                                        width="150"
                                        height="150"
                                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQERMPDw8PDRAQEhAQDw8NDxAPDxAPFRIWFhURFRUYHSggGBolGxUVITIhJSkrLi4uFx8zOD8tNygtLisBCgoKDg0NFRAPFjUlHSI3Ny03LSs1Ny83LzcrNzc3LjcuNzc3Ny43KzArNjUxLzc3LzYrMjE3Ny8uLTc3MC8rK//AABEIAQkAvgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABFEAABAwIEAgcEBgcFCQAAAAABAAIDBBEFEiExIkEGBxNRYXGBFDKRoSNCYnKCsVNjc5KiwcIVJDREUiUzVJOUstHS8P/EABkBAQACAwAAAAAAAAAAAAAAAAABAgMEBf/EACcRAQACAAQFAwUAAAAAAAAAAAABAgMRITESQVGBoQRh8BMycZHx/9oADAMBAAIRAxEAPwDuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg8JXmcKzMSoPGMQla5kFOGPqZblokPBDEPenkA1ygkAAaucQNBcgNjBXq51glHjkM75pZYqpo7YyROcWNnbmb2TYdT2bg3NbNpckG98w33D6tk8TJo7lkjWvbmBa6xF7EHUHkRyKDIREQEREBERAREQEREBERAREQEREBERAREQeFqxZomglwaA4gAuAGYgXsCedrn4rKJWHUSX0QY81SyJj5pDlZG0vcQLmwF9BzPhzVfR2nfHTsEgySOzyvZe/ZvlkdKY788pfl9FHuZ7RUCK14KVzJJb2IkqrB8UfkwFsh+0Y7bFbEEBERAREQEREBERAREQEREBERARFS54CCpFjSVTRzWv9Iem1FRC9RURxnlGDnld5Mbdx+CDZy4K2+cLhmO9dUzyW0NO2No2lq7uefERtIDfUla9Q9Pq1zg+tecRi1LqaR5p4iT39iAHD7Lg5vgg7xV9JIg50UWermbo6Gjb2z2utfK91wyM/fc1WOwrp/efHh7DsIrVNURpqXuHZxnfQNk81qeD9bGGBgjdTzULWgAMZEx8Tfu9nrb8IUxH1nYQf804fep6gf0IJaPARGS+CoqYZXEOfKZTOJXAAfSRyXadABwhpAAAIsFksxSqh/wATT+0MG9Rh4c4gW1c+mcS8eTDIVCjrJwj/AIwf8io/9Fbk6zMJG1U533aeoP8AQg3HD8SgqAXQSslDTZwaeJjv9L27td4EArLXE+l/WVRPBfT0r5ahrSI6tznUj4xvo+MiQi4HAbA21UN0Z61cUhYHVD464POYidoY8N7mujAtcDmDug+hUWl9GuszD6yzHSexTHTsqohgLu5knuu8BcHwW6AoCIiAiIgIiICIiAiKh7kFMsllrmN46yFrnucGtY0ue4nRrQLklZmL1mVpXDutjHHOMdE0/wC8Iln+4HcDfiCfwhBE9LOsWtrHubBLJSU4JDWxOLJXi/vPeNRfuGmvNahluSSSXHUlxJJPeSd144anzVQQVN03HqFdjdbY+RVDXJb0QZGcqoSeCsNd3q5vtZBdEngvTNbkFYyP7xbzP/hVCmb9c5vDYIKWh05ttENyPreAUi62w2VoScgLBAUFZbffVbD0b6Y19BYQTudEP8vPeWG3c0E3Z+Eha+0qtpCD6L6C9NYcTY4BvYVEYBlgJzaHTOw/Wbf1HPkTtK+V+h2NyUtQ2ti1LJLFvJ8Wzoz5i/rY8l9QYfWMniZPEc0crGyMPe1wuPIoMhERAREQEREArEqpLBZLyoPF6nKCg1/Hqy5tfzXz3jWI+1V0s7blma0et+BoytPra9vFdN6w8WMNJK4Gz5foWd933zEfhDlyHDm80F2Rur/NUtCuyi2fxAKtxbIKgFUAqmMJIAFySAB3kqROEuLnNikjmcwkStBMZjymznHPa7Ad3BWiszspbErX7pRuVVBqyqilDWh7ZWStzdm4sDwGvte3EBcEXsfAqy1RMZbpraLRnDwNVYYgI8/JVtULDWqsNXoCrAQA1UVmjD5K8FjYieAoLuCt+iHmfzXc+pXFjJTS0jjc0zw9l/0Utzb0eH/vBcMwU/R+RK6B1UYl2GIsYTZtQx8B7s1s7D8W2/Eg7yiIgIiICIqXFBZqZLBaZ0gq+QWw4tU5QVoWKVYu57jZrQXOJ2DQLkoOXdaWIZ5o6Zp0iaXvAP132sD4hoH7y1el0TEaw1E0tQ7eR5cAeTfqj0Fh6KlhsgyanY+IVmNXp9vRWYt0ErRQtDHTvDniJzAGRkN4iCQ57rHKzhte2pNtFtVPBme7sBBSufE2rkdO2Ql2dxcI/f2ab5uVyNNFqNDO6N7XNc5moDi0kHJfUHvFuS2OWqaXv9sFK+MyPdTEthe45naXyNJEZAF3HXQb6rb9PasRr878nK9dh3m2k/NOW09f4wK0QuZBG2B0QqSJm9hmJY7K1oGVxOYC7jpl4XNKtdGG2q4xmHC6YZ23I0jkGYeGl1Zxaum7IiR7GuklvaAxAOiyWJvHu3RgF+7wWHhszmEPYcrhexHK4IPyJVL3iLxOW3ZmwsK1sC9c94mN89/fx2bPLF2zYIpah1UZ3ukjns4ZIo439owOfrmJDeEiw0PNRzKSGR0YjyBznlroo6lsgMYYXGTOW8NspvoeVu5YRqZGNDWvLQ14kaBplkAtmB3Bsrf9pTFzXGQhzCXMLWsZZx3NmgAnzUTiVneEx6bErM8NtNfbryiMumf4zjWU6zDoX9nI3RhFSZGwyGTMIYw+zC9oIJzW1HK69w2Snd2x9nIAppHZTNmAILdWktuDY78reKjGYhKS05yDGS6PIGsDHG1yA0AC9gsg4pPmD+04g0sFmRhuV24y2y6+SjjrnnEeIW+hicOUz5nrP70yYbSsPEXcJWTf81g4o7RYW4ysDPAR4qXpKl0UjJWaPieyRn3mODh8woTBDoVLFB9Q4dWMnhjnjN2SsZI37rmgj11WSuedTOMdrSvpHHjpn3Z+xkuR8HZ/QhdDQEREBY9TJYK+4qIxeoytKDXekFbuLrl3WLinZ03ZNPHUHJvqIhq8/kPxLccUqcziuN9LcS9qqHPabxx/RR9xa06u9XE+lkEMwaIXKh77L1gvZBmynYeCoj3Rur3eAA+SR7oMxqOCqavH7II6YrOodlHVB1UhQbIMqYaLBadVITbKNvxIJCArIOyxaYrL5IMcnRR+Ju0CzZDoo7EHaBBmYSbW8VMqBwx3CD3FTrUGx9XuNex18UjjljkPYTX2yPIs4+Tg0+QK+iF8pPC+h+rrGzWUET3m8sV4Jr7l7LWcfNpafUoNmREQUuWv47ESDZbEsOrp8wQclxqjkLXtacjnNcGvtfKSLA2XFcToZaVxhmZlO7XDVjx3tPML6fxHDPBavjOARTsMc0bZGnkRqD3g7g+IQfPJfe/iVl0wDiB3f/XU50s6Fy0d5IrzQDUn68Y+0OY8QtWZuLG3j3IJWEavP2iPhorcJ1XtKeHxNyVRSm6CRakmy8YvZNkEROdVI0GyjZt1JYfsgzZdlFOPEpWTZREp4kEjSlZvJYFGVnjZBgy8wousdoFLSDUrDfS52X7iQg8w112ZeYdy7lNQ1bQADe4FjobKIwcyNkbFHH2rpXNYGD3i4mwDT36qbhhzmwa7MXZchaRIJL2LC3fNfSyDySoHK59F1nqOpqsCad0bo6OZrezMmjpJWnR7G/6MpcC7npa9l50G6sRw1GJMDjo5lIbFo7jN3n7G3ffYdWa0AAAAAaADQAdyD1ERAXhC9RBiVNOCoOtovBbMQsKsi0QaFi2HAg6LmWKdDaSN0lSS9rI2vkdALZCQ0mwO4Hh48l2PFm2BXN+ln+Fqv2b0HJo5OAnzXuHqw82aAsjD9kEixey7FeMSc6IIeU6qTw86KLfuVJ4fsgkH+6oWf3lMu91QtR7yDPojopFqi6A6KTYgx5d0w/Zw8V7UKmiNnEeqDP6MNDMSoyRp7ZSg+TpmtP5r6Yp8HpmSmobBCJzoZhG3tDpb3t9tF86dGqQy4jRNbv7XSuP3WTNe75NK+nQ1B6xXFSAqkBERAREQFj1Q0WQrNRsg1PGxoVzfpIL0tUP1Mx+DSf5LpeNjQrn2JRZmTM3zMkb8WkIOISlZtANFgOP5BSNIOEIMxi8qTwrxi8qzwoIk81J4fsovvUnQbIJE+6oWo3UwTwlQ1Tugy8POilGKJw9SkZQW6nZWqQ8XortQsejPEg6H1S0Xa4pE4i4gZNMf3ezHzkC+gLLj/URS3lq5yPdjhiafvue5w/gYuwoCIiAiIgIiICtT7K6rU+yDWMaGhWhzDjI7yt7xo6FaLOfpD5oODSss4t7iR8CpKAaBY2It/vEo7pZB/GVlMQXmKisPCqmFW608KCMbzUnRbKLbzUnRnQIM8nhKiJ91LOPCVDy7lBlYeVKMKicPKlGFBRNzWNTHjWRKViRmz0Hfeoho9kqXczUhvoIWEf8AcV01c16iG/3KoPfVut6QxLpSAiIgIiICIiArNRsryx6rZBquOP0K0h5u8+a2/pA/QrTme96oOLV2tTKf1sp/jKvBY41ke7vc4/ElZCC6xW633VWxWq08KCNbzUlRHQKMapGhOiCQceEqIk3KlXnhKiXHUoMnD1JsKi6BSbNkFEpWI42cFkylY0vIoPozqRithmb9JUTO+GVn9K6AtG6lj/siD9pVX/6iT+VlvKAiIgIiICIiAsar2WSsWs2QaR0idutUj3WzdJHbrVwd/IoOL0+5PeSrxKsUuyvXQXWlWq48KuNKs1p4UGAFn0J0Ues6hOiDPkPCVEk6qUkPCVEX4kGbQKSYdFF0HNSTCgtzFWnDRVSles2QfQ3UXIThYafqVE7R5HK/83FdCWg9SEdsJY7/AFzVDvhIWf0rfkBERAREQEREBYlbsstYdfsUGgdJXbrVpH2a4/Zd+S2TpMd1qshuCO8EfEIOR0+yrB1SlFiWOFnNJaQd7g2IUhBhNRIfoqeV9+bWED4nT5oMRoKtVzeFbdQdBa6SxLGQj9Y+7vg2/wCalT1amw7aZzu9sTQ0fE3QcsWbQjyXS4ur+ltYxPPiZHX89NFRD1YkHgncB9tgcfkQg0SVvCVDndddHV4xg+lkfL9kDs2/LX5qiXobSvYYxT5TawkZcPae+/P1QcxoAe5SbQVsEXVxVsP0b45ByzZoz8NfzWUOhFUwXkLGfcu/+QQaXJe6rZspus6G1jSTGGT32DHZX+VnWHzUfNRTQi08MsJH6WNzB6EjX0QfRHU222D0vi6qPxq5v5WW7LUurKndFhdIxzSx3ZGQtcLEdo90liOR4ltoQEREBERAREQFiVrbhZatyNug0LHKAvuoVmDa7LolTQ35LF/s3wQafBgEd79mwE6khoBPmVK0uEtH1VsMdB4LJjo0EMyiA5Lx2HX5LYm0oVwQBBrUeEjuWS3D7clPCIL3swg1uXC78lbiwQDkto7MJ2YQQbMNA5KzVYYHC1lsXZheGMINOZgADr2U1TU+UWspUwhOxQW4GrJCpa1VoCIiAiIgIiICIiDwtXmQKpEFIaF7ZeogIiICIiAiIgIiICIiAiIgIiICIiD/2Q=="
                                        alt=""
                                    />
                                </picture>
                                <p className="mt-2 text-sm text-center dark:text-white text-black">
                                    T-shirt
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 h-[280px]">
                        <img
                            className="absolute top-0 -z-10 object-cover w-full h-full"
                            src="https://demo-60.woovinapro.com/wp-content/uploads/2022/03/banner1.jpg"
                            alt=""
                        />
                        <div className="flex flex-col gap-4  p-4 w-1/2">
                            <h2 className="text-white text-2xl font-bold">
                                Meet Alpinerx Blue New Version
                            </h2>
                            <p className="text-sm text-white font-semibold">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Incidunt, nesciunt.
                            </p>
                            <div className="">
                                <SecondaryButton title="Shop Now" />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-1 h-[280px]">
                        <img
                            className="absolute top-0 -z-10 object-cover w-full h-full"
                            src="https://demo-60.woovinapro.com/wp-content/uploads/2022/03/banner2.jpg"
                            alt=""
                        />
                        <div className="flex flex-col gap-4  p-4 w-1/2">
                            <h2 className="text-white text-2xl font-bold">
                                Meet Alpinerx Blue New Version
                            </h2>
                            <p className="text-sm text-white font-semibold">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Incidunt, nesciunt.
                            </p>
                            <div className="">
                                <SecondaryButton title="Shop Now" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*  */}
                <section className=" py-3 px-5 bg-paper-light dark:bg-paper-dark">
                    <div className="flex flex-col md:flex-row  md:items-center py-3 justify-between gap-2">
                        <h2 className="text-2xl font-semibold dark:text-white">
                            Flash Deals
                        </h2>
                        <div className="flex items-center gap-2">
                            <p className="text-gray dark:text-white">End In:</p>
                            <div className="flex gap-2">
                                <p className="dark:text-white text-sm font-bold bg-primary px-2 py-2">
                                    274
                                </p>
                                <p className="dark:text-white text-sm font-bold bg-primary px-2 py-2">
                                    00
                                </p>
                                <p className="dark:text-white text-sm font-bold bg-primary px-2 py-2">
                                    38
                                </p>
                                <p className="dark:text-white text-sm font-bold bg-primary px-2 py-2">
                                    24
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="dark:text-white font-semibold text-sm">
                                View All
                            </p>
                            <ChevronRightIcon className="w-4 h-4 dark:text-white" />
                        </div>
                    </div>
                    <HrExtra />
                    <div className="flex flex-wrap justify-center gap-4 m-4">
                        {arrayFrom().map((_, i) => (
                            <ProductCard key={i}>
                                <ProductCard.Header>
                                    <ProductCard.HeaderButtons />
                                </ProductCard.Header>
                                <ProductCard.Footer>
                                    <ProductCard.FooterTitle />
                                    <ProductCard.FooterStart />
                                    <ProductCard.FooterPrice />
                                </ProductCard.Footer>
                            </ProductCard>
                        ))}
                    </div>
                </section>
            </div>
        </WebLayout>
    );
}
