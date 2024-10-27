
const Available = ({ selectItems, handleToogleBtn, togglebtn }) => {

       return (
        <div>

            <div className='container mx-auto p-4  pb-10'>

                <div>
                    <div className=' flex items-center justify-between'>

                        {

                            togglebtn ? <h1 className='text-2xl font-bold'>Available Players</h1> : <h1 className='text-2xl font-bold'>Selected Players({selectItems.length}/6)</h1>
                        }

                        <div>
                            <button id='avaiableBtn' onClick={() => handleToogleBtn(true)} className='btn hover:bg-[rgb(231,254,41)] border focus:bg-[rgb(231,254,41)]'>Available</button>

                            <button id='selectBtn' onClick={() => handleToogleBtn(false)} className='btn  hover:bg-[rgb(231,254,41)] border focus:bg-[rgb(231,254,41)]'>Selected({selectItems.length})</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Available;