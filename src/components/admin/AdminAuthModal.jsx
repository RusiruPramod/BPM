import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lock, X, ShieldAlert, KeyRound } from 'lucide-react';

export default function AdminAuthModal() {
  const { adminAuthModal, setAdminAuthModal, adminLogin } = useApp();
  const [pin, setPin] = useState('');

  if (!adminAuthModal.isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    adminLogin(pin);
    setPin('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in">
      <div className="bg-white max-w-sm w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg font-serif-heading">Admin Login</h3>
          </div>
          <button
            onClick={() => setAdminAuthModal({ isOpen: false })}
            className="text-slate-400 hover:text-slate-600 font-bold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-xs text-slate-500">
            Enter Admin PIN to manage bookings, destinations, packages, and R2 media.
            <div className="mt-1 font-bold text-slate-700 bg-slate-100 p-2 rounded-lg text-center">
              Default PIN: <code className="text-emerald-700">admin123</code>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Security PIN</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                autoFocus
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl pl-10 pr-3 py-3 outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-xl text-xs shadow-md transition-colors"
          >
            Access Admin Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
