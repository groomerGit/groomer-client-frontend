import React, { useState, useContext } from "react";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Store } from "../App";
import Context from "../Context/axios";
import Footer from "./Footer";

const RevenueStats = () => {
  const { isAuth } = useContext(Store);
  const [fromDate, setFromDate] = useState(null); // State for "From" date
  const [toDate, setToDate] = useState(null); // State for "To" date
  const [revenue, setRevenue] = useState(null); // State for revenue
  const [bookings, setBookings] = useState(null); // State for total bookings

  const handleShowRevenue = async () => {
    // Define the API URL and the Authorization token
    const apiUrl = `${Context}/client/revenue`;
  

    try {
      const response = await fetch(apiUrl, {
        method: "GET", 
        headers: {
          Authorization: `Bearer ${isAuth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromDate,
          toDate,
        }), // Sending the selected dates in the body
      });

      const data = await response.json();
      if (response.ok) {
        setRevenue(data.data.revenue);
        setBookings(data.data.totalAppointments);
      } else {
        console.error("Failed to fetch data:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-black p-4 md:p-8 mt-[120px]">
      <div className="max-w-4xl mx-auto">
        {/* Date Selection Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {/* From Date */}
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">From</span>
            <div className="relative">
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                placeholderText="Select a date"
                dateFormat="yyyy-MM-dd"
                className="bg-transparent border-b border-gray-700 text-gray-400 p-2 pr-8 w-48 focus:outline-none focus:border-[#C5B798]"
              />
              <Calendar
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#C5B798]"
                size={20}
              />
            </div>
          </div>

          {/* To Date */}
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">To</span>
            <div className="relative">
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                placeholderText="Select a date"
                dateFormat="yyyy-MM-dd"
                className="bg-transparent border-b border-gray-700 text-gray-400 p-2 pr-8 w-48 focus:outline-none focus:border-[#C5B798]"
              />
              <Calendar
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#C5B798]"
                size={20}
              />
            </div>
          </div>

          {/* Show Revenue Button */}
          <button
            className="px-6 py-2 bg-[#C5B798] text-black text-sm font-medium rounded hover:bg-[#b5a788] transition-colors"
            onClick={handleShowRevenue}
          >
            Show Revenue
          </button>
        </div>

        {/* Divider */}
        <hr className="border-t border-[#C5B798] mb-8" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Revenue Card */}
          <div className="space-y-2">
            <h2 className="text-white text-sm font-medium">Revenue</h2>
            <p className="text-[#C5B798] text-5xl font-light">
              ₹{revenue !== null ? revenue : "0"}
            </p>
          </div>

          {/* Bookings Card */}
          <div className="space-y-2">
            <h2 className="text-white text-sm font-medium">Bookings</h2>
            <p className="text-[#C5B798] text-5xl font-light">
              {bookings !== null ? bookings : "0"}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default RevenueStats;
