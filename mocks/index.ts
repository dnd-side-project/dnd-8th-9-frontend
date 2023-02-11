const isServer = typeof window === undefined;

if (isServer) {
  (async () => {
    const { server } = await import("@/mocks/server");
    server.listen();
  })();
} else {
  (async () => {
    const { worker } = await import("@/mocks/browser");
    worker.start();
  })();
}

export {};
