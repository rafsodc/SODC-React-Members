import * as event from "./event";
import * as authentication from "./authentication"
import * as user from "./user"
import * as ticket from "./ticket"
import * as transaction from "./transaction"

const apiPaths = {
  ...event,
  authentication: authentication,
  ticket: ticket,
  user: user,
  transaction: transaction
}

export default apiPaths;