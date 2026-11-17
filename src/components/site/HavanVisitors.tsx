import { useEffect, useState } from "react";
import { Eye, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const STORAGE_KEY = "havan_visited";

function AnimatedNumber({ value }: { value: number | null }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === null) return;
    if (value === 0) { setDisplay(0); return; }
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(start);
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  if (value === null)
    return (
      <span className="inline-block h-10 w-28 animate-pulse rounded-lg bg-orange-200/60" />
    );
  return <>{display.toLocaleString("en-IN")}</>;
}

export function HavanVisitors() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function track() {
      try {
        const alreadyCounted = localStorage.getItem(STORAGE_KEY);

        const res = await fetch("/api/havan-visitor-count", {
          // POST increments (new visitor), GET only reads (returning visitor)
          method: alreadyCounted ? "GET" : "POST",
          cache: "no-store",
        });

        if (!res.ok) throw new Error("failed");

        const data: { count: number } = await res.json();

        if (!cancelled) {
          setCount(data.count);
          // Mark this device as already counted
          if (!alreadyCounted) localStorage.setItem(STORAGE_KEY, "1");
        }
      } catch {
        if (!cancelled) setError(true);
      }
    }

    track();
    return () => { cancelled = true; };
  }, []);

  if (error) return null;

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-sm px-5">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <TrendingUp className="size-3.5" />
            Live Stats
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Our Visitors
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Devotees who have visited this page.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-6 overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-orange-100">
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500" />

            <div className="p-6">
              {/* Icon + label */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-xl bg-orange-100 p-3">
                  <Eye className="size-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Havan Page Visitors
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Unique visitors only
                  </p>
                </div>
              </div>

              {/* Count */}
              <p
                aria-live="polite"
                className="mt-5 text-center font-display text-6xl font-bold tracking-tight text-orange-600"
              >
                <AnimatedNumber value={count} />
              </p>

              {/* Live indicator */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs text-muted-foreground/60">
                  Updated in real-time
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
