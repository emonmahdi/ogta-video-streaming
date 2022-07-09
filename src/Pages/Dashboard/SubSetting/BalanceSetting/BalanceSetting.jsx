import React from 'react';
import './balanceSetting.css'

const BalanceSetting = () => {
    return (
        <div className='balanceSetting'>
            <p>Available balance</p>
            <span>USD</span>
            <h4> <span className='amount'>0.00</span> </h4>
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <label htmlFor="adds">Max limit for your ads campaign</label>
                            <input type="text" className='form-control' placeholder='0' />
                        </div>
                        <hr />
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <label htmlFor="adds">PayPal E-mail</label>
                            <input type="text" className='form-control' placeholder='email' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <label htmlFor="adds">Amount (Min 50: USD)</label>
                            <input type="text" className='form-control' placeholder='0' />
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-primary'>Save</button>
                </div>
            </form>
        </div>
    );
};

export default BalanceSetting;