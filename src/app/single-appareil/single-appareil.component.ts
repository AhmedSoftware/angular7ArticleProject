import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../appareil/appareil.service';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name:string;
  status:string;
  constructor(private appareilServic:AppareilService,private route:ActivatedRoute) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    var appareil=this.appareilServic.getAppareilById(+id);
    this.name=appareil.name;
    this.status=appareil.status;
  }

}
