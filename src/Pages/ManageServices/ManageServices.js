import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const uri = `http://localhost:5000/service/${id}`;
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                });
        };
    };

    return (
        <div className='w-50 mx-auto'>
            <h1>Manage Your Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>x</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;