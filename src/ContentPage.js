import React from "react";
import { Link } from "react-router-dom";
import "./content.css"
function ContentPage() {
  // Define some dummy data for the hotel
  const hotel = {
    title: "Hotel Paradise",
    description: "A luxury hotel with stunning views and amenities",
    location: "Vijayawada, Andhra Pradesh, India",
    price: "₹10,000 per night",
    photo: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", // A random image from the internet
  };

  // Define a function to handle button click
  

  return (
    <div className="home-page">
      <img src={hotel.photo} alt="Hotel photo" className="hotel-photo" />
      <h1 className="hotel-title">{hotel.title}</h1>
      <p className="hotel-description">{hotel.description}</p>
      <p className="hotel-location">{hotel.location}</p>
      <p className="hotel-price">{hotel.price}</p>
      <Link to= '/content/bookNow'><button className="book-now-button">Book Now</button></Link>
    </div>
  );
}

export default ContentPage;
