import { Injectable , EventEmitter} from '@angular/core';
import { Subscription} from 'rxjs/internal/Subscription'

@Injectable({
  providedIn: 'root'
})
export class Event_emitterCustomService {

  invokeSemesterConfigComponentFunction = new EventEmitter();
  subVar: Subscription;
  
constructor() { }

onSemConfigReRun(data:any) {
  console.log(data);
  this.invokeSemesterConfigComponentFunction.emit(data);
}


}
