export const TopUserVendorComponent = () => {
    return (
        <div className="relative w-full lg:flex-1  h-[150px] md:h-[250px] lg:h-[200px]">
            <div className="absolute top-0 left-0 right-0 bottom-0 w-[inherit] h-[inherit]">
                <img
                    width={350}
                    height={200}
                    className=" object-cover w-[inherit] h-[inherit]"
                    src="https://demo-60.woovinapro.com/wp-content/uploads/2022/03/vendor2.jpg"
                    alt=""
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 w-[inherit] h-[inherit]" />
            </div>

            <div className="relative z-10 w-[120px] flex flex-col gap-4 m-3">
                <p className="text-white text-2xl font-bold drop-shadow">
                    Riot Store
                </p>
                <p className="text-white drop-shadow">
                    Chuong My, Ha Noi, Vietnam
                </p>
            </div>
            <div className="absolute w-[80px] h-[80px] overflow-hidden bottom-0 right-0 m-4 border-4 border-white rounded-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://demo-60.woovinapro.com/wp-content/uploads/2022/03/avatar-1.png"
                    alt=""
                />
            </div>
        </div>
    );
};
