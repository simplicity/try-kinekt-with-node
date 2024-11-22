import { getUser } from "../api/endpoints/getUser";

getUser({ params: { id: "some-id" }, query: { includePosts: true } }).then(
  console.log
);
