import userService from "./userService";
import httpService from "../../ReactHelpers/http/httpService"

const httpServices = {
  login: userService,
  user: httpService
}

export default httpServices;