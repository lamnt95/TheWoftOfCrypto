import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { db } from "../config/db"


@Injectable()
export class DatabaseService {
  constructor(private http: HttpClient) {
  }

  getAd(cnId) {
    return _.map(_.filter(db.ad_cn, (i: any = {}) => i.cn_id == cnId), "ad_id");
  }

  getCnId(cnCode) {
    return _.get(_.filter(db.cn, (i: any = {}) => i.code == cnCode), "0.id_real");
  }
}