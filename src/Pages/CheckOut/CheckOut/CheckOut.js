import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    return (
        <div>
            <h1>Please Book: {service.name}</h1>
            <form>
                <input type="text" name="name" placeholder='Your Name' required />
            </form>
        </div>
    );
};

export default CheckOut;