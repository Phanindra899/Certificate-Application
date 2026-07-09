import { useParams } from 'react-router-dom';
import { ShieldAlert, Shield } from 'lucide-react';
import { findStudentById } from '../data/students';
import VerificationCard from '../components/VerificationCard';

export default function Verification() {
  const { verificationId } = useParams();

  // Search the student database
  const student = findStudentById(verificationId);

  // Success State
  if (student) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-r from-[#291749] to-[#133273] flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <VerificationCard student={student} />
      </div>
    );
  }

  // Error State: If student is not found or verificationId is invalid
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#291749] to-[#133273] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-xl bg-white rounded-3xl border border-rose-100 shadow-xl overflow-hidden transition-all duration-300 p-8 sm:p-10 space-y-6 text-center">
        
        {/* Minimal branding at top of error card */}
        <div className="flex flex-col items-center justify-center text-center pb-4 border-b border-slate-100">
          <div className="flex items-center gap-1.5 text-slate-800">
            <Shield className="h-5 w-5 text-slate-400" />
            <span className="font-extrabold text-xs tracking-wider uppercase text-slate-500">
              Credential Verification System
            </span>
          </div>
        </div>

        {/* Large Red Warning Icon */}
        <div className="flex justify-center pt-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-100 bg-rose-50 text-rose-600 shadow-sm">
            <ShieldAlert className="h-10 w-10 animate-pulse" />
          </div>
        </div>

        {/* Error Heading */}
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-rose-700 tracking-tight sm:text-3xl">
            Verification Failed
          </h2>
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-3 mt-4">
            <span className="block text-xxs font-bold text-slate-400 uppercase tracking-widest">
              Attempted Verification ID
            </span>
            <span className="mt-1 block text-lg font-mono font-extrabold text-slate-700 uppercase tracking-wide">
              {verificationId || 'UNDEFINED'}
            </span>
          </div>
        </div>

        {/* Error Body Text */}
        <div className="space-y-4 pt-2">
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
            The verification code you scanned is not registered or has been revoked. 
            This credential could not be verified.
          </p>
        </div>

        {/* Minimal security note at the bottom of the error card */}
        <div className="border-t border-slate-50 pt-6 text-xxs font-semibold uppercase tracking-widest text-slate-400">
          🔒 Secure Verification Authority
        </div>

      </div>
    </div>
  );
}
