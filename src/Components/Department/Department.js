import React from 'react';
import './Department.css';
import engineering from '../../Images/engineering.png';
import accounting from '../../Images/accounting.png';
import creative from '../../Images/creative.png';
import design from '../../Images/design.png';
import physics from '../../Images/physics.png';
import chemistry from '../../Images/chemistry.png';

const Department = () => {
    return (
        <div className='cardBox container'>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-9'>
                    <div className='row'>
                        <div class="card m-3" style={{ width: '14em', height: '16em', backgroundColor: '#F1E3FC' }}>
                            <img class="card-img-top w-50 rounded mx-auto d-block pt-5" src={engineering} alt="Card image cap" />
                            <div class="card-body">
                                <h4 className='cardHeadline text-center'>Engineering</h4>

                            </div>
                        </div>

                        <div class="card m-3" style={{ width: '14em', height: '16em', backgroundColor: '#E3FCFA' }}>
                            <img class="card-img-top w-50 rounded mx-auto d-block pt-5" src={accounting} alt="Card image cap" />
                            <div class="card-body">
                                <h4 className='cardHeadline pt-3 text-center'>Accounting</h4>

                            </div>
                        </div>

                        <div class="card m-3" style={{ width: '14em', height: '16em', backgroundColor: '#FCF0E3' }}>
                            <img class="card-img-top w-50 rounded mx-auto d-block pt-5" src={creative} alt="Card image cap" />
                            <div class="card-body">
                                <h4 className='cardHeadline pt-3 text-center'>Creative</h4>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-md-1'></div>

            </div>

            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-9'>
                    <div className='row'>
                        <div class="card m-3" style={{ width: '14em', height: '16em', backgroundColor: '#FCEEE3' }}>
                            <img class="card-img-top w-50 rounded mx-auto d-block pt-5" src={design} alt="Card image cap" />
                            <div class="card-body">
                                <h4 className='cardHeadline text-center pt-3'>Design</h4>

                            </div>
                        </div>

                        <div class="card m-3" style={{ width: '14em', height: '16em', backgroundColor: '#F3FCE3' }}>
                            <img class="card-img-top w-50 rounded mx-auto d-block pt-5" src={physics} alt="Card image cap" />
                            <div class="card-body">
                                <h4 className='cardHeadline pt-3 text-center'>Physics</h4>

                            </div>
                        </div>

                        <div class="card m-3" style={{ width: '14em', height: '16em', backgroundColor: '#E3F3FC' }}>
                            <img class="card-img-top w-50 rounded mx-auto d-block pt-5" src={chemistry} alt="Card image cap" />
                            <div class="card-body">
                                <h4 className='cardHeadline pt-3 text-center'>Chemistry</h4>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-md-1'></div>

            </div>

        </div>
    );
};

export default Department;