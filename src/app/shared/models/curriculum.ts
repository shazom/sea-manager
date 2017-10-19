import { Student } from "app/shared/models/student";

export interface curriculum {
    id: number;
    name: string;
    students: Student[];
}