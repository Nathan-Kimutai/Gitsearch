import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private username:string;
  private clientid='58efe2f056df6787f532';
  private clientsecret='255fdd0f9d77046d8acdb1b891bb3217875ae240';

  public git_profiles;

  public usernametosearch;

  constructor(private profileService:ProfileService) { }

  onClickSubmit(data){
    this.usernametosearch=data.username;
    this.profileService.getProfileInfo(this.usernametosearch).subscribe(res => this.git_profiles = res);
  }

  //this.profileService.GetprofileInfo()
  ngOnInit() {
    this.profileService.getProfileInfo(this.usernametosearch).subscribe(res => this.git_profiles = res);

  }

}
