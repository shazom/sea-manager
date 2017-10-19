import { Student } from "app/shared/models/student";

export interface Class {
    id: number;
    name: string;
    students: Student[];
}