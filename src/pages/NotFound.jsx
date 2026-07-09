import { HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#291749] to-[#133273] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-8 sm:p-10 text-center space-y-6">
        
        {/* Warning Icon */}
        <div className="flex justify-center pt-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-150 bg-slate-50 text-slate-400 shadow-sm">
            <HelpCircle className="h-10 w-10 text-slate-400" />
          </div>
        </div>

        {/* 404 Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            404
          </h1>
          <p className="text-sm font-extrabold text-slate-400 uppercase tracking-widest">
            Page Not Found
          </p>
        </div>

        {/* Info Text */}
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
          The requested URL does not exist on this certificate verification portal. Please make sure the URL was entered or scanned correctly.
        </p>

        {/* Footer */}
        <div className="border-t border-slate-50 pt-6 text-xxs font-semibold uppercase tracking-widest text-slate-400">
          🔒 Verification Authority
        </div>

      </div>
    </div>
  );
}
