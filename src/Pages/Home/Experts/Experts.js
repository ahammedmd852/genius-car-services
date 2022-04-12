import React from 'react';
import expert1 from '../../../images/expert-1.jpg';
import expert2 from '../../../images/expert-2.jpg';
import expert3 from '../../../images/expert-3.jpg';
import expert4 from '../../../images/expert-4.jpg';
import expert5 from '../../../images/expert-5.jpg';
import expert6 from '../../../images/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Will Smith', img: expert1 },
        { id: 2, name: 'Hubert Smith', img: expert2 },
        { id: 3, name: 'Will Smoke', img: expert3 },
        { id: 4, name: 'Clark', img: expert4 },
        { id: 5, name: 'Dwyen', img: expert5 },
        { id: 6, name: 'Jaccy Smith', img: expert6 }
    ]
    return (
        <div className='container'>
            <h1 className='text-primary text-center'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;