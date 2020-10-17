import { Injectable , EventEmitter} from '@angular/core';
import { Subscription} from 'rxjs/internal/Subscription'

@Injectable({
  providedIn: 'root'
})
export class Event_emitterNavbarService {

  invokeNavBarComponentFunction = new EventEmitter();
  subVar: Subscription;

constructor() { }

onNavBarReRun() {
  // console.log("nav event fired");
  this.invokeNavBarComponentFunction.emit();
}

}












