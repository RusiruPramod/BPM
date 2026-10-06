import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ToastContainer from './components/common/ToastContainer';
import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import DestinationsGrid from './components/DestinationsGrid';
import ToursSection from './components/ToursSection';
import VehicleHireSection from './components/VehicleHireSection';
import PhotoGallery from './components/PhotoGallery';
import ReviewSection from './components/ReviewSection';
import GoogleMapSection from './components/GoogleMapSection';
import BookingModal from './components/BookingModal';
import BookingTrackerModal from './components/BookingTrackerModal';
import DestinationDetailModal from './components/DestinationDetailModal';
import TourDetailModal from './components/TourDetailModal';
import AdminAuthModal from './components/admin/AdminAuthModal';
import AdminDashboard from './components/admin/AdminDashboard';

function MainLayout() {
  const { currentRole } = useApp();

  if (currentRole === 'admin') {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <AdminDashboard />
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsCounter />
        <DestinationsGrid />
        <ToursSection />
        <VehicleHireSection />
        <PhotoGallery />
        <ReviewSection />
        <GoogleMapSection />
      </main>
      <Footer />

      {/* Global Modals */}
      <BookingModal />
      <BookingTrackerModal />
      <DestinationDetailModal />
      <TourDetailModal />
      <AdminAuthModal />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
