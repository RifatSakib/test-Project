import Players from '../Players/Players';
import PropTypes from 'prop-types';
import '../Features/Features'

const Card = ({handleAddToSelect,selectItems,handleValidation,autoPrice,validation}) => {
    return (
        <div className='container mx-auto p-4  pb-96'>

          
            <div>

                <Players handleAddToSelect= {handleAddToSelect} handleValidation={handleValidation} autoPrice={autoPrice}  validation={validation} ></Players>
            </div>
        </div>


    );
};

Players.propTypes = {
    handleAddToSelect: PropTypes.func,
}

export default Card;