import PropTypes from 'prop-types';



const Player = ({ players,handleAddToSelect,handleValidation,autoPrice,validation}) => {
    // console.log(players);

    
    const { name, country, image, battingType,biddingPrice } = players;
    // console.log(autoPrice,validation,biddingPrice);
    
    

    

    return (


        <div className="card bg-base-100 max-w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt={`player of, ${name}`}
                    className="rounded-xl" />
            </figure>

            {/* name */}
            <div className="flex p-4 ml-8 gap-2">
                <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/person-male.png" alt="person-male" />

                <h1 className="">{name}</h1>
            </div>


            {/* flag btn */}

            <div className="ml-8 p-4 flex justify-between items-center ">
                <div className="flex  gap-2">
                    <img  width="15" height="15"  src="https://img.icons8.com/material-rounded/24/flag.png" alt="flag" />

                    <h1 className="text-[rgb(19,19,19,0.7)] text-sm">{country}</h1>

                </div>

                <button className="btn">{battingType}</button>
            </div>

        <hr className="mx-3" />

            {/* Rating part */}

            <div className="ml-8 p-4 space-y-4">

                <h1>Rating</h1>
                <div className="flex justify-between">
                    <p className="text-sm">{battingType}</p>
                    <p className="text-sm text-[rgb(19,19,19,0.7)]">{battingType}</p>

                </div>

                <div className="flex justify-between items-center">
                    <p className="text-sm">Price: {biddingPrice}</p>
                    <button onClick={()=> {
                        
                        handleAddToSelect(players)
                        handleValidation(biddingPrice)
                        
                        
                        }} className="btn bg-transparent text-black text-xs">Choose Player</button>
                </div>

            </div>


        </div>




    );
};


Player.propTypes = {
    players: PropTypes.object.isRequired,
    handleAddToSelect: PropTypes.func,
}

export default Player;