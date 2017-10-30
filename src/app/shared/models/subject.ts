import { Student } from "app/shared/models/student";

export interface Subject {
  id: number;
  name: string;
  students: Student[];
}
