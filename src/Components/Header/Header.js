import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css';

const Header = () => {
    return (
        <div className='container-fluid'>
            <MenuBar></MenuBar>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='headerBg col-md-5'>

                    </div>

                    <div className='headerBg2 col-md-7 mb-3'>
                        <div className='innerText row'>
                            <div className='col-md-8'>
                                <h1 className='headerLine'>Innovation for education and society</h1>
                                <p className='headerParagraph'>Our interdisciplinary majors and minor means you can chart your own course for academic success</p>

                                <button className='campusButton'>Visit Our Campus</button>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;