import React, { useState, useEffect, useContext } from 'react';
import { Calendar } from 'lucide-react';
import { Store } from "../App";
import Context from "../Context/axios";

const MysalonModule = () => {
    const { isAuth } = useContext(Store);
    const [isOpen, setIsOpen] = useState(true);
    const [salonData, setSalonData] = useState(null);
    const [slots, setSlots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchSalonData = async () => {
            try {
                const response = await fetch(`${Context}/client/mysalon`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${isAuth}`
                    },
                });
                const result = await response.json();

                if (result.code === 200) {
                    setSalonData(result.data.salon);
                    setSlots(result.data.slots || []);
                    setIsOpen(result.data.salon.is_open);
                } else {
                    console.error('Failed to fetch salon data:', result.message);
                }
            } catch (error) {
                console.error('Error fetching salon data:', error);
            }
        };

        fetchSalonData();
    }, [isAuth]);

    const handleToggle = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${Context}/client/toggleSalonHoliday`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${isAuth}`,
                    'Content-Type': 'application/json'
                },
            });

            const result = await response.json();

            if (result.code === 200) {
                setIsOpen((prevState) => !prevState);
            } else {
                console.error('Failed to toggle salon status:', result.message);
            }
        } catch (error) {
            console.error('Error toggling salon status:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSlotToggle = async (slotUuid) => {
        setIsLoading(true);
        try {
            const response = await fetch(`${Context}/client/toggle-slot`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${isAuth}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uuid: slotUuid }),
            });

            const result = await response.json();

            if (result.code === 200) {
                setSlots((prevSlots) =>
                    prevSlots.map((slot) =>
                        slot.uuid === slotUuid
                            ? { ...slot, is_active: !slot.is_active }
                            : slot
                    )
                );
            } else {
                console.error('Failed to toggle slot status:', result.message);
            }
        } catch (error) {
            console.error('Error toggling slot status:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black p-4 md:p-8 mt-[120px]">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-white text-xl md:text-2xl font-semibold">
                        {salonData?.salon_name || 'Loading...'}{' '}
                        <span className="text-gray-400 text-sm">
                            ({isOpen ? 'open' : 'closed'})
                        </span>
                    </h1>
                    <div
                        className={`w-12 h-6 rounded-full p-1 cursor-pointer ${
                            isLoading ? 'bg-gray-400' : 'bg-white'
                        }`}
                        onClick={!isLoading ? handleToggle : null}
                    >
                        <div
                            className={`w-4 h-4 rounded-full bg-[#deb887] transition-transform duration-200 ease-in-out ${
                                isOpen ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        ></div>
                    </div>
                </div>

                {/* <div className="text-gray-300 space-y-2 mb-8">
                    <p>Email: guruhairstyle@gmail.com</p>
                    <p>Mobile: +91 9555778844</p>
                </div> */}
                {salonData && (
                   <div className="text-gray-300 space-y-4 mb-8">
                       <p><strong>Email:</strong> {salonData.salon_email}</p>
                       <p><strong>Mobile:</strong> {salonData.salon_owner_mobile}</p>
                   </div>
                )}

                <div className="mb-8">
                    <h2 className="text-gray-300 mb-4">
                        Absence <span className="text-gray-500">(sweet string to save)</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Date & Time"
                                    className="w-full bg-transparent border border-[#C5B798] text-white p-2 rounded"
                                />
                                <Calendar
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#C5B798]"
                                    size={20}
                                />
                            </div>
                        </div>
                        <div className="flex items-center text-white mx-2">To:</div>
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Date & Time"
                                    className="w-full bg-transparent border border-[#C5B798] text-white p-2 rounded"
                                />
                                <Calendar
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#C5B798]"
                                    size={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Divider */}
                 <hr className="border-t border-[#C5B798] mb-8" />

                <div className="space-y-4">
                    {slots.length > 0 ? (
                        slots.map((slot, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center border border-gray-700 p-2 rounded"
                            >
                                <div className="text-white">
                                    Slot {index + 1}: {slot.time || 'N/A'}{' '}
                                    <span
                                        className={`ml-2 ${
                                            slot.is_active ? 'text-green-500' : 'text-red-500'
                                        }`}
                                    >
                                        {slot.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleSlotToggle(slot.uuid)}
                                    className={`px-4 py-1 text-sm rounded ${
                                        slot.is_active
                                            ? 'bg-red-500 text-white'
                                            : 'bg-green-500 text-white'
                                    }`}
                                    disabled={isLoading}
                                >
                                    {slot.is_active ? 'Disable' : 'Enable'}
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-gray-500 text-center">
                            No slots available
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MysalonModule;
