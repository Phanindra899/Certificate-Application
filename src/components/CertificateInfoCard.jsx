export default function CertificateInfoCard({ student }) {
  if (!student) return null;

  return (
    <div className="space-y-2">
      {/* Section Header */}
      <h3 className="text-[#0d47a1] text-base sm:text-lg font-bold tracking-tight px-1">
        Course Details
      </h3>
      {/* Thin Blue Divider */}
      <div className="border-b-2 border-blue-600 w-full mb-3"></div>

      {/* Grid of info elements */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {/* Course Name */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Course Name
          </span>
          <span className="mt-1 block text-sm font-bold text-[#1e3a8a]">
            {student.courseName}
          </span>
        </div>

        {/* Category */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Category
          </span>
          <span className="mt-1 block text-sm font-bold text-[#1e3a8a]">
            {student.category}
          </span>
        </div>

        {/* Duration */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Duration
          </span>
          <span className="mt-1 block text-sm font-bold text-[#1e3a8a]">
            {student.duration}
          </span>
        </div>

        {/* Company Name */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-3">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Company Name
          </span>
          <span className="mt-1 block text-sm font-bold text-[#1e3a8a]">
            {student.company}
          </span>
        </div>
      </div>
    </div>
  );
}
