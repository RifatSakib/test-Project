import logoFooter from '../../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className="">

{/* footer 1 */}
<div className='relative'>

<footer className="box-border bg-transparent absolute -top-36 md:left-28 md:-top-36 footer bg-base-200 text-base-content p-4 rounded-xl md:w-10/12 border border-gray-500 ">

  <form className='mx-auto rounded-xl max-w-11/12 p-10 md:w-full md:p-14 bg-gradient-to-tr from-blue-950 via-white to-red-400 '>
  <h6 className="text-2xl font-bold mx-auto">Subscribe to our Newsletter</h6>
                    <fieldset className="form-control w-80 mx-auto">
                        <label className="label ">
                            <span className="label-text text-sm text-[rgba(19,19,19,0.7)]">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className=" btn bg-gradient-to-tr from-white via-amber-500 to-red-400 join-item">Subscribe</button>
                        </div>
                    </fieldset>
  </form>
</footer>


</div>




{/* footer 2 */}

            <div className='  pt-72  bg-black '>
                <img className='mx-auto border border-dashed' src={logoFooter} alt="" />


            </div>
            <footer className="footer bg-black text-white p-10 ">

                <nav>
                    <h6 className="text-xl font-bold text-white ">About Us</h6>
                    <p className="text-[rgba(255,255,255,0.6)] w-[200px]"><small>We are a passionate team dedicated to providing the best services to our customers.</small></p>
                </nav>
                <nav className="text-[rgba(255,255,255,0.6)]">
                    <h6 className="text-xl font-bold text-white ">Quick Links</h6>

                    <a className="link link-hover ">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                <form>
                    <h6 className="text-xl font-bold text-white ">Subscribe</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-[rgba(255,255,255,0.6)] ">Subscribe to our newsletter for the latest updates.</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                            <button className="btn bg-gradient-to-tr from-white via-amber-500 to-red-400 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>


        </div>
    );
};

export default Footer;