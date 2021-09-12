import { Component } from '@angular/core';
import { DiscordMsg } from '../../models/DiscordMsg';
import { DiscordService } from '../../services/Discorsd';
import { DatabaseService } from '../../services/Database';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from "lodash";
import * as moment from "moment";


@Component({
  selector: 'coingecko',
  templateUrl: 'coingecko.component.html',
  providers: [DiscordService, DatabaseService],
})
export class Coingecko {


  constructor(
    public discordService: DiscordService,
    public databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
   
  }

  

}
