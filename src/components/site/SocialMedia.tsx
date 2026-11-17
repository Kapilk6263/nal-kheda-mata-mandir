import { Reveal } from "./Reveal";

// Instagram SVG icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="3"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="16.2" cy="7.8" r="0.8" fill="white" />
    </svg>
  );
}

// YouTube SVG icon
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <rect width="24" height="24" rx="5" fill="#FF0000" />
      <path d="M19.6 8.2a2 2 0 0 0-1.4-1.4C16.9 6.5 12 6.5 12 6.5s-4.9 0-6.2.3A2 2 0 0 0 4.4 8.2 20.4 20.4 0 0 0 4.1 12c0 1.3.1 2.6.3 3.8a2 2 0 0 0 1.4 1.4c1.3.3 6.2.3 6.2.3s4.9 0 6.2-.3a2 2 0 0 0 1.4-1.4c.2-1.2.3-2.5.3-3.8 0-1.3-.1-2.6-.3-3.8z" fill="white" />
      <polygon points="10,9.5 10,14.5 15,12" fill="#FF0000" />
    </svg>
  );
}

const socialLinks = [
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@mata_8_baglamukhi1",
    url: "https://www.instagram.com/mata_8_baglamukhi1/",
    buttonLabel: "Follow on Instagram",
    Icon: InstagramIcon,
    accentBg: "from-[#f09433]/10 via-[#dc2743]/10 to-[#bc1888]/10",
    accentBorder: "border-[#dc2743]/20",
    accentHover: "hover:border-[#dc2743]/40 hover:shadow-[0_4px_24px_-4px_rgba(220,39,67,0.18)]",
    btnBg:
      "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white",
  },
  {
    id: "youtube",
    platform: "YouTube",
    handle: "@baglaaaupashak172",
    url: "https://youtube.com/@baglaaaupashak172",
    buttonLabel: "Watch on YouTube",
    Icon: YouTubeIcon,
    accentBg: "from-[#FF0000]/8 to-[#FF0000]/4",
    accentBorder: "border-[#FF0000]/20",
    accentHover: "hover:border-[#FF0000]/40 hover:shadow-[0_4px_24px_-4px_rgba(255,0,0,0.15)]",
    btnBg: "bg-[#FF0000] hover:bg-[#cc0000] text-white",
  },
];

export function SocialMedia() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-5">
        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Social Media</p>
          <h2 className="mt-3 text-2xl leading-tight text-primary sm:text-3xl md:text-4xl">
            Follow Us &amp; Explore Our Videos
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Stay connected and explore more Havan, Pooja and temple activities.
          </p>
        </Reveal>

        {/* Cards */}
        <Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {socialLinks.map(
              ({ id, platform, handle, url, buttonLabel, Icon, accentBg, accentBorder, accentHover, btnBg }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${buttonLabel} — ${handle}`}
                  className={`group flex flex-col gap-3 rounded-2xl border bg-gradient-to-br ${accentBg} ${accentBorder} ${accentHover} p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:flex-row sm:items-center sm:gap-4 sm:p-5`}
                >
                  {/* Top row: icon + text */}
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <span className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                      <Icon className="size-10 drop-shadow-sm sm:size-12" />
                    </span>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {platform}
                      </p>
                      <p className="mt-0.5 truncate font-semibold text-foreground">
                        {handle}
                      </p>
                    </div>
                  </div>

                  {/* CTA button — full width on mobile, auto on sm+ */}
                  <span
                    className={`w-full rounded-full py-2 text-center text-xs font-semibold shadow-sm transition-all duration-200 group-hover:scale-[1.02] sm:w-auto sm:flex-shrink-0 sm:px-4 ${btnBg}`}
                  >
                    {buttonLabel}
                  </span>
                </a>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
