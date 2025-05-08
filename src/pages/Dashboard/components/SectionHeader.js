const SectionHeader = ({ title, onSeeAll, className = "" }) => (
  <div className={`flex items-center justify-between mb-2 ${className}`}>
    <span className="font-semibold text-white">{title}</span>
    {onSeeAll && (
      <button className="text-xs underline text-green-400" onClick={onSeeAll}>See all</button>
    )}
  </div>
);

export default SectionHeader; 