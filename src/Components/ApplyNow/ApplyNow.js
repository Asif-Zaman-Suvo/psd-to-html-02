import React from 'react';
import './ApplyNow.css';

const ApplyNow = () => {
    return (
        <div className='ApplyBg container-fluid'>
            <div className='row'>
                <div className='offset-md-3 col-md-4 mt-5'>
                    <div className='row mt-5'>
                        <p className='applyParagraph'>Start your courses! <span className='spanParagraph'>try now for free</span> </p>
                        <h4 className='applyHeader'>Are you ready to work faster?</h4>
                    </div>

                </div>
                <div className='col-md-3'>
                    <div className='formBG'>


                        <div className='form pt-3'>
                            <form className=''>


                                <div class="form-group pl-5 pr-5">
                                    <h4 className='pt-5 pb-4 applyHeader text-center'>Apply Now</h4>

                                    <input type="email" class="form-control departmentParagraph" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />

                                </div>

                                <div class="form-group pl-5 pr-5">


                                    <input type="email" class="form-control departmentParagraph" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />

                                </div>

                                <div class="form-group pl-5 pr-5">


                                    <input type="email" class="form-control departmentParagraph" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />

                                </div>
                                <div class="form-group pl-5 pr-5">

                                    <input type="password" class="form-control departmentParagraph" id="exampleInputPassword1" placeholder="Choose Password" />
                                </div>
                                <div class="form-group pl-5 pr-5">

                                    <input type="password" class="form-control departmentParagraph" id="exampleInputPassword1" placeholder="Confirm Password" />
                                </div>
                                <div class="form-group form-check pl-5">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1"><small className='departmentParagraph'>I agree with the terms and conditions</small></label>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type="submit" class="campusButton ml-3">Apply Now</button>
                                    </div>

                                    <div className='col-md-6'>
                                        <small>or call us <br></br>
                                        <span className='applyHeader'>+49 123 456 789</span>
                                        
                                        </small>

                                    </div>
                                </div>

                                <div className="row">
                                    <a href="#"><p className="pt-2 pl-5 departmentParagraph">I already have an account</p></a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default ApplyNow;