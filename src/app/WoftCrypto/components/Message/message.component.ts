import { Component } from '@angular/core';
import { DiscordMsg } from '../../models/DiscordMsg';
import { DiscordService } from '../../services/Discorsd';
import { DatabaseService } from '../../services/Database';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from "lodash";
import * as moment from "moment";


@Component({
  selector: 'message',
  templateUrl: 'message.component.html',
  providers: [DiscordService, DatabaseService],
})
export class MessageComponent {

  msgLs: DiscordMsg[] = [];
  lastMsgId: any;
  cnIdReal: any;
  adIdReadList: any[];

  constructor(
    public discordService: DiscordService,
    public databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe(res => {
      console.log(res);
      const channel = _.get(res, "channel");
      this.cnIdReal = this.databaseService.getCnId(channel)
      this.getListMsg();

    })
  }

  loadMore() {
    this.getListMsg();
  }

  async getListMsg() {
    if (this.cnIdReal == null || this.cnIdReal == undefined) return;
    this.adIdReadList = this.databaseService.getAd(this.cnIdReal);

    try {

      for (let index = 0; index < 10; index++) {
        const res = await this.discordService.getListMsg(this.cnIdReal, this.lastMsgId) || []
        this.lastMsgId = _.get(_.last(res), "id");
        const data = _.filter(res, (i: any = {}) => _.includes(this.adIdReadList, i.author.id))
        const data2 = _.map(data, (i: any = {}) => ({
          ...i, timestamp: moment(i.timestamp).format("DD/MM/YYYY hh:mm:ss"),
          referenced_message: !!i.referenced_message ? ({ ...i.referenced_message, timestamp: moment(i.referenced_message.timestamp).format("DD/MM/YYYY hh:mm:ss") }) : i.referenced_message
        }))
        // const headIdNew = _.get(_.head(data2), "id");
        // const headIdOld = _.get(_.head(this.msgLs), "id");
        // if (headIdNew != headIdOld) {
        this.msgLs = _.concat(this.msgLs, data2)
        // }
      }

      console.log(this.msgLs)


    } catch (err) {
      console.log(err)
    }
  }

}
