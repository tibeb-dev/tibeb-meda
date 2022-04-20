import StripeCheckout from "react-stripe-checkout"
import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const STRIP_PUBLIC_KEY = "pk_test_51Ki1NSFno1XGHwKH0ppEtf94m6xlFs9M6vdVi8Gay2N8Vn60bMjUkKNhdBCASu7xk7FpBZHZClgS6zdgTuesC15500jGjsfMSC"

const Pay = () => {
    const [stripeToken, setstripeToken] = useState(null);
    const navigate = useNavigate();
    const onToken = (token) => {
        setstripeToken(token)

    }
    useEffect(() => {
        const makeRequest = async () => {
            const res = await axios.post("http://localhost:5050/api/checkout/payment", {
                tokenId: stripeToken.id,
                amount: 2000,
            })
            navigate("/success")
        }
        stripeToken && makeRequest()
    }, [stripeToken, navigate]);
    return (

        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            {stripeToken ? (
                <span> processing .Please wait ... </span>
            ) :
                <StripeCheckout
                    name="kidshop"
                    image="https://newstarpaintings.com/images/virtuemart/product/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg"
                    billingAddress
                    shippingAddress
                    description="your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={STRIP_PUBLIC_KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white"
                        }}>
                        PAY NOW
                    </button>
                </StripeCheckout>
            }
        </div>
    );
}
export default Pay;
