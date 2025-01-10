import { NgFor } from '@angular/common';
import { Component, signal, computed, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

interface Job {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [NgFor,
    FormsModule 
  ],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  jobs = signal<Job[]>([]);

  compeletedJobCount = computed (() => this.jobs().filter(job => job.completed).length);
  newJobName = signal('');

  addJob() {
    if(this.newJobName().trim() === '') return;

    const newJob: Job = {
      name: this.newJobName(),
      completed: false
    }
    this.jobs.update(jobs => [...jobs, newJob])

    this.newJobName.set('')
  }

  toggleJobCompletion(jobIndex: number) {
    this.jobs.update(jobs => {
      const updatedjobs = [...jobs];
      updatedjobs[jobIndex].completed = !updatedjobs[jobIndex].completed;
      return updatedjobs;
    })
  }
}
