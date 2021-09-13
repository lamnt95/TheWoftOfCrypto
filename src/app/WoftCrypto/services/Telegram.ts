import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { env } from "../config/env"

@Injectable()
export class TelegramService {
  constructor(private http: HttpClient) {
  }

  getClient() {
  }
}