// BookingPage.js
import React, { useState } from 'react';
import '../BookNow.css';
import { Link } from 'react-router-dom';

// BookingPage.js


const BookingPage = () => {
    const [name, setName] = useState('');
    const [checkinDate, setCheckinDate] = useState('');
    const [checkoutDate, setCheckoutDate] = useState('');
    const [age, setAge] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');

    const handleContinue = () => {
        // Add logic for handling the "Continue to Payment" button click here
        console.log('Continue to Payment clicked!');
        // You can perform further actions, like validation, API calls, etc.
    };

    return (
        <div className="booking-container">
            <h2>Hotel Booking</h2>
            <div className="input-container">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Check-in Date:</label>
                <input type="date" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Checkout Date:</label>
                <input type="date" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Number of People:</label>
                <input type="number" value={numOfPeople} onChange={(e) => setNumOfPeople(e.target.value)} />
            </div>
            <Link to='/content/bookNow/payment'><button className="continue-button" onClick={handleContinue}>
                Continue to Payment
            </button></Link>
        </div>
    );
};

export default BookingPage;