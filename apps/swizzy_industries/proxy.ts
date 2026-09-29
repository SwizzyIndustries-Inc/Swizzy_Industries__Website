import { NextResponse, type NextRequest } from "next/server"

import { microfrontendUpstreams } from "./lib/microfrontend-upstreams"

import { connect } from "node:net"

function isPortOpen(port: number, timeoutMs = 500): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = connect({ port, host: "localhost" })

    const finish = (result: boolean) => {
      socket.destroy()
      resolve(result)
    }

    socket.setTimeout(timeoutMs)
    socket.once("connect", () => finish(true))
    // Slow but not refused: assume it's up and let the rewrite handle it
    socket.once("timeout", () => finish(true))
    socket.once("error", (error: NodeJS.ErrnoException) => {
      finish(error.code !== "ECONNREFUSED" && error.code !== "EHOSTUNREACH")
    })
  })
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }

    return entities[character] ?? character
  })
}

function getRequestHost(request: NextRequest) {
  const raw =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? ""
  return (raw.split(",")[0] ?? "").trim().toLowerCase() // e.g. "nufaika.localhost:4200"
}

function unavailableResponse(request: NextRequest, serviceName: string) {
  const requestHost = getRequestHost(request) // nufaika.localhost:4200
  const port = requestHost.match(/:\d+$/)?.[0] ?? ""
  const hostname = requestHost.replace(/:\d+$/, "")
  const gatewayHostname = hostname.split(".").slice(1).join(".") || "localhost"
  const protocol = request.nextUrl.protocol // "http:"

  const gatewayUrl = new URL(`${protocol}//${gatewayHostname}${port}/`)
  const illustrationUrl = new URL(
    "/images/internal-server-error.svg",
    gatewayUrl
  )
  const retryUrl = escapeHtml(
    `${protocol}//${requestHost}${request.nextUrl.pathname}${request.nextUrl.search}`
  )

  const title = escapeHtml(serviceName)
  const homeUrl = escapeHtml(gatewayUrl.toString())

  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f5f8fc">
    <title>Service unavailable | Swizzy Industries</title>
    <style>
      :root { color-scheme: light dark; font-family: Inter, ui-sans-serif, system-ui, sans-serif; color: #0f172a; background: #f5f8fc; }
      * { box-sizing: border-box; }
      body { min-height: 100vh; margin: 0; display: flex; flex-direction: column; background: radial-gradient(ellipse at 82% 12%, #e4eefb 0, transparent 34rem), #f5f8fc; }
      header, footer { width: min(100% - 2.5rem, 72rem); margin-inline: auto; }
      header { padding-block: 1.25rem; }
      .brand { display: inline-flex; min-height: 2.75rem; align-items: center; gap: .65rem; color: inherit; text-decoration: none; font-weight: 700; }
      .mark { display: grid; width: 2.4rem; aspect-ratio: 1; place-items: center; border-radius: .75rem; color: white; background: #1b5fc1; font-size: 1.25rem; }
      main { width: min(100% - 2.5rem, 72rem); flex: 1; margin: auto; padding-block: 2rem 3.5rem; display: grid; grid-template-columns: minmax(0, .9fr) minmax(18rem, 1.1fr); align-items: center; gap: clamp(2rem, 6vw, 5rem); }
      .eyebrow { color: #1b5fc1; font-size: .75rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
      h1 { max-width: 12ch; margin: 1rem 0; font-family: 'Plus Jakarta Sans', Inter, ui-sans-serif, system-ui, sans-serif; font-size: clamp(2.25rem, 5vw, 3.5rem); line-height: 1.1; }
      .copy { max-width: 34rem; color: #475569; font-size: 1.05rem; line-height: 1.7; }
      .actions { display: flex; flex-wrap: wrap; align-items: center; gap: .8rem 1.25rem; margin-top: 1.75rem; }
      .button { display: inline-flex; min-height: 3rem; align-items: center; justify-content: center; padding: .75rem 1.25rem; border-radius: .75rem; color: #fff; background: #1b5fc1; font-size: .95rem; font-weight: 650; text-decoration: none; }
      .home-link { min-height: 2.75rem; display: inline-flex; align-items: center; color: #1b5fc1; font-weight: 600; text-decoration: none; }
      .illustration { display: block; width: 100%; height: auto; }
      footer { padding-block: 1rem 1.4rem; border-top: 1px solid #e2e8f0; color: #64748b; font-size: .75rem; }
      @media (max-width: 700px) { main { grid-template-columns: 1fr; gap: 1.25rem; padding-block: .75rem 2rem; } .illustration { width: min(100%, 25rem); margin-inline: auto; } .message { order: 2; } .art { order: 1; } h1 { max-width: 15ch; } }
      @media (prefers-color-scheme: dark) { :root { color: #f8fafc; background: #0f172a; } body { background: radial-gradient(ellipse at 82% 12%, #15335b 0, transparent 34rem), #0f172a; } .copy { color: #cbd5e1; } .home-link { color: #93c5fd; } footer { border-color: #334155; color: #94a3b8; } }
      @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; } }
    </style>
  </head>
  <body>
    <header><a class="brand" href="${homeUrl}"><span class="mark" aria-hidden="true">S</span><span>Swizzy Industries</span></a></header>
    <main>
      <section class="message" aria-labelledby="error-title">
        <p class="eyebrow">Service unavailable</p>
        <h1 id="error-title">We can&apos;t reach ${title} right now.</h1>
        <p class="copy">The service is temporarily offline or still starting. Please try again in a moment.</p>
        <div class="actions"><a class="button" href="${retryUrl}">Try again</a><a class="home-link" href="${homeUrl}">Back to Swizzy Industries</a></div>
      </section>
      <div class="art"><img class="illustration" src="${escapeHtml(illustrationUrl.toString())}" alt="Illustration for a temporarily unavailable service"></div>
    </main>
    <footer>© ${new Date().getFullYear()} Swizzy Industries</footer>
  </body>
</html>`,
    {
      status: 503,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store, max-age=0",
        "retry-after": "10",
      },
    }
  )
}

export async function proxy(request: NextRequest) {
  const requestHost = getRequestHost(request)
  const hostname = requestHost.replace(/:\d+$/, "")
  const service = microfrontendUpstreams.find(({ host }) => hostname === host)

  if (!service) {
    return NextResponse.next()
  }

  if (await isPortOpen(service.port)) {
    return NextResponse.next()
  }

  const acceptsHtml = request.headers.get("accept")?.includes("text/html")

  if (request.method === "GET" && acceptsHtml) {
    return unavailableResponse(request, service.name)
  }

  // Assets, favicon, HMR, etc.: cheap 503 instead of a noisy proxy error
  return new Response(null, {
    status: 503,
    headers: { "cache-control": "no-store", "retry-after": "10" },
  })
}
