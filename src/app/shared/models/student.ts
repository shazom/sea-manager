import { Helper } from "app/shared/models/helper";

export interface Student {
  id: number;
  studentId: number;
  privateName: string;
  lastName: string;
  classId: number;
  subjectsIds: number[];
  zeroSeven?: string;
  diagnosis: {
    isExists: boolean;
    description: string;
  };
  attentionDeficit: {
    isExists: boolean;
    description: string;
  };
  card: {
    isExists: boolean;
    description: string;
  };
  helpersDiagnosis: Helper[];
  helpersSchool: Helper[];
  helpersBagrut: Helper[];
  comments: string;
}
