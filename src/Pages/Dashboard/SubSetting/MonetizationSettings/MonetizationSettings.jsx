import React from 'react';
import './monetizationSettings.css'

const MonetizationSettings = () => {
    return (
        <form className='monetizationSetting'>
             <div className="row">
                <div className="col-md-12">
                    <div>
                        <label htmlFor="subscribe">Subscription Price (How much users will pay to subscribe to your channel?)</label>  
                        <input type="text" className='form-control'  placeholder='0' />  
                    </div>  
                </div>
                <hr />
                <button className='btn btn-primary'>Save</button>
            </div> 
        </form>
    );
};

export default MonetizationSettings;