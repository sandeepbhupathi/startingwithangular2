import { Component,OnInit  } from 'angular2/core';
import {IEvent} from './events'
import { EventFilterPipe } from '../filters/event-filter.pipe';
import { ThumbComponent } from '../shared/thumb.component';
import { EventService }	from '../service/event.service';
import { EventDetailComponent }	from '../event-detail/event-detail.component';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/events/event-list.component.html',
    styleUrls: ['app/events/event-list.component.css'],
    pipes: [EventFilterPipe],
    directives: [ThumbComponent,ROUTER_DIRECTIVES]
})
export class EventListComponent implements OnInit {
    pageTitleNew: string = 'Event List';
    imageWidht: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    searchText: string;
    events: IEvent[];
    errorMessage: string;
    
    constructor(private _eventService: EventService) {

    }
        
    toggleImage(): void{
        this.showImage = !this.showImage;            
    }
        
        
    ngOnInit(): void {
		this._eventService.getEvents()
			.subscribe(events => this.events = events,
			error => this.errorMessage = <any>error);
	}
        
    onRatingClicked(message: string): void {
		this.pageTitleNew = 'Event List: ' + message;
	}
}