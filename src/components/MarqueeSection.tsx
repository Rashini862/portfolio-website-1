'use client';

export function MarqueeSection() {
  const items = ['App Design', 'Website Design', 'Dashboard', 'Wireframe', 'Prototype', 'Analytics'];

  return (
    <div className="bg-[#f8b135] py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-8 text-[#2e4f3e] font-medium">
            <span className="mr-2">✦</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}