import { formatNumber } from '@/utils/formatter';

interface Props {
  value: number;
  max: number;
  size: number;
  strokeWidth: number;
}

const RadialProgress = (props: Props) => {
  const { value, max, size, strokeWidth } = props;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = value > max ? max : value;
  const progressOffset = circumference - (progress / max) * circumference;

  return (
    <div className="relative">
      <svg className="rotate-270 transform" height={size} width={size}>
        <circle
          className="stroke-opacity-30 stroke-gray-200 transition-all duration-300"
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeWidth={strokeWidth}
        />
        <circle
          className="stroke-current text-green-500 transition-all duration-300"
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-base text-green-500">{formatNumber(max, { notation: 'compact' })}</span>
      </div>
    </div>
  );
};

export default RadialProgress;
