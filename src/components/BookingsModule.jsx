import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from './Footer';
import { Store } from "../App";
import Context from "../Context/axios";


const BookingsModule = () => {
  const { isAuth } = useContext(Store);
  const [expandedRow, setExpandedRow] = useState(null);
  const [bookingsdata, setBookingsdata] = useState([]);
  const [loading, setLoading] = useState(true);



  // Fetch bookings data
  const fetchBookings = async () => {
    console.log(isAuth)
    try {
      const response = await axios.get(`${Context}/client/appointments`, {
        headers: {
          Authorization: `Bearer ${isAuth}`,
        },
      });
      setBookingsdata(response.data.appointments); 
      console.log(response.data.appointments)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setLoading(false);
    }
  };

  // Update booking status
  const updateStatus = async (appointmentUUID, newStatus) => {
    try {
      await axios.patch(
        `${Context}/client/update-appointments-status`,
        { appointment_uuid: appointmentUUID, new_status: newStatus },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${isAuth}`,
          },
        }
      );
      alert('Status updated successfully!');
      fetchBookings(); // Refresh the data
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status. Please try again.');
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Booked':
        return 'text-[#C5B798]';
      case 'Cancelled':
        return 'text-red-500';
      case 'Completed':
        return 'text-green-500';
      default:
        return 'text-white';
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black p-4 md:p-8 mt-[100px]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-white text-2xl font-medium">Bookings</h1>
            <button className="px-4 py-2 border border-[#C5B798] text-[#C5B798] flex items-center gap-2 text-sm">
              Filter
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-red text-center">Loading...</div>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#C5B798]">
                    <th className="text-left py-4 text-gray-400 font-normal text-sm">Booking ID</th>
                    <th className="text-left py-4 text-gray-400 font-normal text-sm">Salon</th>
                    <th className="text-left py-4 text-gray-400 font-normal text-sm">Slot Details</th>
                    <th className="text-left py-4 text-gray-400 font-normal text-sm">Services</th>
                    <th className="text-left py-4 text-gray-400 font-normal text-sm">Pricing</th>
                    <th className="text-left py-4 text-gray-400 font-normal text-sm">Status</th>
                    <th className="w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {bookingsdata.map((booking) => (
                    <React.Fragment key={booking.appointment_uuid}>
                      <tr className="border-b border-[#C5B798]">
                        <td className="py-4 text-gray-300">{booking.appointment_booking_id}</td>
                        <td className="py-4 text-gray-300">{booking.salon_name}</td>
                        <td className="py-4 text-gray-300">
                          {booking.appointment_timing}, {booking.appointment_date}
                        </td>
                        <td className="py-4">
                          <div className="flex flex-wrap gap-2">
                            {booking.appointment_services.map((service) => (
                              <span
                                key={service.service_name}
                                className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-sm"
                              >
                                {service.service_name}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 text-gray-300">{booking.appointment_original_price}</td>
                        <td className="py-4">
                          <span className={getStatusColor(booking.appointment_payment_status)}>
                            {booking.appointment_payment_status}
                          </span>
                        </td>
                        <td className="py-4">
                          <button
                            onClick={() =>
                              setExpandedRow(expandedRow === booking.appointment_uuid ? null : booking.appointment_uuid)
                            }
                            className="text-gray-400"
                          >
                            {expandedRow === booking.appointment_uuid ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        </td>
                      </tr>
                      {expandedRow === booking.appointment_uuid && (
                        <tr className="bg-gray-900/50">
                          <td colSpan={7} className="py-4 px-8">
                            <div className="space-y-4">
                              {/* Status Update Options */}
                              <div className="flex gap-4">
                                {['Booked', 'Cancelled', 'Completed'].map((status) => (
                                  <label
                                    key={status}
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => updateStatus(booking.appointment_uuid, status)}
                                  >
                                    <input type="radio" name="status" className="hidden" />
                                    <div
                                      className={`w-4 h-4 border ${
                                        status === 'Booked'
                                          ? 'border-[#C5B798]'
                                          : status === 'Cancelled'
                                          ? 'border-red-500'
                                          : 'border-green-500'
                                      } rounded-full`}
                                    ></div>
                                    <span
                                      className={`${
                                        status === 'Booked'
                                          ? 'text-[#C5B798]'
                                          : status === 'Cancelled'
                                          ? 'text-red-500'
                                          : 'text-green-500'
                                      }`}
                                    >
                                      {status}
                                    </span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingsModule;
