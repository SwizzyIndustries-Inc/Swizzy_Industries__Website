import type { NextConfig } from "next"

import { microfrontendUpstreams } from "./lib/microfrontend-upstreams"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  allowedDevOrigins: ["localhost", "*.localhost"],
  async rewrites() {
    return {
      beforeFiles: [
        ...microfrontendUpstreams.map(({ host, port }) => ({
          source: "/:path*",
          has: [{ type: "host" as const, value: host }],
          destination: `http://localhost:${port}/:path*`,
        })),
      ],
    }
  },
}

export default nextConfig
