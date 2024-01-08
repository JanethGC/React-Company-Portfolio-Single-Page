import React from 'react';
import './about.css';
import about from "../../Image/about.jpg";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";

const About = () => {

    return (

        <div className='container about-section'>
            <div className='row'>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                    <div className='about-image'>
                        <img src={about} height="400px" width="400px" alt="about-image"></img>
                    </div>

                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                    <div className='about-details'>

                        <div className='about-title'>
                            <h5>About</h5>
                            <span className='line'></span>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>

                        <div className='card-design'>
                            <div className='about-list-item'>

                                <div className='about-detail-icon'>
                                    <p>
                                        <FcSlrBackSide size={50}/>
                                    </p>
                                </div>
                                <div>
                                    <h6>Perfect Day Out</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </div>

    );

}

export default About;