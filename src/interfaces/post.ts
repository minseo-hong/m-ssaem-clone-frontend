import { user } from "./user";

export interface post {
  id: number,
  title: string,
  content: string,
  like: number,
  comment: number,
  releasedDate: string,
  user: user,
  isHot: boolean
}
