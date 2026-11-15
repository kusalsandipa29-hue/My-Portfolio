import type { CoverMotif } from '../content/types';
import { cn } from '../lib/cn';

/**
 * Decorative, abstract cover art for each project. These are NOT screenshots
 * or diagrams of real company systems — just branded motifs per domain.
 */
export function ProjectCover({ motif, number, className, large }: { motif: CoverMotif; number: string; className?: string; large?: boolean }) {
  return (
    <div
      className={cn('relative isolate overflow-hidden bg-navy', className)}
      role="presentation"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(33,158,188,0.45),transparent_60%)]" />
      <div className="bg-grid absolute inset-0 [--grid-line:rgba(142,202,230,0.07)]" />
      <svg viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        {motif === 'pos' && <PosMotif />}
        {motif === 'transit' && <TransitMotif />}
        {motif === 'fleet' && <FleetMotif />}
        {motif === 'runchart' && <RunChartMotif />}
      </svg>
      <span
        className={cn(
          'absolute bottom-2 left-4 font-display font-extrabold leading-none tracking-tighter text-white/[0.08]',
          large ? 'text-[9rem] sm:text-[12rem]' : 'text-[5.5rem]',
        )}
      >
        {number}
      </span>
    </div>
  );
}

function PosMotif() {
  return (
    <g>
      {/* receipt */}
      <g transform="translate(250 30)">
        <path d="M0 0h90v150l-9-6-9 6-9-6-9 6-9-6-9 6-9-6-9 6-9-6-9 6z" fill="rgba(142,202,230,0.12)" stroke="rgba(142,202,230,0.45)" />
        {[22, 36, 50, 64, 78].map((y, i) => (
          <g key={y}>
            <rect x="12" y={y} width={[44, 36, 50, 30, 40][i]} height="4" rx="2" fill="rgba(142,202,230,0.55)" />
            <rect x="66" y={y} width="12" height="4" rx="2" fill="rgba(142,202,230,0.35)" />
          </g>
        ))}
        <rect x="12" y="100" width="66" height="1" fill="rgba(142,202,230,0.4)" />
        <rect x="12" y="110" width="34" height="6" rx="3" fill="#FFB703" />
        <rect x="58" y="110" width="20" height="6" rx="3" fill="rgba(255,183,3,0.5)" />
      </g>
      {/* tiles */}
      {Array.from({ length: 9 }).map((_, i) => (
        <rect
          key={i}
          x={40 + (i % 3) * 52}
          y={40 + Math.floor(i / 3) * 44}
          width="44"
          height="36"
          rx="8"
          fill={i === 4 ? 'rgba(33,158,188,0.55)' : 'rgba(142,202,230,0.1)'}
          stroke="rgba(142,202,230,0.25)"
        />
      ))}
    </g>
  );
}

function TransitMotif() {
  const stops = [
    [40, 160],
    [120, 120],
    [200, 140],
    [280, 80],
    [360, 60],
  ];
  return (
    <g>
      <path d="M40 160 C 80 160, 90 120, 120 120 S 170 140, 200 140 S 250 80, 280 80 S 340 60, 360 60" fill="none" stroke="rgba(142,202,230,0.25)" strokeWidth="10" strokeLinecap="round" />
      <path d="M40 160 C 80 160, 90 120, 120 120 S 170 140, 200 140 S 250 80, 280 80 S 340 60, 360 60" fill="none" stroke="#8ECAE6" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" />
      {stops.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="9" fill="#023047" stroke={i === 3 ? '#FFB703' : '#8ECAE6'} strokeWidth="2.5" />
          <circle cx={x} cy={y} r="3" fill={i === 3 ? '#FFB703' : '#8ECAE6'} />
        </g>
      ))}
      {/* tap card */}
      <g transform="translate(262 120) rotate(-8)">
        <rect width="70" height="44" rx="7" fill="rgba(33,158,188,0.55)" stroke="rgba(142,202,230,0.6)" />
        <rect x="8" y="10" width="14" height="10" rx="2" fill="#FFB703" />
        <path d="M44 14a10 10 0 0 1 0 16M50 10a16 16 0 0 1 0 24" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="280" cy="80" r="22" fill="none" stroke="#FFB703" strokeOpacity="0.35" />
      <circle cx="280" cy="80" r="34" fill="none" stroke="#FFB703" strokeOpacity="0.15" />
    </g>
  );
}

function FleetMotif() {
  const nodes = [
    [70, 60],
    [150, 110],
    [90, 160],
    [240, 70],
    [300, 150],
    [350, 90],
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 5],
    [3, 4],
    [4, 5],
    [1, 4],
  ];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(142,202,230,0.35)" strokeWidth="1.5" strokeDasharray={i % 2 ? '4 5' : undefined} />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 1 ? 16 : 10} fill={i === 1 ? 'rgba(33,158,188,0.6)' : 'rgba(142,202,230,0.14)'} stroke="#8ECAE6" strokeOpacity="0.6" />
          <circle cx={x} cy={y} r="3" fill={i === 3 ? '#FFB703' : '#8ECAE6'} />
        </g>
      ))}
      {/* vehicle glyph */}
      <g transform="translate(222 152)" fill="none" stroke="#FFB703" strokeWidth="2" strokeLinejoin="round">
        <path d="M0 18h46v-8l-8-10H8L0 10z" fill="rgba(255,183,3,0.12)" />
        <circle cx="11" cy="20" r="4" fill="#023047" />
        <circle cx="36" cy="20" r="4" fill="#023047" />
      </g>
    </g>
  );
}

function RunChartMotif() {
  const pts = [10, 30, 22, 44, 36, 58, 48, 62, 56, 72, 66, 78];
  const path = pts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${30 + i * 30} ${190 - v * 1.8}`).join(' ');
  return (
    <g>
      {[60, 100, 140, 180].map((y) => (
        <line key={y} x1="20" x2="380" y1={y} y2={y} stroke="rgba(142,202,230,0.12)" />
      ))}
      <line x1="20" x2="380" y1="110" y2="110" stroke="#FFB703" strokeOpacity="0.5" strokeDasharray="6 6" />
      <path d={`${path} L 360 200 L 30 200 Z`} fill="rgba(33,158,188,0.2)" />
      <path d={path} fill="none" stroke="#8ECAE6" strokeWidth="2.5" strokeLinejoin="round" />
      {pts.map((v, i) => (
        <circle key={i} cx={30 + i * 30} cy={190 - v * 1.8} r={i === 9 ? 5 : 3} fill={i === 9 ? '#FFB703' : '#8ECAE6'} />
      ))}
    </g>
  );
}
