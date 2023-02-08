export const isServer = typeof window === undefined;

export const setupMocks = async () => {
  if (isServer) {
    const { server } = await import("@/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@/mocks/browser");
    worker.start();
  }
};
