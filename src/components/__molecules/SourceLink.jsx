function SourceLink({ source }) {
  return (
    <div className="text-white/60 text-sm">
      Source :{" "}
      <a
        href={source}
        target="_blank"
        rel="noreferrer"
        className="underline font-semibold text-white/80 hover:text-white"
      >
        Wikipedia
      </a>
    </div>
  );
}

export default SourceLink;
