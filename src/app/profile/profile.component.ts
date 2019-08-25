import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public git_profiles;

  constructor(private profileService:ProfileService) { }

  //this.profileService.GetprofileInfo()
  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(data => this.git_profiles = data);
    console.log(this.git_profiles);

  }

}
