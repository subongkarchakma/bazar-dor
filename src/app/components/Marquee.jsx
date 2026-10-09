import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const Marquee = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    const data = await res.json();

    return (
        <div className="border-purple-500 border-y-2">
            <MarqueeText direction="right" duration={15}>
                {data.map(headline => <div className="py-3" key={headline.id}>
                    <span>{headline.image}</span>
                    <span>{headline.nameBn}</span>
                    <span className="mx-2">{`${headline.today} টাকা/কেজি`}</span>
                   
                    <span className="mx-5">|</span>
                </div>)}

            </MarqueeText>
        </div>
    );
};

export default Marquee;