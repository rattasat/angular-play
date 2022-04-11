import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : constructor`);
  }

  clickButtonCount: number = 0;
  lifecycleList: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngOnChanges`);
  }

  ngOnInit(): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngOnInit`);
  }

  ngDoCheck(): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngDoCheck`);
  }

  ngAfterContentInit(): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    this.lifecycleList.push(`click = ${this.clickButtonCount} : ngOnDestroy`);
  }

  onClickButton() {
    this.clickButtonCount++;
  }
}