import "dotenv/config";
import { pipeline } from "../api/pipeline";

export function configureClient() {
  pipeline.setGlobalClientParams({
    baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    authorize: btoa("some authorization"),
  });
}
