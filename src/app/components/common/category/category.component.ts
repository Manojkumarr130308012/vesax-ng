import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Browse  by Category',
            paragraph: 'Our directory of lawyers covers over 15 Categories & More than 560 areas across the world'
        }
    ]
    singleCategoryBox = [
        {
            icon: 'flaticon-cooking',
            title: 'Family',
            numberOfPlaces: '16 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-hotel',
            title: 'Personal Injury',
            numberOfPlaces: '42 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-exercise',
            title: 'Criminal Defense',
            numberOfPlaces: '11 Members',
            link: 'grid-listings-left-sidebar'
        },
        
        {
            icon: 'flaticon-cleansing',
            title: 'Estate Planning',
            numberOfPlaces: '8 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-calendar',
            title: 'Business',
            numberOfPlaces: '12 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-heart-1',
            title: 'Real Estate',
            numberOfPlaces: '16 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-airport',
            title: 'Social Security',
            numberOfPlaces: '8 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-car-insurance',
            title: 'Immigration',
            numberOfPlaces: '10 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-attorney',
            title: 'Bankruptcy',
            numberOfPlaces: '25 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-plumber',
            title: 'Intellectual Property',
            numberOfPlaces: '5 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-plumber',
            title: 'Tax',
            numberOfPlaces: '5 Members',
            link: 'grid-listings-left-sidebar'
        },
        {
            icon: 'flaticon-plumber',
            title: 'Civil Litigation',
            numberOfPlaces: '5 Members',
            link: 'grid-listings-left-sidebar'
        }
    ]

}