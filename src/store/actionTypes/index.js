import * as event from "./event";
import * as booking from "./booking";
import * as typeAhead from "./typeAhead"
import * as ticket from "./ticket"
import authentication from "./authentication"
import * as transaction from "./transaction"
import * as page from "./page"
import * as contact from "./contact"
import * as basket from "./basket"
import * as error from "./error"
import * as user from "./user"
import agenda from "./agenda"

const actionTypes = {
  ...event,
  ...authentication,
  ...agenda,
  booking: booking,
  ticket: ticket,
  typeAhead: typeAhead,
  transaction: transaction,
  page: page,
  contact: contact,
  basket: basket,
  error: error,
  user: user
}

export default actionTypes;