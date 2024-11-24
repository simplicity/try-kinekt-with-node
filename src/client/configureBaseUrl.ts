import "dotenv/config";
import { pipeline } from "../api/pipeline";

export function configureBaseUrl() {
  pipeline.setGlobalClientParams({
    baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
  });
}
