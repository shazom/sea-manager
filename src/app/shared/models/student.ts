import { Helper } from "app/shared/models/helper";

export interface Student {
  id: number;
  studentId: number;
  privateName: string;
  lastName: string;
  classId: number;
  curriculumId: number;
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
  helpersSchool: Helper[];
  helpersBagrut: Helper[];
  comments: string;
}
