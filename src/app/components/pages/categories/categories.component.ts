import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleContent = [
        {
            title: 'How it works(Members)',
            backgroundImage: 'assets/img/page-title/page-title3.jpg'
        }
    ]

    timelineContent = [
        {
            number: '1',
            title: 'Profile Page',
            description: 'Every member gets a profile page. The foundation of the Network is the profile page which makes the client to understand your expertise, experience, knowledge, education etc., by going through the profile page. If you are an advocate and your profile is in this platform, we recommend that you complete, strengthen, verify and update that periodically to get better results',
            buttonText: '',
            buttonLink: '#'
        },
        {
            number: '2',
            title: 'Every Lawyer is an expert in some field',
            description: 'Every lawyer gets expertise is some field over a period of time by handling cases in the same field or by developing deep knowledge in a specific field. Expert means he has sufficient experience in handling a specific type of case with updated legal knowledge. If a person has handled five recovery suit cases, he develops an expertise in recovery suit and if he puts little efforts to update his knowledge in that subject, he can be called as an expert in that field',
            buttonText: '',
            buttonLink: '#'
        },
        {
            number: '3',
            title: 'More cases by reference',
            description: 'Most of the cases come to lawyers through some referrals only. These referrals are normally through friends and relatives. This platform provides systematic networking opportunity by bringing lawyers from all over India in one platform. More over the platform helps members practising in the same field, to interact with each other, develop confidence and understanding of their capabilities. When people from different cities handling arbitrations can get an opportunity to meet virtually and otherwise, they will understand the capacity and knowledge of the other members. Since they meet regularly, the comfort level will increase and they will start referring arbitration matters to  the other members',
            buttonText: '',
            buttonLink: '#'
        },
        {
            number: '4',
            title: 'Concept of three branches of law Per lawyer',
            description: 'We believe that every lawyer is an expert or can become an expert over a period of time because all lawyers will be practicing in various areas of expertise during their initial years of practice and eventually become an expert in one or a few fields of law. Hence, the network allows only three fields of law per lawyer and hence naturally a member will choose the three fields in which he is strong. This would eventually help the client to choose a lawyer with specific expertise.',
            buttonText: '',
            buttonLink: '#'
        },
        {
            number: '5',
            title: 'Concept of three Courts per lawyer',
            description: 'Similarly, a lawyer practicing in one court will become an expert in filing and handling of matters in that court and then over a period of time becomes capable of handling matters in few other courts also. For Example a Lawyer in Chennai may be practising in High Court, State Consumer Commission, State Administrative tribunal, Central Administrative Tribunal and City civil Court',
            buttonText: 'Browse Now',
            buttonLink: '#'
        },
        {
            number: '6',
            title: 'Networking, Conferences and Skill development Events',
            description: 'You are at the right place if you are looking for a big growth in your practice. This plat form if used effectively can create wonders in the volume of work you are doing. We also conduct weekly webinars, skill development sessions, national and international conferences and networking sessions with respect to each practice area among the members to help the members to connect with other advocates for collaborations in your own expertise or field of law and also connect with prospects. This platform helps to expand your network and allows you to express your opinions on the legal subjects The growth in your profession though this platform depends on the profile page which makes the client to understand your expertise and If you are an advocate and your profile is in this platform, we recommend that you complete, strengthen, verify and update that periodically',
            buttonText: 'Browse Now',
            buttonLink: '#'
        }
    ]
    howItWorksBox = [
        {
            icon: 'flaticon-placeholder',
            title: 'Register',
            paragraph: 'If you are searching for a lawyer, the platform helps you with various search methods  to find an advocate from any place all over India according to your respective requirements and needs. This directory is a huge data base of lawyers spreading to each city/town'
        },
        {
            icon: 'flaticon-support-1',
            title: 'Update Profile & Expertise',
            paragraph: 'You can use the tools provided by the platform to find an advocate who fits to the requirements of your case. The lawyers listed in this directory take full responsibility for the information provided in the profile and each one of them are responsible for the same'
        },
        {
            icon: 'flaticon-tick',
            title: 'Get Connected With Clients',
            paragraph: 'know about them and finalise the fee before handing over the case. As we provide a complete and detailed profile of the advocate you can search the lawyers on the following criteria:'
        }
    ]
}