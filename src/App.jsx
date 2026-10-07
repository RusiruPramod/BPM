import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ToastContainer from './components/common/ToastContainer';
import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import HighlandSpotlight from './components/HighlandSpotlight';
import DestinationsGrid from './components/DestinationsGrid';
import DiyalumaAdventureSection from './components/DiyalumaAdventureSection';
import VehicleHireSection from './components/VehicleHireSection';
import WildlifeSafariSection from './components/WildlifeSafariSection';
import CoastalParadiseSection from './components/CoastalParadiseSection';
import PhotoGallery from './components/PhotoGallery';
import GuestSmiles from './components/GuestSmiles';
import TravelFilmstripMarquee from './components/TravelFilmstripMarquee';
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
        {/* 1. Hero Slideshow - 4 High-Res Images */}
        <HeroSection />

        {/* 2. Key Stats & Certifications */}
        <StatsCounter />

        {/* 3. Central Highlands & Ella Waterfall Edge - 1 High-Res Image Banner */}
        <HighlandSpotlight />

        {/* 4. Destinations Grid - 6 Unique Destination Images */}
        <DestinationsGrid />

        {/* 5. Diyaluma Rock Pools & Waterfall Adventure - 6 Adventure Mosaic Images */}
        <DiyalumaAdventureSection />

        {/* 7. Luxury Vehicle Fleet & BIA Airport Transfer - 2 BIA Airport Transfer Images */}
        <VehicleHireSection />

        {/* 8. Wildlife Safari Expeditions - 4 Wildlife Tracking Images */}
        <WildlifeSafariSection />

        {/* 9. Southern Coastline & Mirissa Bay - 7 Coastal Sunshine Images */}
        <CoastalParadiseSection />

        {/* 10. Sri Lanka Photo Gallery - 4 Scenery Images in 1 Row */}
        <PhotoGallery />

        {/* 11. Guest Smiles - 4 Authentic Happy Guest Photos in 1 Row */}
        <GuestSmiles />

        {/* 12. Island Travel Moments - 7 Filmstrip Marquee Images */}
        <TravelFilmstripMarquee />

        {/* 13. Customer Reviews & Testimonials */}
        <ReviewSection />

        {/* 14. Interactive Location & Island Map */}
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
