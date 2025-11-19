import { Component , computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { type UserProps } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
  imports: [Card],
})
export class User {
  // with signal approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  //  select = output<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // @Input({required: true}) id!: string ;
  // @Input({required: true}) avatar!: string ;
  // @Input({required: true}) name!: string ;

  @Input({required: true}) selected !: boolean ;
  @Input({required: true}) user !: UserProps ;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectedUser(){
    this.select.emit(this.user.id);
  }
}
