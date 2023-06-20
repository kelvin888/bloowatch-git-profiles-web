export interface RepositoryType {
    id: number
    name: string
    owner: OwnerType
    description: string
    stargazers_count: number
  }
  
  export interface OwnerType {
    login: string
    avatar_url: string
  }