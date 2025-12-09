export interface Task {
  id: number;
  title: string;
  description?: string | null;
  order: number;
  columnId: number;
}

export interface Column {
  id: number;
  title: string;
  order: number;
  tasks: Task[];
}

export interface ColumnDTO {
  columns: Column[];
}

export interface CreateTaskDTO {
  title: string;
  description?: string;
  columnId: number;
}
