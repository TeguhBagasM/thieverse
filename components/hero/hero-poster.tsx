import { heroConfig } from "@/config/hero";
import { cn } from "@/lib/utils";

/** Versi statis dari monitor 3D: fallback saat memuat dan tampilan untuk perangkat tanpa 3D. */
export function HeroPoster({ className }: { className?: string }) {
  const [first, second] = heroConfig.terminal;

  return (
    <svg viewBox="0 -10 560 450" className={cn("h-full w-full", className)} focusable="false">
      <circle cx="280" cy="205" r="196" fill="none" stroke="#4A90F0" strokeWidth="9" opacity="0.55" />
      <path d="M250 330h60l8 54h-76z" fill="#3470C4" />
      <rect x="190" y="380" width="180" height="18" rx="7" fill="#4A90F0" />
      <rect x="62" y="70" width="436" height="276" rx="20" fill="#4A90F0" />
      <rect x="80" y="88" width="400" height="236" rx="8" fill="#0E1A14" />
      <g fontFamily="var(--font-mono, ui-monospace), monospace" fontSize="19" fill="#E8EEE8">
        <text x="104" y="130">
          <tspan fill="#8FA8FF">&gt; </tspan>
          {first.command}
        </text>
        <text x="104" y="162" fill="#A4B2A8">
          {first.output[0]}
        </text>
        <text x="104" y="206">
          <tspan fill="#8FA8FF">&gt; </tspan>
          {second.command}
        </text>
        {second.output.map((line, index) => (
          <text key={line} x="104" y={238 + index * 30} fill="#A4B2A8">
            {line}
          </text>
        ))}
      </g>
      <rect x="104" y="288" width="13" height="4" fill="#8FA8FF" />
    </svg>
  );
}
