import { createContext } from "react";

const ProductContext = createContext({});

type ProductComponentProps = { children: JSX.Element | JSX.Element[] };
export function ProductComponent({ children }: ProductComponentProps) {
    return (
        <ProductContext.Provider value={{}}>
            <div className="group w-9/12 sm:w-[200px] ">{children}</div>;
        </ProductContext.Provider>
    );
}
