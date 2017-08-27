import { WelcomeBoardPage } from './../welcome-board/welcome-board';
import { BoardsProvider } from './../../providers/boards/boards';
import { TasksProvider } from './../../providers/tasks/tasks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TasksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  boardName;
  constructor(public navCtrl: NavController, public navParams: NavParams,private taskDetails:TasksProvider,private boardService:BoardsProvider) {
    this.boardName=navParams.get('name');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }
  tasks;
  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
taskitemOldname;showCreateLists:boolean;
canEdit=false;
  tasksList;
  listName;
  updateError;
  updateErrorMsg;
  taskName;
  newTasksList=[];
  taskCard=[];
  showCreateTasks;
  showLists(){
      this.boardService.getCurrentBoard(this.taskDetails.listId).subscribe(data=>{
          if(data){
             
               this.taskDetails.getListDetails(this.taskDetails.listUrl).subscribe(data=>{
                   
               this.tasks=data;
               this.tasksList=this.tasks['lists'];
                   this.newTasksList=[];
                  this.tasksList.forEach(val=>{
                      this.taskDetails.getTasks(val._id).subscribe(data=>{
                          if(data['task']){
                          val.tasks=data['task']['tasks'];
                              }
                          this.newTasksList.push(val);
                          console.log(this.newTasksList);
                          this.newTasksList.sort(function(a,b){
                              return a['_id'].localeCompare(b['_id']);
                          });
                      })
                  });
              });
          }
      })
     
  }   
  ngOnInit() {
    if(this.taskDetails.listId){
    this.showLists();
    }
    else{
        this.navCtrl.push(WelcomeBoardPage);
    }
  }
/*editTask(taskitem){
this.taskitemOldname=taskitem;
}*/
  /***************Task List******************/
  createList(listname,board_id){
    this.taskDetails.createList(listname,board_id).subscribe(data=>{
          if(data['success']){
             this.showLists();
             this.listName='';
             this.showCreateLists=false;    
                            this.updateError=false;
          }
        else{
            this.updateError=true;
              this.updateErrorMsg="List with the same name already exists";
              console.log(data);
        }
    })
  }
  updateListName(list_id,list_name){
      this.taskDetails.updateListName(list_id,list_name).subscribe(data=>{
          if(!data['success']){
              this.updateError=true;
              this.updateErrorMsg="List with the same name already exists";
              console.log(data);
          }
          else{
               this.updateError=false;
          }
      })
  }
  deleteList(board_id,list_id){
      console.log(board_id,list_id);
    this.taskDetails.deleteList(board_id,list_id).subscribe(data=>{
        if(data['success']){
             this.showLists();
          }  
    })  
  };
  hideCreateList(){
      this.listName='';
      this.showCreateLists=false;
  }
  /******************Task Item******************/ 
  createTask(taskname,listname){
      if(taskname){
      this.taskDetails.createTask(taskname,listname).subscribe(data=>{
          if(data['success']){
              this.showCreateTasks=false;
               this.taskName='';
              this.showLists();
          }
      })
      }
  }
  updateTaskName(task_id,task_name){
      this.taskDetails.updateTaskName(task_id,task_name).subscribe(data=>{
          if(!data['success']){
              this.updateError=true;
              this.updateErrorMsg="List with the same name already exists";
              console.log(data);
          }
          else{
               this.updateError=false;
          }
      })
  }
  
  deleteTask(list_id,task_id){
    this.taskDetails.deleteTask(list_id,task_id).subscribe(data=>{
        if(data['success']){
             this.showLists();
          }  
    })  
  };
  cancelAddTask(){
     this.taskName='';
  }
}
