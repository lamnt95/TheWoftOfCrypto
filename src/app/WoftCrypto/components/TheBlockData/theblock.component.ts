import { Component } from '@angular/core';
import { DiscordMsg } from '../../models/DiscordMsg';
import { DiscordService } from '../../services/Discorsd';
import { DatabaseService } from '../../services/Database';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from "lodash";
import * as moment from "moment";


@Component({
  selector: 'theblock',
  templateUrl: 'theblock.component.html',
  providers: [DiscordService, DatabaseService],
})
export class TheBlockComponent {


  constructor(
    public discordService: DiscordService,
    public databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
   
  }

  

}
