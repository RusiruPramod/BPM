import React, { createContext, useContext, useState, useEffect } from 'react';
import { DataService } from '../services/dataService';
import confetti from 'canvas-confetti';

const AppContext = createContext(null);

export const RATES = {
  USD: 1,
  LKR: 300,
  EUR: 0.92,
  GBP: 0.78
};

export const SYMBOLS = {
  USD: '$',
  LKR: 'Rs. ',
  EUR: '€',
  GBP: '£'
};

export function AppProvider({ children }) {
  const [data, setData] = useState(() => DataService.loadAllData());
  const [currency, setCurrency] = useState('USD');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // home, destinations, tours, vehicles, gallery, reviews, contact
  const [currentRole, setCurrentRole] = useState('user'); // 'user' or 'admin'
  
  // Modals state
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });
  const [trackerModal, setTrackerModal] = useState({ isOpen: false, bookingId: '' });
  const [reviewModal, setReviewModal] = useState({ isOpen: false });
  const [adminAuthModal, setAdminAuthModal] = useState({ isOpen: false });
  const [selectedDestinationModal, setSelectedDestinationModal] = useState(null);
  const [selectedTourModal, setSelectedTourModal] = useState(null);
  
  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (title, message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Currency Converter helper
  const formatPrice = (priceUSD, priceLKR) => {
    if (currency === 'LKR') {
      const val = priceLKR || priceUSD * RATES.LKR;
      return `${SYMBOLS.LKR}${val.toLocaleString()}`;
    } else if (currency === 'EUR') {
      const val = Math.round(priceUSD * RATES.EUR);
      return `${SYMBOLS.EUR}${val.toLocaleString()}`;
    } else if (currency === 'GBP') {
      const val = Math.round(priceUSD * RATES.GBP);
      return `${SYMBOLS.GBP}${val.toLocaleString()}`;
    } else {
      return `${SYMBOLS.USD}${priceUSD.toLocaleString()}`;
    }
  };

  // Admin Auth
  const adminLogin = (pin) => {
    if (pin === 'admin123' || pin === '1234') {
      setIsAdminLoggedIn(true);
      setCurrentRole('admin');
      setAdminAuthModal({ isOpen: false });
      addToast("Welcome Admin", "Logged in to BP Tours Control Panel.", "success");
      return true;
    } else {
      addToast("Authentication Failed", "Incorrect Security PIN.", "error");
      return false;
    }
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentRole('user');
    addToast("Logged Out", "Returned to Customer View Mode.", "info");
  };

  // Booking Modal Triggers
  const openBookingModal = (service = null) => {
    setBookingModal({ isOpen: true, service });
  };
  const closeBookingModal = () => {
    setBookingModal({ isOpen: false, service: null });
  };

  // Create Booking
  const createBooking = (bookingObj) => {
    const newId = `BP-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking = {
      ...bookingObj,
      id: newId,
      bookingStatus: 'Pending',
      paymentStatus: bookingObj.paymentMethod === 'payhere' ? 'Paid (PayHere)' : 'Pay on Arrival',
      createdAt: new Date().toISOString(),
      driverAssigned: 'Bandara Premathilaka'
    };

    const updatedBookings = [newBooking, ...data.bookings];
    setData(prev => ({ ...prev, bookings: updatedBookings }));
    DataService.saveBookings(updatedBookings);

    // Create Notification
    const newNotif = {
      id: `notif-${Date.now()}`,
      title: "New Booking Created!",
      message: `${newBooking.customerName} requested ${newBooking.serviceTitle} (${newId}).`,
      time: "Just now",
      unread: true,
      type: "booking"
    };
    const updatedNotifs = [newNotif, ...data.notifications];
    setData(prev => ({ ...prev, notifications: updatedNotifs }));
    DataService.saveNotifications(updatedNotifs);

    // Confetti celebration effect
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    addToast("Booking Request Submitted!", `Your Booking Ref is ${newId}. Our team will contact you shortly on WhatsApp.`, "success");
    return newBooking;
  };

  // Update Booking Status
  const updateBookingStatus = (id, newStatus, newPaymentStatus) => {
    const updatedBookings = data.bookings.map(b => {
      if (b.id === id) {
        return { 
          ...b, 
          bookingStatus: newStatus || b.bookingStatus, 
          paymentStatus: newPaymentStatus || b.paymentStatus 
        };
      }
      return b;
    });
    setData(prev => ({ ...prev, bookings: updatedBookings }));
    DataService.saveBookings(updatedBookings);
    addToast("Booking Updated", `Status for ${id} changed to ${newStatus}.`, "info");
  };

  // Destinations Management
  const addDestination = (destObj) => {
    const newDest = { ...destObj, id: `dest-${Date.now()}`, rating: 5.0, reviewsCount: 1 };
    const updated = [newDest, ...data.destinations];
    setData(prev => ({ ...prev, destinations: updated }));
    DataService.saveDestinations(updated);
    addToast("Destination Added", `${destObj.name} published live on website.`, "success");
  };

  const updateDestination = (id, updatedFields) => {
    const updated = data.destinations.map(d => d.id === id ? { ...d, ...updatedFields } : d);
    setData(prev => ({ ...prev, destinations: updated }));
    DataService.saveDestinations(updated);
    addToast("Destination Updated", "Changes saved successfully.", "success");
  };

  const deleteDestination = (id) => {
    const updated = data.destinations.filter(d => d.id !== id);
    setData(prev => ({ ...prev, destinations: updated }));
    DataService.saveDestinations(updated);
    addToast("Destination Deleted", "Destination removed.", "info");
  };

  // Tours Management
  const addTour = (tourObj) => {
    const newTour = { ...tourObj, id: `tour-${Date.now()}`, rating: 5.0, reviewsCount: 1 };
    const updated = [newTour, ...data.tours];
    setData(prev => ({ ...prev, tours: updated }));
    DataService.saveTours(updated);
    addToast("Tour Package Added", `${tourObj.title} published live.`, "success");
  };

  const updateTour = (id, updatedFields) => {
    const updated = data.tours.map(t => t.id === id ? { ...t, ...updatedFields } : t);
    setData(prev => ({ ...prev, tours: updated }));
    DataService.saveTours(updated);
    addToast("Tour Package Updated", "Package changes saved.", "success");
  };

  const deleteTour = (id) => {
    const updated = data.tours.filter(t => t.id !== id);
    setData(prev => ({ ...prev, tours: updated }));
    DataService.saveTours(updated);
    addToast("Tour Package Deleted", "Tour removed.", "info");
  };

  // Vehicle Fleet Management
  const addVehicle = (vehObj) => {
    const newVeh = { ...vehObj, id: `veh-${Date.now()}` };
    const updated = [newVeh, ...data.vehicles];
    setData(prev => ({ ...prev, vehicles: updated }));
    DataService.saveVehicles(updated);
    addToast("Vehicle Added", `${vehObj.name} added to fleet.`, "success");
  };

  const updateVehicle = (id, updatedFields) => {
    const updated = data.vehicles.map(v => v.id === id ? { ...v, ...updatedFields } : v);
    setData(prev => ({ ...prev, vehicles: updated }));
    DataService.saveVehicles(updated);
    addToast("Vehicle Updated", "Fleet updates saved.", "success");
  };

  const deleteVehicle = (id) => {
    const updated = data.vehicles.filter(v => v.id !== id);
    setData(prev => ({ ...prev, vehicles: updated }));
    DataService.saveVehicles(updated);
    addToast("Vehicle Deleted", "Vehicle removed from fleet.", "info");
  };

  // Gallery Management
  const addGalleryItem = (galObj) => {
    const newItem = { ...galObj, id: `gal-${Date.now()}` };
    const updated = [newItem, ...data.gallery];
    setData(prev => ({ ...prev, gallery: updated }));
    DataService.saveGallery(updated);
    addToast("Photo Added", "Image added to photo gallery.", "success");
  };

  const deleteGalleryItem = (id) => {
    const updated = data.gallery.filter(g => g.id !== id);
    setData(prev => ({ ...prev, gallery: updated }));
    DataService.saveGallery(updated);
    addToast("Photo Removed", "Image removed from gallery.", "info");
  };

  // Customer Reviews
  const addReview = (reviewObj) => {
    const newReview = {
      ...reviewObj,
      id: `rev-${Date.now()}`,
      date: "Just now",
      verified: true,
      source: "Direct Booking"
    };
    const updated = [newReview, ...data.reviews];
    setData(prev => ({ ...prev, reviews: updated }));
    DataService.saveReviews(updated);
    addToast("Review Submitted", "Thank you! Your review is now live on our site.", "success");
  };

  return (
    <AppContext.Provider value={{
      ...data,
      currency,
      setCurrency,
      formatPrice,
      activeTab,
      setActiveTab,
      currentRole,
      setCurrentRole,
      isAdminLoggedIn,
      adminLogin,
      adminLogout,
      bookingModal,
      openBookingModal,
      closeBookingModal,
      trackerModal,
      setTrackerModal,
      reviewModal,
      setReviewModal,
      adminAuthModal,
      setAdminAuthModal,
      selectedDestinationModal,
      setSelectedDestinationModal,
      selectedTourModal,
      setSelectedTourModal,
      createBooking,
      updateBookingStatus,
      addDestination,
      updateDestination,
      deleteDestination,
      addTour,
      updateTour,
      deleteTour,
      addVehicle,
      updateVehicle,
      deleteVehicle,
      addGalleryItem,
      deleteGalleryItem,
      addReview,
      toasts,
      addToast
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
