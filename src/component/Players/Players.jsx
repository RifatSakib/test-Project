import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from 'prop-types';
const Players = ({handleAddToSelect,handleValidation,autoPrice,validation}) => {
    const [players,setPlayers] = useState([]);
    // console.log(players);
    useEffect(() => {
        fetch('Players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div>
           
            

            <div className="grid justify-center  md:grid-cols-2 lg:grid-cols-3 gap-4">

            {
                players.map((players,idx) => <Player key={idx} players={players}  handleAddToSelect={handleAddToSelect} handleValidation={handleValidation} autoPrice={autoPrice}  validation={validation}></Player>)

            }
            </div>

        </div>
    );
};


Players.propTypes = {
    handleAddToSelect: PropTypes.func,
}


export default Players;