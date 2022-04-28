import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/useServiceDetails';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: "Kutob Uddin",
    //     email: "kutob@uddin.com",
    //     address: "Mullar char, munshiganj",
    //     phone: "01888888888"
    // });

    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // };
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            serviceId: serviceId,
            service: user.service,
            address: event.target.address.value,
            phone: event.target.phone.value,
        };
    };

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Book: {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" placeholder='Your Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={user.email} name="email" placeholder='Your email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Your service' required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='Your address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='Your phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;