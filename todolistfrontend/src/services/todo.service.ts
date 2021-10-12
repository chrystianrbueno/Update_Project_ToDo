import {Injectable} from '@angular/core';
import {ToDo} from '../app/models/ToDo';
import {API_URL_PROD} from '../app/utils/util';
import {RestapiService} from './restapi.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private api: RestapiService) {
  }

  public getAllTodos() {
    return this.api.get<ToDo[]>(API_URL_PROD + '/todos/')
  }
}
