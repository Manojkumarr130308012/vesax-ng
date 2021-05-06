import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-demo-two',
  templateUrl: './home-demo-two.component.html',
  styleUrls: ['./home-demo-two.component.scss']
})
export class HomeDemoTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sectionTitle = [
    {
        title: 'How It Works',
        paragraph: ''
    }
]
howItWorksBox = [
    {
        icon: 'flaticon-placeholder',
        title: 'Signin & Signup',
        paragraph: 'If you are searching for a lawyer, the platform helps you with various search methods  to find an advocate from any place all over India according to your respective requirements and needs. This directory is a huge data base of lawyers spreading to each city/town'
    },
    {
        icon: 'flaticon-support-1',
        title: 'Browes Directory',
        paragraph: 'You can use the tools provided by the platform to find an advocate who fits to the requirements of your case. The lawyers listed in this directory take full responsibility for the information provided in the profile and each one of them are responsible for the same'
    },
    {
        icon: 'flaticon-tick',
        title: 'Get Connected With Legal Experts',
        paragraph: 'know about them and finalise the fee before handing over the case. As we provide a complete and detailed profile of the advocate you can search the lawyers on the following criteria:'
    }
]
}
