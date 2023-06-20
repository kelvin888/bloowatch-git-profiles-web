import { FC } from "react"
import ".//Header.css"

type Props = {
  toggleShowRepos: () => void
  showBookmarkedRepos: boolean
}

export const Header: FC<Props> = ({ toggleShowRepos, showBookmarkedRepos }) => {
  return (
    <div className="header-container">
      <h2 className="app-title">
        {showBookmarkedRepos ? "Bookmarked Repositories" : " Github User Profiles"}
      </h2>
      {showBookmarkedRepos ? <button className="bookmarks-button" onClick={toggleShowRepos}>Return to search</button> :
        <button className="bookmarks-button" onClick={toggleShowRepos}>View Bookmarks</button>
      }
    </div>
  )
}
