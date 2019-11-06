import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  title = "Ana";
  user = {
    name: "",
    email: "",
    password: ""
  };
  users = [];

  register() {
    let user = JSON.parse(JSON.stringify(this.user));
    this.users.push(user);
    this.user = {
      name: "",
      email: "",
      password: ""
    };
  }
}
