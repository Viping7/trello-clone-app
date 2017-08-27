import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TasksProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TasksProvider {

  constructor(public http: Http) {
    console.log('Hello TasksProvider Provider');
  }
  listUrl;
  
  listId;
      
  /******************* Task Lists *****************/    
  setListUrl(id){
       this.listId=id;
      this.listUrl='https://mean-trello-clone.herokuapp.com/lists/getList/'+id;
     
  }   
  getListDetails(list_details_url){
    return this.http.get(list_details_url).map(res=>res.json());
  }
  createList(list_name,board_id){
      let newlist={
          list_name:list_name
      };
      return this.http.put('https://mean-trello-clone.herokuapp.com/lists/create/'+board_id,newlist).map(res=>res.json());
  }
      
  deleteList(board_id,list_id){
        return this.http.put('https://mean-trello-clone.herokuapp.com/lists/delete/'+board_id+'/'+list_id,'').map(res=>res.json());
      }
  updateListName(list_id,list_name){
      let list={
          list_name:list_name
      }
      return this.http.put('https://mean-trello-clone.herokuapp.com/lists/updateList/'+list_id,list).map(res=>res.json());
  }
  
  /******************* Task Items *****************/
  
      getTasks(listname){
      return this.http.get('https://mean-trello-clone.herokuapp.com/tasks/getTasks/'+listname).map(res=>res.json());
  }
      createTask(taskname,listname){
      let task={
          task_name:taskname
      }
      return this.http.post('https://mean-trello-clone.herokuapp.com/tasks/create/'+listname,task).map(res=>res.json());
  }
      updateTaskName(task_id,task_name){
      let list={
          task_name:task_name
      }
      return this.http.put('https://mean-trello-clone.herokuapp.com/tasks/update/'+task_id,list).map(res=>res.json());
  }
      deleteTask(list_id,task_id){
        return this.http.put('https://mean-trello-clone.herokuapp.com/tasks/delete/'+list_id+'/'+task_id,'').map(res=>res.json());
      }

}
