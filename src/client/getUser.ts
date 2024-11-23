import { getUser } from "../api/endpoints/users/getUser";

getUser({ params: { id: 1 } }).then(console.log);
