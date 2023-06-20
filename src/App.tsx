import Skeleton from "react-loading-skeleton";
import './App.css';
import { Header } from "./components/Header/Header";
import { Pagination } from "./components/Pagination/Pagination";
import { RepositoryGrid } from "./components/RepositoryGrid/RepositoryGrid";
import { SearchInput } from "./components/SearchInput/SearchInput";
import useGitProfileSearch from './hooks/useGitProfileSearch';
import { useState } from "react";
import BookmarkedRepositories from "./components/BookmarkedRepositories/BookmarkedRepositories";

function App() {
  const { handleChange, handlePageChange, gitRepositories, pagination } = useGitProfileSearch()
  const { currentPage, totalCounts, pageSize } = pagination;
  const [showBookmarkedRepos, setShowBookmarkedRepos] = useState(false)


  const toggleShowRepos = () => setShowBookmarkedRepos(!showBookmarkedRepos)

  return (
    <div className="app-container">
      <Header toggleShowRepos={toggleShowRepos} showBookmarkedRepos={showBookmarkedRepos} />

      {showBookmarkedRepos ? <BookmarkedRepositories showRepos={toggleShowRepos} /> :
        <div className="main-content">
          <div className="search-bar">
            <SearchInput onChange={handleChange} />
          </div>

          {gitRepositories.isLoading ? (
            <Skeleton
              inline
              count={10}
              className="skeleton-container"
              containerClassName="skeleton-grid"
            />
          ) : (
            <RepositoryGrid repositories={gitRepositories.data} />
          )}

          <div className="pagination-container">
            {!gitRepositories.isLoading && totalCounts > 0 && (
              <Pagination
                pageSize={pageSize}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalCounts={totalCounts}
              />
            )}
          </div>
        </div>
      }


    </div>
  )
}

export default App
