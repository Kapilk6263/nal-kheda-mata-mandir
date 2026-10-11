import { createFileRoute } from "@tanstack/react-router";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const Route = createFileRoute("/api/visitor-count")({
  server: {
    handlers: {
      POST: async () => {
        try {
          const count = await redis.incr("website:total_page_views");

          return Response.json(
            { count },
            {
              headers: {
                "Cache-Control": "no-store",
              },
            }
          );
        } catch (error) {
          console.error("Visitor counter error:", error);

          return Response.json(
            { error: "Unable to update visitor count" },
            { status: 500 }
          );
        }
      },
    },
  },
});