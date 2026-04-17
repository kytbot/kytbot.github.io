export type PageId =
  | 'home'
  | 'ai'
  | 'manual'
  | 'course'
  | 'health'
  | 'doctor'
  | 'silver'
  | 'children'
  | 'feedback'
  | 'me';

export interface NavItem {
  id: PageId;
  label: string;
}
