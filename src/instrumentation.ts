export async function register() {
  if (
    typeof localStorage !== "undefined" &&
    typeof localStorage.getItem !== "function"
  ) {
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0,
      },
      writable: true,
    });
  }
}
