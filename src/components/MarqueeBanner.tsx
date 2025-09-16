const MarqueeBanner = () => {
  const marqueeItems = [
    "★ %20 DISCOUNT",
    "★ NEW SEASON", 
    "★ %20 DISCOUNT",
    "★ NEW SEASON",
    "★ %20 DISCOUNT",
    "★ NEW SEASON",
    "★ %20 DISCOUNT",
    "★ NEW SEASON",
  ];

  return (
    <div className="bg-accent-yellow text-accent-yellow-foreground py-3 overflow-hidden">
      <div className="flex animate-marquee">
        <div className="flex items-center space-x-8 whitespace-nowrap px-4">
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <span
              key={index}
              className="text-sm font-bold tracking-wide uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;