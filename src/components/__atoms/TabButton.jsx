function TabButton({ number, text, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full border px-5 py-3 flex items-center gap-4 uppercase tracking-[2px] text-[11px] font-semibold transition
      ${
        active
          ? "bg-[#419EBB] border-[#419EBB] text-white"
          : "border-white/20 text-white hover:border-white/40"
      }`}
    >
      <span className="text-white/50">{number}</span>
      <span>{text}</span>
    </button>
  );
}

export default TabButton;
