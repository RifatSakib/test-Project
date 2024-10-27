import bannerMain from '../../../assets/banner-main.png'
const Banner = ({handleAutoPrice}) => {
    return (
        <div className='container mx-auto p-4 '>
            <div
                className="hero min-h-screen bg-gradient-to-tr from-blue-950 via-black to-red-950 rounded-xl"
            >
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-full space-y-8">
                        <img className='mx-auto' src={bannerMain} alt="" />
                        <h1 className="mb-5 text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="mb-5 text-lg text-[rgba(255,255,255,0.7)]">
                        Beyond Boundaries Beyond Limits
                        </p>
                        <button onClick={()=> handleAutoPrice(60000000)} className="btn bg-[rgb(231,254,41)] font-extrabold border border-yellow-200">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;