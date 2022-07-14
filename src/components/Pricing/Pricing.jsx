import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';


import Sidebar from '../Sidebar/Sidebar';
import './pricing.css'


const Pricing = () => {
    const [prices, setPrices] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('https://ogtabackend.edulector.com/api/user/subscriptions/plan/')
        .then(res => res.json())
        .then(data => setPrices(data));
        setLoading(false)
    }, [])

    return (
        <div className='pricingDiv'>
            <Sidebar />
            <div className="pricingContent">
                <h2 className='pricing-title'>Our Pricing Plane</h2>
                <div className="container">
                    <div className="row">
                        { loading && <Spinner animation="border" variant="primary" /> }
                        {
                           prices && prices.map(pricee => {
                                const {id, plan_name, price, discount_price, details} = pricee;
                                return (
                                    <div key={id} className='col-md-4'>
                                        <div className='single-pricing'>
                                            <div className="single-content-pricing">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h4 className='pricing-title'> {plan_name}</h4>
                                                        <h2>{price}</h2>
                                                        <span>Discount: {discount_price}</span>
                                                    </div>
                                                    <div className="card-body">
                                                         <p className='price-desc'>{details.slice(0,200)}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <button className='btn-pricing'>Select Plane</button>
                                                    </div>
                                                </div>
                                                
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;