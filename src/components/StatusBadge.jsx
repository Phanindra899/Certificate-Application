export default function StatusBadge({ status }) {
  const isVerified = status?.toLowerCase() === 'verified';

  if (isVerified) {
    return (
      <span className="inline-block bg-white/20 border border-white/25 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-100 rounded-full shadow-inner">
        Verified
      </span>
    );
  }

  return (
    <span className="inline-block bg-red-650/20 border border-red-500/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-red-200 rounded-full">
      {status || 'Unknown'}
    </span>
  );
}
