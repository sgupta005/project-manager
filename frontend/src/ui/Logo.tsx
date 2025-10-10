import { cn } from '@/utils/helper';

function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('rounded-sm', className)}
      viewBox="0 0 100 100"
    >
      <rect width="100" height="100" fill="black" />
      <text
        x="50%"
        y="50%"
        fill="white"
        fontSize="50"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        P
      </text>
    </svg>
  );
}

export default Logo;
