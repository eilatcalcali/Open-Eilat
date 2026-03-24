interface MascotProps {
  className?: string;
  size?: number;
}

export default function Mascot({ className = "", size = 200 }: MascotProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: "auto" }}
    >
      <img
        src="/mascot.png"
        alt="OPEN Eilat Mascot"
        className="w-full h-auto drop-shadow-2xl"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback if image not found
          (e.target as HTMLImageElement).src = "https://picsum.photos/seed/giraffe/400/500";
        }}
      />
    </div>
  );
}
