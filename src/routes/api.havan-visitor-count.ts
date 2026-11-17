import { createFileRoute } from "@tanstack/react-router";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const Route = createFileRoute("/api/havan-visitor-count")({
  server: {
    handlers: {
      // Called only for first-time visitors — increments count
      POST: async () => {
        try {
          const count = await redis.incr("havan:total_page_views");
          return Response.json(
            { count },
            { headers: { "Cache-Control": "no-store" } },
          );
        } catch (error) {
          console.error("Havan visitor counter error:", error);
          return Response.json({ error: "failed" }, { status: 500 });
        }
      },
      // Called for returning visitors — reads without incrementing
      GET: async () => {
        try {
          const count =
            (await redis.get<number>("havan:total_page_views")) ?? 0;
          return Response.json(
            { count },
            { headers: { "Cache-Control": "no-store" } },
          );
        } catch (error) {
          console.error("Havan visitor counter error:", error);
          return Response.json({ error: "failed" }, { status: 500 });
        }
      },
    },
  },
});
