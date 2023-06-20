import { toast } from "react-toastify";
import { RepositoryType } from "../types/repository";

const useBookmark = () => {
    const bookmarkRepo = (repository: RepositoryType) => {
        const savedRepos = localStorage.getItem("bookmarkedRepos")
        const { id, name, description, stargazers_count, owner: { avatar_url, login } } = repository
        const dataToSave = {
            id,
            name,
            description,
            stargazers_count,
            owner: {
                avatar_url,
                login
            }
        }

        if (savedRepos) {
            const parsedSavedRepos: RepositoryType[] = JSON.parse(savedRepos)
            parsedSavedRepos.push(dataToSave)
            localStorage.setItem("bookmarkedRepos", JSON.stringify(parsedSavedRepos))
        }else{
            const repoArray: RepositoryType[] = []
            repoArray.push(dataToSave)
            localStorage.setItem("bookmarkedRepos", JSON.stringify(repoArray))
        }


        toast.success("Repo bookmarked succesfully", {position:"top-center"})
    }

    const getBookmarkedRepos = (): RepositoryType[] => {
        const savedRepos = localStorage.getItem("bookmarkedRepos")

        if (savedRepos) {
            const parseSavedRepos = JSON.parse(savedRepos)
            return parseSavedRepos
        }

        return []
    }

    const bookmarkedRepos = getBookmarkedRepos();
    return { bookmarkedRepos, bookmarkRepo }
}

export default useBookmark