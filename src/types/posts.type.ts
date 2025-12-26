export type postsState = {
  posts: null | Post [];
};



export interface ApiResponse {
    message: string;
    paginationInfo: PaginationInfo;
    posts: Post[];
}

export interface PaginationInfo {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage: number | null; // Nullable if there's no next page
    total: number;
}

export interface Post {
    _id: string;
    body: string;
    image: string;
    user: User;
    createdAt: string; // ISO 8601 string
    comments: Comment[];
    id:string
}

export interface User {
    _id: string;
    name: string;
    photo: string;
}

export interface Comment {
    lid: string;
    content: string;
    commentCreator: User;
    post: string; // Refers to Post._id
    createdAt: string; // ISO 8601 string
}