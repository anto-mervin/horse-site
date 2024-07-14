import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BookSection from "./components/BookSection";
import BookingForm from "./components/BookingForm";
import MyBookings from "./components/MyBookings";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <BookSection />
            </>
          }
        ></Route>

        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </>
  );
};

export default App;
