import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { TaskInterface } from '../../core/interface/task.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
  imports: [TableComponent],
})
export class ListaTareasComponent implements OnInit {
  tituloTabla: string = 'My Tasks';
  tasks: TaskInterface[] = [];
  columnas: string[] = ['name', 'description', 'check'];
  showAction:boolean = false

  ngOnInit(): void {
    this.tasks = [
      {
        name: '',
        description: '',
      }
    ]
  }

  async addTask() {
    const { value: formValues } = await Swal.fire({
      title: 'Add task',
      html: `
      <form class="p-4">
        <div class="mb-3">
          <label for="Task" class="form-label">Task Name</label>
          <input type="text" class="form-control" id="Task">
          <div class="form-text">Add your new task here.</div>
        </div>
        <div class="mb-3">
          <label for="Description" class="form-label">Description</label>
          <input type="text" class="form-control" id="Description">
        </div>
      </form>
      `,
      preConfirm: () => {
        return [
          (document.getElementById("Task") as HTMLInputElement).value,
          (document.getElementById("Description") as HTMLInputElement).value,
        ];
      },
      icon: 'info',
    });
    if (formValues) {
      const task: TaskInterface = {
        name: formValues[0],
        description: formValues[1]
      }
      this.tasks.push(task)
      Swal.fire(JSON.stringify(formValues));
    }
  }
}
