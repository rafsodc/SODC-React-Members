import * as event from "./event";
import * as booking from "./booking";
import * as typeAhead from "./typeAhead"
import * as ticket from "./ticket"
import * as authentication from "./authentication"
import * as transaction from "./transaction"

const actionTypes = {
  ...event,
  booking: booking,
  ticket: ticket,
  typeAhead: typeAhead,
  authentication: authentication,
  transaction: transaction
}

export default actionTypes;