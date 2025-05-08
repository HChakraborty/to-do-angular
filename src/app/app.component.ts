import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Item } from './to-do-item/to-do-item';
import * as constStr from "./using";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public cons = constStr;
  title = 'My to-do list';

  private filter: "all" | "active" | "done" = "all";

  private allItems: Item[] = [
    {
      description: "eat", 
      done: true
    },
    {
      description: "sleep", 
      done: false
    },
    {
      description: "play", 
      done: false
    },
    {
      description: "laugh", 
      done: false
    }
  ]

  get items(): Item[] {
    if(this.filter === "all") {
      return this.allItems;
    }

    return this.allItems.filter((item) => {
      this.filter === "done" ? item.done: !item.done;
    })
  }

  addItem(description: string) {
    if(!description) return;

    this.allItems.unshift({
      description: description,
      done: false
    });
  }
}
