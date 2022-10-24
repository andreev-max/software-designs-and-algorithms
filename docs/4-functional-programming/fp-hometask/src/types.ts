export enum SortValueType {
  DESC = 'desc',
  ASC = 'asc',
}

export type SortValue = SortValueType | '';

export enum FilterValueType {
  WithoutPosts = 'Without posts',
  MoreThan100Posts = 'More than 100 posts',
}
