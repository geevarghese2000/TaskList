export type TaskPropType = {
    task:{
    id: number;
    title: string;
    status: 'complete' | 'incomplete';
    }
};
 
export type TaskComponentPropType = {
    task: TaskPropType['task'];
    changeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
}