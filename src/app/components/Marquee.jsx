import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const Marquee = () => {
    // const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products');
    // const data = await res.json()
    // console.log(data);
    return (
        <div>
            <MarqueeText direction="right" duration={11}>
                {/* {data.map(headline => <div key={headline.id}>
                    <span>{headline.image}</span>
                    <span>{headline.nameBn}</span>
                    <span className="mx-5">{`${headline.today} টাকা/কেজি`}</span>
                </div>)} */}
                Hello from demo app
            </MarqueeText>
            <MarqueeText
                duration={30}
                pauseOnHover={true}
                direction="right"
            >
            
            </MarqueeText>
        </div>
    );
};

export default Marquee;