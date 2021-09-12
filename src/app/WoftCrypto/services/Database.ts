import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const db = {
  "cate_cn": [
    {
      "id": "1",
      "name": "Discord"
    }
  ],
  "cn": [
    {
      "id": "1",
      "id_real": "879220174262243369",
      "cate_cn_id": "1",
      "name": "Avax",
      "desc": "Avax"
    }
  ],
  "cate_ad": [
    {
      "id": "1",
      "id_real": "878649388644311060",
      "username": "Gatie",
      "desc": "Gatie"
    }
  ],
  "ad_cn": [
    {
      "id": "1",
      "ad_id": "878649388644311060",
      "cn_id": "879220174262243369"
    }
  ]
}

@Injectable()
export class DatabaseService {
  constructor(private http: HttpClient) {
  }

  getAd(cnId) {
    return _.map(_.filter(db.ad_cn, (i: any = {}) => i.cn_id == cnId), "ad_id");
  }
}