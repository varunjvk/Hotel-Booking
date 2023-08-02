import React, { useState } from 'react';
import "../Pay.css"

const PaymentPage = () => {
    const [paymentOption, setPaymentOption] = useState(''); // To store the selected payment option
    const [upiId, setUpiId] = useState('');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardName: '',
        cvv: '',
        expireMonth: '',
        expireYear: '',
    });
    const [netbankingDetails, setNetbankingDetails] = useState({
        username: '',
        password: '',
    });

    const handleOptionChange = (e) => {
        setPaymentOption(e.target.value);
    };

    const handleUpiIdChange = (e) => {
        setUpiId(e.target.value);
    };

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({ ...cardDetails, [name]: value });
    };

    const handleNetbankingChange = (e) => {
        const { name, value } = e.target;
        setNetbankingDetails({ ...netbankingDetails, [name]: value });
    };

    const handlePayment = () => {
        // Handle the payment based on the selected option and the provided details
        switch (paymentOption) {
            case 'upi':
                // Handle UPI payment with upiId
                console.log(`Perform UPI payment with UPI ID: ${upiId}`);
                break;
            case 'card':
                // Handle Credit/Debit card payment with cardDetails
                console.log(`Perform Credit/Debit card payment with card details:`, cardDetails);
                break;
            case 'netbanking':
                // Handle Netbanking payment with netbankingDetails
                console.log(`Perform Netbanking payment with netbanking details:`, netbankingDetails);
                break;
            default:
                // Handle the case where no option is selected
                console.log('Please select a payment option.');
                break;
        }
    };

    return (
        <div className='container'>
            <h2>Select Payment Option:</h2>
            <label>
                <input
                    type="radio"
                    name="paymentOption"
                    value="upi"
                    checked={paymentOption === 'upi'}
                    onChange={handleOptionChange}
                />
                UPI
            </label>
            <label>
                <input
                    type="radio"
                    name="paymentOption"
                    value="card"
                    checked={paymentOption === 'card'}
                    onChange={handleOptionChange}
                />
                Credit/Debit
            </label>
            <label>
                <input
                    type="radio"
                    name="paymentOption"
                    value="netbanking"
                    checked={paymentOption === 'netbanking'}
                    onChange={handleOptionChange}
                />
                Netbanking
            </label>

            {paymentOption === 'upi' && (
                <div>
                    <h3>UPI Payment</h3>
                    <input
                        type="text"
                        placeholder="Enter UPI ID"
                        value={upiId}
                        onChange={handleUpiIdChange}
                    />
                    <button onClick={handlePayment}>Pay</button>
                </div>
            )}

            {paymentOption === 'card' && (
                <div className='card'>
                    <h3>Credit/Debit Card Payment</h3>
                    <input
                        type="text"
                        placeholder="Card Number"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleCardChange}
                    />
                    <input
                        type="text"
                        placeholder="Name on Card"
                        name="cardName"
                        value={cardDetails.cardName}
                        onChange={handleCardChange}
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                    />
                    <input
                        type="text"
                        placeholder="Expiry Month"
                        name="expireMonth"
                        value={cardDetails.expireMonth}
                        onChange={handleCardChange}
                    />
                    <input
                        type="text"
                        placeholder="Expiry Year"
                        name="expireYear"
                        value={cardDetails.expireYear}
                        onChange={handleCardChange}
                    />
                    <button onClick={handlePayment}>Pay</button>
                </div>
            )}

            {paymentOption === 'netbanking' && (
                <div>
                    <h3>Netbanking Payment</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={netbankingDetails.username}
                        onChange={handleNetbankingChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={netbankingDetails.password}
                        onChange={handleNetbankingChange}
                    />
                    <button onClick={handlePayment}>Pay</button>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;