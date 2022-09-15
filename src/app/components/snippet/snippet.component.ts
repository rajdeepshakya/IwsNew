import { Component, OnInit } from '@angular/core';
import { API_ROUTES } from 'src/app/constants/api-route.constant';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {

  companiesList: any = [];
  companyDetail: any;
  DataList: any = [];
  LiDtaa: any;
  constructor(private service: ApiServiceService,) { }

  ngOnInit(): void {
    this.getsnippetListByUserId();
  }
  getsnippetListByUserId() {
    debugger

    this.service.get({}, `${API_ROUTES.Account.logs + 3}`).pipe().subscribe((res) => {
      if (res) {
        this.companiesList = res;//.filter((x:any)=>x.id==12)[0];
        this.companiesList.forEach((element: any) => {
          if (element.id > 11) {
            this.LiDtaa = JSON.parse(element.data);
            let ggg={
              name:element.name,
              ul: this.LiDtaa.ul
            }
            this.DataList.push(ggg);
            console.log("resData======================>"+JSON.stringify(this.DataList));
          }
        });
      } else {

      }
    }
    )
  }
}
