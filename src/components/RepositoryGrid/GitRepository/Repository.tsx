import { FC } from "react";
import { Avatar } from "../../Avatar/Avatar";
import "./repository.css"
import { RepositoryType } from "../../../types/repository";
import useBookmark from "../../../hooks/useBookmark";

type Props = {
  repository: RepositoryType
}

export const Repository: FC<Props> = ({ repository }) => {

  const { bookmarkRepo, bookmarkedRepos } = useBookmark()

  const handleBookmark = () => {
    bookmarkRepo(repository)
  }

  const isBookmarked = bookmarkedRepos.find(repo => repo.id === repository.id)

  return (
    <div className="profile">
      <Avatar avatar_url={repository?.owner.avatar_url} />
      <p className="repository-name">Name: {repository.name}</p>
      <div className="repository-details">
        <p>Owner: {repository?.owner.login}</p>
        <p>Description: {repository?.description}</p>
        <p>Stars: {repository?.stargazers_count}</p>
        {!isBookmarked ?
          <button onClick={handleBookmark} className="bookmark-button">Bookmark</button>
          : null
        }
      </div>
    </div>
  );
};

