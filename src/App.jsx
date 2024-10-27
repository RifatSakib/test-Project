import { useState } from "react"
import Banner from "./component/Banner/Banner"
import Card from "./component/Card/Card"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import SelectedPlayers from "./component/SelectedPlayers/SelectedPlayers"
import Available from "./component/Available/Available"
  import { ToastContainer, Zoom, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectItems, setSelectItems] = useState([]);

  const [autoPrice, setAutoPrice] = useState(0);
  const incrementAmount = autoPrice;
  // console.log (autoPrice);

  const [validation, setValidation] = useState(0);
  console.log (validation);
  const decrementAmount = validation
  



  const [togglebtn, setTogglebtn] = useState(true);



const handleValidation = (payment)=>{
  
  if(selectItems.length <=6 && autoPrice > validation){
    setValidation(payment + decrementAmount);

  }

  else {


    toast.error('Insufficient Balance', {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
      });
    


    setValidation(0 + decrementAmount);

  }

}

  const handleToogleBtn = (result) => {
    setTogglebtn(result);
  }



  const handleAutoPrice = (price ) => {
    // console.log(biddingPrice);
   
  
    toast.success('Congratulations! You got Amout: 60000000', {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
      });

    setAutoPrice((price + incrementAmount));
  }





  const handleAddToSelect = (players) => {

    
    
    if(selectItems.length <= 5 && autoPrice > validation  ){
       const newPlayers = [...selectItems, players];
    

      toast.success('Successfully added players', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
        });
      
      setSelectItems(newPlayers);
     }

     else {


      toast.error('You can not add', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
         
        return 
    }

    
  }

  




  return (
    <>


      {/* header */}
      <Header
        autoPrice={autoPrice}
        validation= {validation}
        selectItems= {selectItems}



      ></Header>

      {/* banner */}
      <Banner

        handleAutoPrice={handleAutoPrice}
      ></Banner>


      {/* middle two btn section */}

      <div>

        <Available
          selectItems={selectItems}
          handleToogleBtn= {handleToogleBtn}
          togglebtn = {togglebtn}
        ></Available>
      </div>


      {
        togglebtn ? <Card handleAddToSelect={handleAddToSelect} selectItems={selectItems} handleValidation={handleValidation}  autoPrice={autoPrice}  validation={validation}></Card> : <SelectedPlayers selectItems={selectItems}  handleToogleBtn= {handleToogleBtn}></SelectedPlayers>



      }






      {/* footer */}
      <Footer></Footer>

      <ToastContainer />

    </>
  )
}

export default App
