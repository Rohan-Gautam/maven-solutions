import {Metadata} from "next";
import {Container} from "@/components/Container";
import {ProductCatalog} from "@/components/ProductCatalog";
import {products, productCategories} from "@/data/products";
import {pageMetadata} from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Paper Industry Chemicals", "Browse Maven Solutions process chemicals for retention, drainage, fibre recovery, process water, surface sizing and starch applications.", "/products");
export default function Products() {
    return <section className="py-20 sm:py-10"><Container><ProductCatalog products={products}
                                                                                        categories={productCategories}/></Container>
    </section>;
}
