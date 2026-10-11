
import { useEffect, useState } from "react";
import { UsersRound } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function trackVisit() {
      try {
        const response = await fetch("/api/visitor-count", {
          method: "POST",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to update visitor count");
        }

        const data: { count: number } = await response.json();

        if (!cancelled) {
          setCount(data.count);
        }
      } catch (error) {
        console.error("Visitor counter failed:", error);
      }
    }

    trackVisit();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="px-4 py-8 sm:py-10">
      <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-amber-700/15 bg-amber-50/50 px-5 py-6 text-center shadow-sm sm:px-8 sm:py-8">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-amber-700/20 bg-white text-amber-700">
          <UsersRound size={23} strokeWidth={1.7} />
        </div>

        <h2 className="text-base font-semibold tracking-wide text-foreground sm:text-lg">
          Our Website Visitors
        </h2>

        <p
          aria-live="polite"
          className="mt-2 text-3xl font-bold tracking-tight text-amber-700 sm:text-4xl"
        >
          {count === null ? "—" : count.toLocaleString("en-IN")}
        </p>

        <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground sm:text-base">
          People have visited our website
        </p>
      </div>
    </section>
  );
}
