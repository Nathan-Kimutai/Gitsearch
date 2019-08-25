import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public git_profiles;

  public usernametosearch;

  constructor(private profileService:ProfileService) { }


  //this.profileService.GetprofileInfo()
  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(res => this.git_profiles = res);

  }

}
