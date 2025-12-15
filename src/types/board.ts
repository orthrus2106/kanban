// Domain

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

// Responses

export interface GetColumnsResponse {
  columns: Column[];
}

export interface CreateColumnResponse {
  column: Column;
}

export interface UpdateTaskResponse {
  task: Task;
}

export interface UpdateColumnResponse {
  column: Column;
}

// DTO

export interface UpdateColumnDTO {
  title?: string;
  order?: number;
}

export interface CreateTaskDTO {
  title: string;
  description?: string;
  columnId: number;
}

export interface CreateColumnDTO {
  title: string;
}

export interface UpdateTaskDTO {
  title?: string;
  description?: string | null;
  order?: number;
  columnId?: number;
}

// ARGs

export interface UpdateColumnArgs {
  id: number;
  data: UpdateColumnDTO;
}

export interface UpdateTaskArgs {
  id: number;
  data: UpdateTaskDTO;
}
