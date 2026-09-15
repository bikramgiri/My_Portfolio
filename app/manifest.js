export default function manifest() {
  return {
    name: "Bikram Giri - Portfolio",
    short_name: "Bikram Giri",
    description:
      "Bikram Giri is a Web Developer and AI/ML Enthusiast building modern, scalable web apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
