
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {

    const {
        id,
        slug,
        nameBn,
        category,
        categoryNameBn,
        categoryIcon,
        unit,
        image,
        today,
        yesterday,
        lastWeek,
        lastMonth,
        change,
        dir,
        pct } = product;

    const formatPrice = (price) =>
        new Intl.NumberFormat('bn-BD', {
            maximumFractionDigits: 2,
        }).format(price);

    return (
        <div className=''>
            <Link href={`/product/${product?.id}`}>

                <div className="card bg-base-300  shadow-sm p-5 ">
                    <div className=" flex gap-2">
                        <p className="bg-gray-300 rounded-xl px-3 py-2 text-4xl ">{product?.image}</p>
                        <div>
                            <h2 className="card-title">{product?.nameBn}</h2>
                            <p>{product?.unit}</p>
                        </div>

                    </div>
                    <div className='flex items-center justify-between'>

                        <div className='mt-3'>
                            <p>আজকের দাম</p>
                            <p><span className='text-2xl'>{`${product?.today} `}</span> টাকা</p>
                        </div>
                        <p className={`text-sm font-semibold mt-1 ${product?.change?.dir === 'up'
                            ? 'text-red-500'
                            : product?.change?.dir === 'down'
                                ? 'text-green-600'
                                : 'text-gray-500'
                            }`}>
                            {product?.change?.dir === 'up'
                                ? '▲'
                                : product?.change?.dir === 'down'
                                    ? '▼'
                                    : '—'}{' '}
                            {formatPrice(Math.abs(product?.change?.pct || 0))}%
                        </p>
                    </div>

                </div>

            </Link>

        </div>
    );
};

export default ProductCard;