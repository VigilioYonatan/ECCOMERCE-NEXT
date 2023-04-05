import { ProductComponent, ProductComponentProps } from "./Product.component";
import {
    ProductFooterStartComponent,
    ProductFooterPriceComponent,
    ProductFooterButtonComponent,
    ProductFooterComponentProps,
} from "./Product.footer.component";
import {
    ProductFooterComponent,
    ProductFooterTitleComponent,
} from "./Product.footer.component";
import {
    ProductHeaderComponent,
    ProductHeaderComponentButtons,
    ProductHeaderComponentProps,
} from "./Product.header.component";

export type ProductCartyType = {
    (props: ProductComponentProps): JSX.Element;
    Header: (props: ProductHeaderComponentProps) => JSX.Element;
    HeaderButtons: () => JSX.Element;
    Footer: (props: ProductFooterComponentProps) => JSX.Element;
    FooterTitle: () => JSX.Element;
    FooterStart: () => JSX.Element;
    FooterPrice: () => JSX.Element;
    FooterButton: () => JSX.Element;
};

export const ProductCard: ProductCartyType = Object.assign(ProductComponent, {
    Header: ProductHeaderComponent,
    HeaderButtons: ProductHeaderComponentButtons,
    Footer: ProductFooterComponent,
    FooterTitle: ProductFooterTitleComponent,
    FooterStart: ProductFooterStartComponent,
    FooterPrice: ProductFooterPriceComponent,
    FooterButton: ProductFooterButtonComponent,
});
