import { cn } from "@/shared/lib/utils";

type Props = {
  iconSrc: string;
  name: string;
  description?: string;
  className?: string;
  onClick?: () => void;
};

export function ServiceCard({
  iconSrc,
  name,
  description,
  className,
  onClick,
}: Props) {
  return (
    <div
      role="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3",
        "rounded-xl hover:bg-muted/40 active:scale-[0.99] transition",
        className
      )}
    >
      <div className="shrink-0">
        <div className="h-12 w-12 rounded-xl bg-white shadow-sm ring-1 ring-black/5 grid place-items-center overflow-hidden">
          <img
            src={iconSrc}
            alt={name}
            className="h-8 w-8 object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[17px] font-semibold leading-tight truncate">
          {name}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground leading-snug truncate">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
