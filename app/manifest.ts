import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marvel App",
    short_name: "Marvel App",
    description: "An app for choosing your favorite Marvel characters",
    start_url: "/",
    theme_color: "#ec1e23",
    background_color: "#ffffff",
    display: "standalone",
  };
}
