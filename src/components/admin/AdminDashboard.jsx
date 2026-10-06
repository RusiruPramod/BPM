import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  LayoutDashboard, CalendarCheck, MapPin, Compass, Car, Image as ImageIcon, Star, 
  Settings, LogOut, Plus, Trash2, Edit3, CheckCircle2, Clock, Upload, ArrowRight, ShieldCheck, DollarSign,
  Search, Bell, TrendingUp, Filter, Eye, ChevronRight, User, Phone, Globe
} from 'lucide-react';
import { uploadToR2Storage } from '../../services/r2Storage';

export default function AdminDashboard() {
  const { 
    bookings, 
    destinations, 
    tours, 
    vehicles, 
    gallery, 
    reviews, 
    branding, 
    updateBookingStatus, 
    addDestination, 
    deleteDestination, 
    addTour, 
    deleteTour, 
    addVehicle, 
    deleteVehicle, 
    addGalleryItem, 
    deleteGalleryItem,
    adminLogout,
    setCurrentRole,
    formatPrice,
    addToast
  } = useApp();

  const [adminTab, setAdminTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Form modal triggers
  const [showAddDestModal, setShowAddDestModal] = useState(false);
  const [showAddTourModal, setShowAddTourModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // New Destination Form
  const [newDestName, setNewDestName] = useState('');
  const [newDestCat, setNewDestCat] = useState('Heritage');
  const [newDestLoc, setNewDestLoc] = useState('');
  const [newDestDesc, setNewDestDesc] = useState('');
  const [newDestImg, setNewDestImg] = useState('');

  // New Tour Form
  const [newTourTitle, setNewTourTitle] = useState('');
  const [newTourDuration, setNewTourDuration] = useState('5 Days');
  const [newTourPriceUSD, setNewTourPriceUSD] = useState('350');
  const [newTourPriceLKR, setNewTourPriceLKR] = useState('105000');
  const [newTourDesc, setNewTourDesc] = useState('');
  const [newTourImg, setNewTourImg] = useState('');

  // R2 File Upload handler
  const handleFileUpload = async (e, setUrlCallback) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const url = await uploadToR2Storage(file, "uploads");
      setUrlCallback(url);
      addToast("R2 Media Uploaded", `File ${file.name} successfully stored in Cloudflare R2 bucket.`, "success");
    } catch (err) {
      addToast("Upload Failed", "Could not upload file to Cloudflare R2.", "error");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCreateDestination = (e) => {
    e.preventDefault();
    addDestination({
      name: newDestName,
      category: newDestCat,
      location: newDestLoc,
      shortDesc: newDestDesc,
      fullDesc: newDestDesc,
      imageUrl: newDestImg || "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
      recommendedDays: "1-2 Days",
      highlights: ["Popular Landmark", "Scenic Views", "Guided Tour"]
    });
    setShowAddDestModal(false);
    setNewDestName('');
    setNewDestDesc('');
  };

  const handleCreateTour = (e) => {
    e.preventDefault();
    addTour({
      title: newTourTitle,
      duration: newTourDuration,
      category: "Custom Tour",
      priceUSD: parseFloat(newTourPriceUSD) || 300,
      priceLKR: parseFloat(newTourPriceLKR) || 90000,
      badge: "New Tour",
      heroImage: newTourImg || "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
      description: newTourDesc,
      routes: ["Colombo", "Destination", "Return"],
      itinerary: [{ day: 1, title: "Day 1 Tour Start", details: newTourDesc }],
      inclusions: ["Private Vehicle", "Driver Bandara", "All Tolls and Fuel"]
    });
    setShowAddTourModal(false);
    setNewTourTitle('');
    setNewTourDesc('');
  };

  const totalBookingsCount = bookings.length;
  const pendingCount = bookings.filter(b => b.bookingStatus === 'Pending').length;
  const confirmedCount = bookings.filter(b => b.bookingStatus === 'Confirmed').length;
  const totalRevenueLKR = bookings.reduce((sum, b) => sum + (b.totalPriceLKR || 0), 0);

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || b.bookingStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col md:flex-row antialiased">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 text-slate-300 p-6 flex flex-col justify-between shrink-0 shadow-xl border-r border-slate-800">
        <div className="space-y-8">
          
          {/* Admin Brand Badge */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 font-bold flex items-center justify-center text-sm shadow-md border border-amber-300">
              BP
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base font-serif-heading leading-tight">BP Control Center</h3>
              <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mt-0.5">
                Bandara Premathilaka
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'bookings', label: 'Bookings', badge: pendingCount > 0 ? pendingCount : null, icon: CalendarCheck },
              { id: 'destinations', label: 'Destinations', icon: MapPin },
              { id: 'tours', label: 'Tour Packages', icon: Compass },
              { id: 'vehicles', label: 'Vehicle Fleet', icon: Car },
              { id: 'gallery', label: 'Media and R2 Storage', icon: ImageIcon },
              { id: 'reviews', label: 'Guest Reviews', icon: Star },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = adminTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setAdminTab(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 translate-x-1'
                      : 'text-slate-400 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge && (
                    <span className="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Actions */}
        <div className="pt-6 border-t border-slate-800 space-y-2">
          <button
            onClick={() => setCurrentRole('user')}
            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl text-xs font-bold transition-colors border border-slate-700"
          >
            <Globe className="w-4 h-4 text-emerald-400" /> Switch to Website
          </button>
          
          <button
            onClick={adminLogout}
            className="w-full flex items-center justify-center gap-2 bg-rose-950/60 hover:bg-rose-900 text-rose-300 py-2.5 rounded-xl text-xs font-bold transition-colors border border-rose-900/40"
          >
            <LogOut className="w-4 h-4" /> Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Administrative Screen */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Executive Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-900 font-serif-heading capitalize">
              {adminTab === 'overview' ? 'Dashboard Overview' : adminTab.replace('_', ' ')}
            </h1>
            <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
              Live Operations Engine
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 
              <span>Cloudflare R2 and Firebase Active</span>
            </div>

            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs border border-emerald-300">
              BP
            </div>
          </div>
        </header>

        {/* Dynamic Content Body */}
        <main className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8 bg-slate-50">
          
          {/* Overview Tab */}
          {adminTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Analytics Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Total Bookings Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Bookings</span>
                    <div className="text-3xl font-extrabold text-slate-900 font-serif-heading mt-1">{totalBookingsCount}</div>
                    <div className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +100% Verified
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                </div>

                {/* Pending Requests Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Pending Actions</span>
                    <div className="text-3xl font-extrabold text-amber-600 font-serif-heading mt-1">{pendingCount}</div>
                    <div className="text-[11px] font-semibold text-amber-600 mt-1">Requires confirmation</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>

                {/* Confirmed Trips Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-500">Confirmed Hires</span>
                    <div className="text-3xl font-extrabold text-blue-600 font-serif-heading mt-1">{confirmedCount}</div>
                    <div className="text-[11px] font-semibold text-blue-600 mt-1">Scheduled for pickup</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Est Revenue Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Est. Revenue</span>
                    <div className="text-2xl font-extrabold text-slate-900 font-serif-heading mt-1">
                      Rs. {totalRevenueLKR.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-semibold text-emerald-600 mt-1">PayHere and Cash</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>

              </div>

              {/* Recent Bookings Table Panel */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden space-y-4">
                <div className="p-6 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg font-serif-heading">Recent Booking Requests</h3>
                    <p className="text-xs text-slate-500">Live requests from users inquiring via website.</p>
                  </div>
                  <button
                    onClick={() => setAdminTab('bookings')}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    View All Bookings <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-extrabold tracking-wider border-y border-slate-100">
                      <tr>
                        <th className="py-3.5 px-6">Booking Ref</th>
                        <th className="py-3.5 px-6">Customer Info</th>
                        <th className="py-3.5 px-6">Selected Service</th>
                        <th className="py-3.5 px-6">Travel Date</th>
                        <th className="py-3.5 px-6">Status</th>
                        <th className="py-3.5 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {bookings.slice(0, 5).map((b) => (
                        <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-6 font-extrabold text-amber-600">{b.id}</td>
                          <td className="py-4 px-6">
                            <div className="font-bold text-slate-900">{b.customerName}</div>
                            <div className="text-[11px] text-slate-500">{b.phone} • {b.country}</div>
                          </td>
                          <td className="py-4 px-6 font-semibold text-slate-800">{b.serviceTitle}</td>
                          <td className="py-4 px-6 text-slate-600 font-medium">{b.startDate}</td>
                          <td className="py-4 px-6">
                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${
                              b.bookingStatus === 'Confirmed' 
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                                : b.bookingStatus === 'Completed' 
                                ? 'bg-blue-50 text-blue-800 border-blue-200' 
                                : 'bg-amber-50 text-amber-800 border-amber-200'
                            }`}>
                              {b.bookingStatus}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <button
                              onClick={() => updateBookingStatus(b.id, 'Confirmed', 'Paid')}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition-colors shadow-xs"
                            >
                              Approve
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* Bookings Management Tab */}
          {adminTab === 'bookings' && (
            <div className="space-y-6">
              
              {/* Search and Filters Header */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Ref ID, Name, or Phone..."
                    className="w-full bg-slate-50 border border-slate-200 text-xs font-semibold rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">Status Filter:</span>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 px-3 py-2 rounded-xl outline-none"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Bookings List Cards */}
              <div className="space-y-4">
                {filteredBookings.map((b) => (
                  <div key={b.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between gap-6 hover:shadow-md transition-shadow">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-amber-700 font-extrabold text-xs bg-amber-50 border border-amber-200 px-3 py-1 rounded-xl">
                          {b.id}
                        </span>
                        <h3 className="font-bold text-lg text-slate-900 font-serif-heading">{b.serviceTitle}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          b.bookingStatus === 'Confirmed' 
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          {b.bookingStatus}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div><strong className="text-slate-800">Guest:</strong> {b.customerName} ({b.country})</div>
                        <div><strong className="text-slate-800">Phone:</strong> {b.phone}</div>
                        <div><strong className="text-slate-800">Date:</strong> {b.startDate}</div>
                        <div><strong className="text-slate-800">Pickup:</strong> {b.pickupLocation}</div>
                        <div><strong className="text-slate-800">Dropoff:</strong> {b.dropoffLocation}</div>
                        <div><strong className="text-slate-800">Vehicle:</strong> {b.vehicleType}</div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end gap-3 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Est Rate</span>
                        <span className="text-xl font-extrabold text-emerald-600 font-serif-heading">
                          Rs. {b.totalPriceLKR?.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => updateBookingStatus(b.id, 'Confirmed', 'Paid (Confirmed by Admin)')}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-colors shadow-xs"
                        >
                          Confirm Booking
                        </button>
                        <button
                          onClick={() => updateBookingStatus(b.id, 'Completed', 'Payment Received')}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-colors shadow-xs"
                        >
                          Mark Completed
                        </button>
                        <button
                          onClick={() => updateBookingStatus(b.id, 'Cancelled', 'Cancelled')}
                          className="bg-slate-100 hover:bg-rose-50 text-rose-600 font-bold px-3.5 py-2 rounded-xl text-xs border border-slate-200 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Destinations Manager Tab */}
          {adminTab === 'destinations' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 font-serif-heading">Destinations Manager</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Manage iconic spots displayed on customer website.</p>
                </div>
                <button
                  onClick={() => setShowAddDestModal(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add Destination
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {destinations.map(d => (
                  <div key={d.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="h-44 relative">
                      <img src={d.imageUrl} alt={d.name} className="w-full h-full object-cover" />
                      <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 font-extrabold text-xs px-3 py-1 rounded-full">
                        {d.category}
                      </span>
                    </div>
                    <div className="p-5 space-y-3">
                      <h4 className="font-bold text-slate-900 text-base font-serif-heading">{d.name}</h4>
                      <p className="text-xs text-slate-600 line-clamp-2">{d.shortDesc}</p>
                      <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                        <span className="text-slate-500 font-medium">{d.location}</span>
                        <button
                          onClick={() => deleteDestination(d.id)}
                          className="text-rose-600 hover:text-rose-700 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Delete Destination"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media and R2 Storage Gallery Tab */}
          {adminTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 font-serif-heading">Cloudflare R2 Media Gallery</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Upload and manage high-resolution images stored on Cloudflare R2.</p>
                </div>
                <label className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-md transition-all">
                  <Upload className="w-4 h-4" />
                  <span>{isUploading ? "Uploading to R2..." : "Upload Photo to R2"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, (url) => {
                      addGalleryItem({
                        title: "New Guest Photo",
                        category: "Tourists and Drivers",
                        imageUrl: url,
                        caption: "Uploaded via Admin Control Panel."
                      });
                    })}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {gallery.map(g => (
                  <div key={g.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group relative h-52">
                    <img src={g.imageUrl} alt={g.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">{g.category}</span>
                      <button
                        onClick={() => deleteGalleryItem(g.id)}
                        className="bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-xl self-end transition-colors shadow-md"
                        title="Delete Image"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Add Destination Modal */}
      {showAddDestModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm p-4 flex items-center justify-center animate-fade-in">
          <div className="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-serif-heading">Add New Destination</h3>
            <form onSubmit={handleCreateDestination} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Destination Name (e.g. Ella)"
                value={newDestName}
                onChange={(e) => setNewDestName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm font-semibold outline-none focus:border-emerald-500"
              />
              <input
                type="text"
                required
                placeholder="Location (e.g. Badulla District)"
                value={newDestLoc}
                onChange={(e) => setNewDestLoc(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm font-semibold outline-none focus:border-emerald-500"
              />
              <textarea
                required
                placeholder="Short Description"
                value={newDestDesc}
                onChange={(e) => setNewDestDesc(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-emerald-500"
              ></textarea>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Destination Image (R2 Upload or URL)</label>
                <input
                  type="text"
                  placeholder="Image URL or R2 Key"
                  value={newDestImg}
                  onChange={(e) => setNewDestImg(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddDestModal(false)}
                  className="w-1/2 bg-slate-100 hover:bg-slate-200 py-3 rounded-xl text-xs font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-emerald-600 hover:bg-emerald-700 py-3 rounded-xl text-xs font-bold text-white shadow-md"
                >
                  Save Destination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
