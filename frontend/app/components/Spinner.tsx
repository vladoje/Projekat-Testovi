const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-sm">
      <div className="relative">
        {/* outer glow */}
        <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/30" />

        {/* spinning ring */}
        <div className="w-20 h-20 rounded-full border-[5px] border-slate-700 border-t-blue-500 animate-spin" />

        {/* inner ring */}
        <div className="absolute inset-2 rounded-full border-2 border-slate-600/60" />

        {/* center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
