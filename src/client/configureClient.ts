import "dotenv/config";
import { pipeline } from "../api/pipeline";

export function configureClient() {
  pipeline.setGlobalClientParams({
    baseUrl: process.env.BASE_URL ?? "http://0.0.0.0:3000",
    authorize: btoa("some authorization"),
  });
}
