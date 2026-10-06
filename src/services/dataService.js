import { 
  INITIAL_BRANDING, 
  INITIAL_DESTINATIONS, 
  INITIAL_TOURS, 
  INITIAL_VEHICLES, 
  INITIAL_GALLERY, 
  INITIAL_REVIEWS, 
  INITIAL_BOOKINGS 
} from '../data/initialData';
import { db } from './firebase';
import { collection, getDocs, doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const STORAGE_KEYS = {
  BRANDING: 'bp_tours_branding_v2',
  DESTINATIONS: 'bp_tours_destinations_v2',
  TOURS: 'bp_tours_tours_v2',
  VEHICLES: 'bp_tours_vehicles_v2',
  GALLERY: 'bp_tours_gallery_v2',
  REVIEWS: 'bp_tours_reviews_v2',
  BOOKINGS: 'bp_tours_bookings_v2',
  NOTIFICATIONS: 'bp_tours_notifications_v2'
};

// Helper to load or initialize local data
function getOrInitStorage(key, initialVal) {
  try {
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored);
    localStorage.setItem(key, JSON.stringify(initialVal));
    return initialVal;
  } catch (e) {
    console.error(`Error reading ${key} from storage:`, e);
    return initialVal;
  }
}

function saveStorage(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error(`Error saving ${key} to storage:`, e);
  }
}

export const DataService = {
  // Load initial dataset
  loadAllData: () => {
    return {
      branding: getOrInitStorage(STORAGE_KEYS.BRANDING, INITIAL_BRANDING),
      destinations: getOrInitStorage(STORAGE_KEYS.DESTINATIONS, INITIAL_DESTINATIONS),
      tours: getOrInitStorage(STORAGE_KEYS.TOURS, INITIAL_TOURS),
      vehicles: getOrInitStorage(STORAGE_KEYS.VEHICLES, INITIAL_VEHICLES),
      gallery: getOrInitStorage(STORAGE_KEYS.GALLERY, INITIAL_GALLERY),
      reviews: getOrInitStorage(STORAGE_KEYS.REVIEWS, INITIAL_REVIEWS),
      bookings: getOrInitStorage(STORAGE_KEYS.BOOKINGS, INITIAL_BOOKINGS),
      notifications: getOrInitStorage(STORAGE_KEYS.NOTIFICATIONS, [
        { id: "notif-1", title: "New Booking Received!", message: "Emma Watson booked 7-Day Island Odyssey for Oct 15.", time: "10 mins ago", unread: true, type: "booking" },
        { id: "notif-2", title: "Airport Pickup Reminder", message: "BIA Airport Transfer scheduled for tomorrow morning.", time: "1 hour ago", unread: false, type: "system" }
      ])
    };
  },

  // Save updated items
  saveDestinations: (destinations) => saveStorage(STORAGE_KEYS.DESTINATIONS, destinations),
  saveTours: (tours) => saveStorage(STORAGE_KEYS.TOURS, tours),
  saveVehicles: (vehicles) => saveStorage(STORAGE_KEYS.VEHICLES, vehicles),
  saveGallery: (gallery) => saveStorage(STORAGE_KEYS.GALLERY, gallery),
  saveReviews: (reviews) => saveStorage(STORAGE_KEYS.REVIEWS, reviews),
  saveBookings: (bookings) => saveStorage(STORAGE_KEYS.BOOKINGS, bookings),
  saveBranding: (branding) => saveStorage(STORAGE_KEYS.BRANDING, branding),
  saveNotifications: (notifications) => saveStorage(STORAGE_KEYS.NOTIFICATIONS, notifications),

  // Reset to default data
  resetToDefault: () => {
    localStorage.clear();
    return DataService.loadAllData();
  }
};
