function StatBox({ label, value }) {
  return (
    <div className="border border-white/20 px-6 py-5 min-h-[110px] flex flex-col justify-center">
      <p className="text-white/60 uppercase text-[11px] tracking-[1px] mb-3">
        {label}
      </p>
      <h3 className="text-[28px] md:text-[34px] uppercase font-semibold tracking-wide">
        {value}
      </h3>
    </div>
  );
}

export default StatBox;
