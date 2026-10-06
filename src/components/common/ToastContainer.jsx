import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function ToastContainer() {
  const { toasts } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';
        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-2xl border backdrop-blur-md transition-all duration-300 animate-slide-up ${
              isSuccess 
                ? 'bg-emerald-950/90 text-emerald-100 border-emerald-500/40' 
                : isError 
                ? 'bg-rose-950/90 text-rose-100 border-rose-500/40' 
                : 'bg-slate-900/90 text-slate-100 border-slate-700'
            }`}
          >
            {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
            {isError && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
            {!isSuccess && !isError && <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
            
            <div className="flex-1 text-sm">
              <h4 className="font-semibold">{toast.title}</h4>
              <p className="opacity-90 text-xs mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
