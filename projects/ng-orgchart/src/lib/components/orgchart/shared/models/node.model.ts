export interface Node {
  id: string;
  name: string;
  title: string;
  children?: Node[];
  groupScale?: number;
}