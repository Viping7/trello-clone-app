import { Directive } from '@angular/core';

/**
 * Generated class for the TaskInteractionsDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[task-interactions]' // Attribute selector
})
declare var $:any;
export class TaskInteractionsDirective {

  constructor() {
    $(document).ready(function(){
      $('.edit-list-name').click(function(event){
         $('.edit-list-name').removeClass('form-control').attr('readonly');
         $(this).addClass('form-control').removeAttr('readonly');
         event.stopPropagation();

     });
     $('body').click(function(event){
         $('.edit-list-name').removeClass('form-control').attr('readonly');
         $('.edit-task-name').removeClass('selected-card').hide();
         $('.task-name').show();
     })
    $('.add-card').click(function(event){
        $('.new-card').hide();
        $(this).prev().addClass('selected-card').show();
        $('.overlay').show();
        event.stopPropagation();
     })
     $('.new-card,.edit-task-name').click(function(event){
         event.stopPropagation();
     })
     $('.task-name').click(function(event){
         $('.overlay').show();
         $(this).hide().next().show().addClass('selected-card');
         event.stopPropagation();
     })
     $('.overlay,.save-card,.cancel-card').click(function(){
         $('.overlay,.edit-dialog').hide();
         $(this).parent().prev().show();

     })
 })
  }

}
