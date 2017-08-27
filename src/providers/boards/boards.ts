import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BoardsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BoardsProvider {

  constructor(public http: Http) {
    console.log('Hello BoardsProvider Provider');
  }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-type', 'application/json '); 
  }
  getBoards(){
    return this.http.get('https://mean-trello-clone.herokuapp.com/boards/getBoards').map(res=>res.json());
}
getCurrentBoard(board_id){
    return this.http.get('https://mean-trello-clone.herokuapp.com/boards/getBoard/'+board_id).map(res=>res.json());
}    
createBoard(board_name){
    var board={
        board_name:board_name
    }
    var headers=new Headers();
    this.createAuthorizationHeader(headers);
     return this.http.post('https://mean-trello-clone.herokuapp.com/boards/createBoard',board,{headers:headers}).map(res=>res.json());
}
deleteBoard(board_id){
    return this.http.delete('https://mean-trello-clone.herokuapp.com/boards/deleteBoard/'+board_id).map(res=>res.json());
}

}
