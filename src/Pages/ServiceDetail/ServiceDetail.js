import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        const uri = `http://localhost:5000/service/${serviceId}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h1>You are about to book: {service.name}</h1>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;