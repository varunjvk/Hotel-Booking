import React from "react";
import "./index.css";
import SignUp from "./SignUp";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HelpPage from "./HelpPage";
import ContentPage from "./ContentPage";
import BookingPage from "./cnts/BookingPage";
import PaymentPage from "./cnts/PaymentPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUp/Login" element={<Login/>}/>
          <Route path="/helpPage" element={<HelpPage/>}/>
          <Route path="/content" element={<ContentPage />} />
          <Route path="/content/bookNow" element={<BookingPage />} />
          <Route path="/content/bookNow/payment" element={<PaymentPage />} />
          
          {/* <Login/> */}
          {/* <View/> */}
          {/* <SignUp/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
