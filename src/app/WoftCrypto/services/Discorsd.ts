import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { env } from "../config/env"

@Injectable()
export class DiscordService {

  constructor(private http: HttpClient) {
  }

  getListMsg(cnId, before) {
    let params = "?limit=100&"
    params += !!before ? `before=${before}&` : ""
    const url = `${env.discord_url}channels/${cnId}/messages${params}`
    const headers: HttpHeaders = new HttpHeaders();
    headers.set("Authorization", env.discord_tk);
    const options = {
      headers: {
        "Authorization": env.discord_tk
      }
    }
    return this.http.get(url, options).toPromise();
  }

}