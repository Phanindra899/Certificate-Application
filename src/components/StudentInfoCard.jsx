export default function StudentInfoCard({ student }) {
  if (!student) return null;

  return (
    <div className="space-y-2">
      {/* Section Header */}
      <h3 className="text-[#0d47a1] text-base sm:text-lg font-bold tracking-tight px-1">
        Student Information
      </h3>
      {/* Thin Blue Divider */}
      <div className="border-b-2 border-blue-600 w-full mb-3"></div>
      
      {/* Information Card */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        {/* Student Name */}
        <div>
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Student Name
          </span>
          <span className="mt-1 block text-sm font-bold text-[#1e3a8a] capitalize">
            {student.studentName}
          </span>
        </div>
      </div>
    </div>
  );
}
