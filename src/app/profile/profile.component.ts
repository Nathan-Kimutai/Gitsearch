import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import { GitProfile } from '../gitprofile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public git_profiles=[];

  constructor(private profileService:ProfileService) { }

  //this.profileService.GetprofileInfo()
  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(res => this.git_profiles=res)

  }

}
