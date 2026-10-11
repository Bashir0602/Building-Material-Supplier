import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isInfo = toast.type === 'info';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-fade-in shadow-2xl rounded-xl border border-slate-200 bg-white p-4 flex items-start gap-3 transition-all duration-300">
      {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />}
      {isInfo && <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />}
      {!isSuccess && !isInfo && <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />}

      <div className="flex-1 pr-2">
        <p className="text-sm font-semibold text-slate-900">Notification</p>
        <p className="text-sm text-slate-600 mt-0.5">{toast.message}</p>
      </div>
    </div>
  );
};
