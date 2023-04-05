import { createContext } from "react";

const ProductContext = createContext({});

export type ProductComponentProps = {
    className?: string;
    children: JSX.Element | JSX.Element[];
};
export function ProductComponent({
    className = "",
    children,
}: ProductComponentProps) {
    return (
        <ProductContext.Provider value={{}}>
            <div className={`group ${className}`}>{children}</div>
        </ProductContext.Provider>
    );
}
