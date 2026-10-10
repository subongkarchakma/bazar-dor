
import Banner from "./components/home/Banner";
import ProductCard from "./components/ProductCard";
import { BiSolidUpArrow } from "react-icons/bi";
import { IoCaretDownSharp } from "react-icons/io5";

const getProducts = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getProducts();

  const upProducts = products.filter(p => p.change?.dir == 'up').sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const downProducts = products.filter(p => p.change?.dir == 'down').sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  return (
    <div>
      <Banner />
      {/* আজ দাম বেড়েছে */}
      <div className="max-w-7xl mx-auto">

        <div className="flex gap-1 items-center">
          <p className="text-red-500 "><BiSolidUpArrow /></p>
          <p className="my-4 text-2xl font-bold"> আজ দাম বেড়েছে</p>
        </div>
        <div className="">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              upProducts.map(product => <ProductCard key={product.id} product={product} ></ProductCard>)
            }
          </div>
        </div>

        <div className="flex gap-1 items-center">
          <p className="text-green-700"><IoCaretDownSharp /></p>
          <p className="my-4 text-2xl font-bold">আজ দাম কমেছে</p>
        </div>

        <div className="">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              downProducts.map(product => <ProductCard key={product.id} product={product} ></ProductCard>)
            }
          </div>
        </div>

        <p className="mt-6 text-2xl font-bold">সব পণ্য</p>
        <p className="my-2">মোট <span>{products.length}</span>টি পণ্য দেখানো হচ্ছে</p>

        <div className="">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              products.map(product => <ProductCard key={product.id} product={product} ></ProductCard>)
            }
          </div>
        </div>



      </div>

    </div>
  );
}
