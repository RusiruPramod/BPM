import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, MapPin, Users, Car, CreditCard, ShieldCheck, CheckCircle2, MessageCircle, AlertTriangle } from 'lucide-react';
import { startPayHereCheckout } from '../services/payhere';

export default function BookingModal() {
  const { bookingModal, closeBookingModal, createBooking, formatPrice, vehicles, tours, branding } = useApp();

  if (!bookingModal.isOpen) return null;

  const prefill = bookingModal.service || {};

  // Form State
  const [step, setStep] = useState(1);
  const [serviceTitle, setServiceTitle] = useState(prefill.serviceTitle || "7-Day Ultimate Sri Lanka Island Odyssey");
  const [vehicleType, setVehicleType] = useState(prefill.vehicleType || "Premium KDH Luxury Van");
  const [pickupLocation, setPickupLocation] = useState(prefill.pickupLocation || "Bandaranaike International Airport (BIA)");
  const [dropoffLocation, setDropoffLocation] = useState(prefill.dropoffLocation || "Kandy / Ella / Galle");
  const [startDate, setStartDate] = useState(prefill.startDate || "");
  const [passengers, setPassengers] = useState(prefill.passengers || 2);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [specialNotes, setSpecialNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash"); // 'payhere' or 'cash'
  
  const [createdBookingResult, setCreatedBookingResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Price Calculation logic
  const selectedVehicleObj = vehicles.find(v => v.name === vehicleType) || vehicles[1];
  const selectedTourObj = tours.find(t => t.title === serviceTitle);

  const priceUSD = selectedTourObj ? selectedTourObj.priceUSD : (selectedVehicleObj ? selectedVehicleObj.dayRateUSD * 2 : 120);
  const priceLKR = selectedTourObj ? selectedTourObj.priceLKR : (selectedVehicleObj ? selectedVehicleObj.dayRateLKR * 2 : 36000);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const bookingPayload = {
      serviceTitle,
      serviceType: prefill.serviceType || "Tour / Vehicle Hire",
      vehicleType,
      pickupLocation,
      dropoffLocation,
      startDate,
      passengers,
      customerName,
      email,
      phone,
      country,
      specialNotes,
      paymentMethod,
      totalPriceUSD: priceUSD,
      totalPriceLKR: priceLKR
    };

    if (paymentMethod === 'payhere') {
      // Trigger PayHere Payment Flow
      startPayHereCheckout(
        { ...bookingPayload, id: `BP-${Math.floor(10000 + Math.random() * 90000)}` },
        (res) => {
          setIsProcessing(false);
          const result = createBooking({ ...bookingPayload, paymentStatus: 'Paid via PayHere' });
          setCreatedBookingResult(result);
          setStep(3);
        },
        (err) => {
          setIsProcessing(false);
          const result = createBooking(bookingPayload);
          setCreatedBookingResult(result);
          setStep(3);
        }
      );
    } else {
      setTimeout(() => {
        setIsProcessing(false);
        const result = createBooking(bookingPayload);
        setCreatedBookingResult(result);
        setStep(3);
      }, 500);
    }
  };

  const whatsappMessageUrl = createdBookingResult
    ? `https://wa.me/${branding.phoneFormattedWhatsapp}?text=${encodeURIComponent(
        `Hello Bandara! I just booked online on your website.\n*Booking Ref:* ${createdBookingResult.id}\n*Service:* ${createdBookingResult.serviceTitle}\n*Name:* ${createdBookingResult.customerName}\n*Date:* ${createdBookingResult.startDate}\n*Pickup:* ${createdBookingResult.pickupLocation}`
      )}`
    : '#';

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center animate-fade-in">
      <div className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-auto">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">BP Tours and Travels</span>
            <h3 className="text-xl font-bold font-serif-heading">
              {step === 3 ? "Booking Confirmed!" : "Complete Your Booking Request"}
            </h3>
          </div>
          <button
            onClick={closeBookingModal}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-rose-600 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Steps */}
        {step !== 3 ? (
          <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className={`flex items-center gap-2 text-xs font-bold ${step === 1 ? 'text-emerald-600' : 'text-slate-400'}`}>
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">1</span>
                <span>Trip Details</span>
              </div>
              <div className="h-0.5 w-12 bg-slate-200" />
              <div className={`flex items-center gap-2 text-xs font-bold ${step === 2 ? 'text-emerald-600' : 'text-slate-400'}`}>
                <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs">2</span>
                <span>Customer and Payment</span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Selected Package / Service</label>
                  <input
                    type="text"
                    value={serviceTitle}
                    onChange={(e) => setServiceTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Select Vehicle Type</label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500 cursor-pointer"
                  >
                    {vehicles.map(v => (
                      <option key={v.id} value={v.name}>{v.name} ({v.passengers})</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Pick-up Location</label>
                    <input
                      type="text"
                      required
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="e.g. BIA Airport Arrival Terminal"
                      className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Drop-off Destination</label>
                    <input
                      type="text"
                      required
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      placeholder="e.g. Kandy, Sigiriya, Galle, Hotel"
                      className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Travel Date</label>
                    <input
                      type="date"
                      required
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Passengers</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors mt-4"
                >
                  Continue to Customer Info →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Emma Watson"
                      className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Country</label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. United Kingdom"
                      className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. emma@example.com"
                      className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp / Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7911 123456"
                      className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Special Notes / Flight Number</label>
                  <textarea
                    rows="2"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    placeholder="Flight landing time, child seat requests, special stops..."
                    className="w-full bg-slate-50 border border-slate-200 text-sm font-medium rounded-xl p-3 outline-none focus:border-emerald-500"
                  ></textarea>
                </div>

                {/* Payment Option */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Payment Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`p-4 rounded-xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                      paymentMethod === 'cash' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200 bg-white'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={paymentMethod === 'cash'}
                        onChange={() => setPaymentMethod('cash')}
                        className="hidden"
                      />
                      <div className="font-bold text-slate-900 text-sm">Pay on Arrival</div>
                      <div className="text-[11px] text-slate-500">Pay cash directly to driver upon pickup.</div>
                    </label>

                    <label className={`p-4 rounded-xl border-2 cursor-pointer flex flex-col justify-between transition-all ${
                      paymentMethod === 'payhere' ? 'border-emerald-600 bg-emerald-50/50' : 'border-slate-200 bg-white'
                    }`}>
                      <input
                        type="radio"
                        name="payment"
                        value="payhere"
                        checked={paymentMethod === 'payhere'}
                        onChange={() => setPaymentMethod('payhere')}
                        className="hidden"
                      />
                      <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                        <span>PayHere Online</span>
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-[11px] text-slate-500">Visa / MasterCard / Online Checkout.</div>
                    </label>
                  </div>
                </div>

                {/* Price summary */}
                <div className="p-4 rounded-xl bg-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600 uppercase">Estimated Total</span>
                  <span className="text-xl font-extrabold text-emerald-600 font-serif-heading">
                    {formatPrice(priceUSD, priceLKR)}
                  </span>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {isProcessing ? "Processing..." : "Confirm Booking Request"}
                  </button>
                </div>
              </div>
            )}
          </form>
        ) : (
          /* Step 3: Success Confirmation */
          <div className="p-8 text-center space-y-6 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Booking Reference: {createdBookingResult?.id}
              </span>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900 mt-2">
                Thank You, {createdBookingResult?.customerName}!
              </h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed max-w-md mx-auto">
                Your booking request for <strong>{createdBookingResult?.serviceTitle}</strong> has been received by owner and driver <strong>Bandara Premathilaka</strong>.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Pick-up:</span>
                <span className="font-bold text-slate-800">{createdBookingResult?.pickupLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Destination:</span>
                <span className="font-bold text-slate-800">{createdBookingResult?.dropoffLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Date:</span>
                <span className="font-bold text-slate-800">{createdBookingResult?.startDate}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-2">
                <span className="text-slate-500 font-medium">Total Amount:</span>
                <span className="font-extrabold text-emerald-600 text-sm">
                  {formatPrice(createdBookingResult?.totalPriceUSD, createdBookingResult?.totalPriceLKR)}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={whatsappMessageUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Open WhatsApp Confirmation
              </a>

              <button
                onClick={closeBookingModal}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
