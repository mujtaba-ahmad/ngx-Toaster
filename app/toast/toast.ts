export interface IToast {
  id: number;
  title: string;
  msg: string;
  showClose: boolean;
  type: string;
  theme: string;
  timeout: number;
}
