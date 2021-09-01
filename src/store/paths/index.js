import * as event from "./event";
import * as authentication from "./authentication"
import * as user from "./user"
import * as ticket from "./ticket"
import * as transaction from "./transaction"
import * as basket from "./basket"
import * as rank from "./rank"
import * as contact from "./contact"

const apiPaths = {
  ...event,
  authentication: authentication,
  ticket: ticket,
  user: user,
  transaction: transaction,
  basket: basket,
  rank: rank,
  contact: contact
}

export default apiPaths;