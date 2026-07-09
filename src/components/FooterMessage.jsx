export default function FooterMessage({ student }) {
  if (!student) return null;

  const docType = student.certificateType?.toLowerCase() || 'certificate';

  return (
    <div className="bg-[#1e293b] text-white text-center py-4 px-6 text-xs sm:text-sm font-medium tracking-wide">
      This {docType} has been verified and is authentic.
    </div>
  );
}
