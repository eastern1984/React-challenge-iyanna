export const NEWS = 'news';
export const OTHER = 'other';

export interface IActivity{
    _id?: string;
    imgSrc?: string;
    type: string;
    title: string;
    text: string;
    date: string;
}