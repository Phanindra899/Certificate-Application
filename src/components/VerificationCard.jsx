import StudentInfoCard from './StudentInfoCard';
import CertificateInfoCard from './CertificateInfoCard';
import StatusBadge from './StatusBadge';
import FooterMessage from './FooterMessage';

export default function VerificationCard({ student }) {
  if (!student) return null;

  const idLabel = student.category === 'Internship' ? 'Internship ID' : 'Verification ID';
  const periodLabel = student.category === 'Internship' ? 'Internship Period' : 'Program Period';

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/50 shadow-md overflow-hidden flex flex-col animate-fade-in my-6">
      
      {/* 1. Top Gradient Banner */}
      <div className="bg-gradient-to-r from-[#4a148c] via-[#311b92] to-[#1565c0] py-8 px-6 text-center text-white">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
  ✓ Valid Certificate Verified
</h1>
        {/* 2. Verified Badge */}
        <div className="mt-3 flex justify-center">
          <StatusBadge status="VERIFIED" />
        </div>
      </div>

      {/* Main content body */}
      <div className="p-6 sm:p-8 space-y-6 flex-grow">
        
        {/* 3. Verification ID Card */}
        <div className="rounded-xl bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] py-4 px-6 text-center text-white w-full max-w-md mx-auto shadow-sm">
          <span className="block text-[10px] font-medium tracking-wider text-blue-200 uppercase">
            {idLabel}
          </span>
          <span className="mt-1 block text-2xl font-black tracking-widest uppercase font-mono">
            {student.verificationId}
          </span>
        </div>

        {/* 4. Student Information */}
        <StudentInfoCard student={student} />

        {/* 5. Course Details */}
        <CertificateInfoCard student={student} />

        {/* 6. Internship Period */}
        <div className="space-y-2">
          {/* Section Header */}
          <h3 className="text-[#0d47a1] text-base sm:text-lg font-bold tracking-tight px-1">
            {periodLabel}
          </h3>
          {/* Thin Blue Divider */}
          <div className="border-b-2 border-blue-600 w-full mb-3"></div>

          {/* Timeline content */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Start Date
            </span>
            <span className="mt-1 block text-sm font-bold text-[#1e3a8a]">
              {student.startDate}
            </span>
          </div>
        </div>

      </div>

      {/* 8. Verification Footer */}
      <FooterMessage student={student} />
      
    </div>
  );
}
