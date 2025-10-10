import { cn } from '@/utils/helper';

function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('rounded-sm', className)}
    >
      <rect width="100" height="100" fill="black" />

      <text
        x="50%"
        y="50%"
        fill="white"
        fontSize="20"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        P
      </text>
    </svg>
  );
}

export default Logo;
