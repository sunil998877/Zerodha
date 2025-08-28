function Trading() {
    return (
        <div className="container Hero2  text-center  ">
            <h1 className="opacity fs-3">Open a free demat and trading account online</h1>
            <p className=" text-muted fs-5 mt-4 ">Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            <div className="row   top1  margin ">

                <div className="col-md-6   ">
                    <img src="public\media\account_open.svg" alt="" className="img-fluid img " />
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-md-6  application   mt-5">
                    <h1 className="text-start fs-4 opacity">Signup now</h1>
                    <p className="text-start text-muted">Or track your existing application</p>
                    <div class="mobile-input trading">
                        <span class="country-code">
                            <img src="public\media\india-flag.svg" alt="India Flag"/>&nbsp; +91 
                            
                        </span>
                       
                        <input type="number" autoFocus="" id="number" name="number"  placeholder="Enter your mobile number "   required/>
                    </div>
                    <div className="text-start ">
                        <button className="otp-btn btn btn-position btn-color  opacity   fs-5  rounded-1   custom-hover trading" style={{ width: "255px",height:"50px" }}>Get OTP</button>
                    </div>
                    <p className="font-size3 text-start ">By proceeding, you agree to the Zerodha <a className="text-decoration-none"   href="">terms</a> & <a href="" className="text-decoration-none">privacy policy</a></p>



                </div>



            </div>
        </div>
    );
}

export default Trading;