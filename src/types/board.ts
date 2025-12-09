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

export interface GetColumnsResponse {
  columns: Column[];
}

export interface CreateTaskDTO {
  title: string;
  description?: string;
  columnId: number;
}

export interface CreateColumnDTO {
  title: string;
}

export interface CreateColumnResponse {
  column: Column;
}
