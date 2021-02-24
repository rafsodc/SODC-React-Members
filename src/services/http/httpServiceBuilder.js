import userService from "./userService";
import httpService from "../../ReactHelpers/http/httpService"


const httpServiceBuilder = (formName, token) => {

  const httpServices = {
    login: userService,
    user: httpService
  }

  return new httpServices[formName](formName, token);
}


export default httpServiceBuilder;