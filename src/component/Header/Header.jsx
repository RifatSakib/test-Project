import logo from '../../../assets/logo.png'
import coinLogo from "../../../assets/coin.png"
const Header = ({autoPrice,validation,selectItems}) => {

    let result ;

    if( autoPrice < validation && selectItems.length > 6 ){
        result = autoPrice 
    }
    else{
        
        result = autoPrice - validation;
       
        

    }

    return (
            <div className="navbar bg-base-100 container mx-auto p-4 flex flex-col md:flex-row items-center" >
                
                <div className="flex-1">

                    <img src={logo} alt="" />


                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-xl">Home</a></li>
                        <li ><a className="text-xl">Fixture</a></li>
                        <li><a className="text-xl">Teams</a></li>
                        <li><a className="text-xl">Schedule</a></li>
                        <li className="border rounded-xl"><a className="text-xl"> {result} Coins <span><img src={coinLogo} alt="" /></span></a></li>

                    </ul>
                </div>
            </div>
    );
};

export default Header;