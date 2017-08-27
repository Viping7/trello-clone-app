import { TasksPage } from './../tasks/tasks';
import { BoardsProvider } from './../../providers/boards/boards';
import { TasksProvider } from './../../providers/tasks/tasks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomeBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome-board',
  templateUrl: 'welcome-board.html',
})
export class WelcomeBoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private taskDetails:TasksProvider,private boardService:BoardsProvider) {
    this.getBoards();    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeBoardPage');
  }
  
  boards;
	boardname:any;
	showCreateBoard:boolean;
    getBoards(){
        this.boardService.getBoards().subscribe(data=>{
          this.boards=data;
      })
    }
  
 
addBoard(){
	this.showCreateBoard=false;
	if(this.boardname){
        this.boardService.createBoard(this.boardname).subscribe(data=>{
            
            if(data['success']){
                this.getBoards();   
            }
        })
    }
	this.boardname='';
}
deleteBoard(board){
    let boardid=board['_id'];
        var index=this.boards.indexOf(board);
        
        this.boardService.deleteBoard(boardid).subscribe(data=>{
        
            if(data['success']){
                if(index>0){
        this.boards.splice(index,index);
        }
        else{
            if(index==0){
             this.boards.splice(0);   
            }
        }
            }
        });
}
getListDetails(id,name){

  this.navCtrl.push(TasksPage,{name});	
  this.taskDetails.setListUrl(id);

}
    hideCreateBoard(){
        this.boardname='';
        this.showCreateBoard=false;
    }
}



