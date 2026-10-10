import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const Marquee = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const data = await res.json();

     const formatPrice = (price) =>
        new Intl.NumberFormat('bn-BD', {
            maximumFractionDigits: 2,
        }).format(price);

    return (
        <div className="border-purple-500 border-y-2">
            <MarqueeText direction="right" duration={15}>
                {data.map(headline => <div className="flex py-3" key={headline.id}>
                    <span>{headline.image}</span>
                    <span>{headline.nameBn}</span>
                    <span className="mx-2">{`${headline.today} টাকা/কেজি`}</span>
                   <p className={`text-sm font-semibold ${headline?.change?.dir === 'up'
                            ? 'text-red-500'
                            : headline?.change?.dir === 'down'
                                ? 'text-green-600'
                                : 'text-gray-500'
                            }`}>
                            {headline?.change?.dir === 'up'
                                ? '▲'
                                : headline?.change?.dir === 'down'
                                    ? '▼'
                                    : '—'}{' '}
                            {formatPrice(Math.abs(headline?.change?.pct || 0))}%
                        </p>
                    <span className="mx-5">|</span>
                </div>)}

            </MarqueeText>
        </div>
    );
};

export default Marquee;