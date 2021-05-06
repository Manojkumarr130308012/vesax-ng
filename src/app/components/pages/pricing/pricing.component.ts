import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

	constructor(private authService: SocialAuthService) { }

	ngOnInit(): void {
	}

    pageTitleContent = [
        {
            title: 'MEMBERSHIP',
            backgroundImage: 'assets/img/page-title/page-title2.jpg'
        }
    ]

    monthlyPricing = [
        {
            singlePricingBox: [
                {
                    title: 'Silver Membership',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: 'Sliver membership comes with the following benefits'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Listing of Profile with chat option'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Social Media Links'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Assistance in strengthening the profile'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Free entry to all networking virtual meetings'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Free Entry to all member virtual presentations'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Free entry to 3 virtual skill development programs'
                        }
                    ],
                    price: 'Rs.5000',
                    buttonText: 'REGISTER HERE',
                    buttonLink: '#loginRegisterModal'
                },
                {
                    title: 'Gold membership',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: 'Gold membership come with the following benefits'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'All the benefits of Silver +'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Premium Listing of Profile'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Priority in search results'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Three speaking opportunities complimentary (Two net working meetings and one in Annual conference valued at Rs.70,000)'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Free entry to all virtual skill development programs'
                        }
                    ],
                    price: 'Rs.10000',
                    buttonText: 'REGISTER HERE',
                    buttonLink: '#'
                },
                {
                    title: 'Free GC/Law Officer membership',
                    features: [
                        {
                            icon: 'bx bx-check',
                            text: 'Benefits'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Profile Page'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Participation in all events'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Networking with lawyers'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'GC listing not included in search'
                        },
                        {
                            icon: 'bx bx-check',
                            text: 'Recruitment and engagement'
                        }
                    ],
                    price: 'FREE',
                    buttonText: 'REGISTER HERE',
                    buttonLink: ''
                }
            ]
        }
    ]
    // yearlyPricing = [
    //     {
    //         singlePricingBox: [
    //             {
    //                 title: 'Silver Membership',
    //                 features: [
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Sliver membership comes with the following benefits'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Listing of Profile with chat option'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Social Media Links'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Assistance in strengthening the profile'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Free entry to all networking virtual meetings'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Free Entry to all member virtual presentations'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Free entry to 3 virtual skill development programs'
    //                     }
    //                 ],
    //                 price: '$9.99',
    //                 buttonText: 'Select Plan',
    //                 buttonLink: '#'
    //             },
    //             {
    //                 title: 'Gold membership',
    //                 features: [
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Gold membership come with the following benefits'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'All the benefits of Silver +'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Premium Listing of Profile'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Priority in search results'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Three speaking opportunities complimentary (Two net working meetings and one in Annual conference valued at Rs.70,000)'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Free entry to all virtual skill development programs'
    //                     }
    //                 ],
    //                 price: '$19.99',
    //                 buttonText: 'Select Plan',
    //                 buttonLink: '#'
    //             },
    //             {
    //                 title: 'Free GC/Law Officer membership',
    //                 features: [
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Benefits'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Profile Page'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Participation in all events'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Networking with lawyers'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'GC listing not included in search'
    //                     },
    //                     {
    //                         icon: 'bx bx-check',
    //                         text: 'Recruitment and engagement'
    //                     }
    //                 ],
    //                 price: '$29.99',
    //                 buttonText: 'Select Plan',
    //                 buttonLink: '#'
    //             }
    //         ]
    //     }
    // ]
    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log("ddddddddd","ddddddddddd");
      }
    
      signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      }
    
      signOut(): void {
        this.authService.signOut();
      }
}