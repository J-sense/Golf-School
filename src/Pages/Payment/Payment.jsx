import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {

    

    return (
        <div>

            <Helmet>
                <title>Yoku | Payment Page</title>
            </Helmet>

            <h1 className="text-xl mt-5 mb-7 lg:mb-9 font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Class <span className="text-teal-500">Payment</span></h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;