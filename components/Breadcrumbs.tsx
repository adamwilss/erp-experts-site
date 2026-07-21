import Link from "next/link";

type Props = {
  breadcrumbs: { label: string; href?: string }[];
  className?: string;
};

export default function Breadcrumbs({ breadcrumbs, className = "" }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm text-muted ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {breadcrumbs.map((crumb, i) => {
          const last = i === breadcrumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {crumb.href && !last ? (
                <Link
                  href={crumb.href}
                  className="hover:text-brand transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={last ? "text-ink font-medium" : ""}>
                  {crumb.label}
                </span>
              )}
              {!last && (
                <span className="text-line-strong" aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
