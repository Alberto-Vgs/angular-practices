export enum Level{
    "Info",
    "Urgent",
    "Blocking"
}

export interface ITask{
    title:string;
    description:string;
    complete:boolean;
}