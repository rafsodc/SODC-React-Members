import httpService from "../../ReactHelpers/http/httpService"

export default class userService extends httpService {

  login(data) {
    return this.service.post("/login", data)
  }
}