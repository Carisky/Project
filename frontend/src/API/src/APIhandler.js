import config from "../config/config";
import axios from "axios";
class APIhandler {
  static async getUserToken({params}) {
    result = await axios.post(config.GetToken);
    return result;
  }
}

export default APIhandler;
