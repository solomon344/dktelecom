export function useTawkto() {
  const openChat = () => {
    const api = (window as any).Tawk_API;
    if (api?.maximize) {
      api.maximize();
    }
  };

  return { openChat };
}
