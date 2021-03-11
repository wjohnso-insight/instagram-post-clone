import User from '../users/user'

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
    likes: User[]
} 