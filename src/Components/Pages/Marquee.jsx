import Marquee from "react-fast-marquee";

export default function CourseMarquee() {
  const lines = [
    "High-Ticket Gaslighting",
    "Online Scamming",
    "Credit Card Fraud",
    "Closing for Pyramid Schemes",
    "NPC Monetization",
    "OnlyFans Pimping",
    "Dating Coaches for Incels",
  ];

  return (
    <Marquee
      gradient={false}
      speed={60}
      pauseOnHover={true}
      className="marquee-bar"
    >
      {lines.map((line, i) => (
        <span key={i} className="marquee-item">
          $COURSE – {line}
        </span>
      ))}
    </Marquee>
  );
}
