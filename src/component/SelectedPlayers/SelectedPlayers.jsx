import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectItems, handleToogleBtn }) => {
    console.log(selectItems);
    return (
        <div className="container mx-auto p-4 mb-96 ">

            <div className="space-y-5">

                {/* two btns avail able & selected */}
              
            

               


            

            {/* selected Cards */}
                {

                selectItems.map((selectItem, idx) => <SelectedPlayer key={idx} selectItem={selectItem} ></SelectedPlayer>)

                }


                <div className="border border-black rounded-xl w-44 p-2">
                <button onClick={()=> handleToogleBtn(true)} className="btn bg-[rgb(231,254,41)] font-extrabold border border-yellow-200">Add More Player</button>

                </div>

            </div>

        </div>
    );
};

export default SelectedPlayers;