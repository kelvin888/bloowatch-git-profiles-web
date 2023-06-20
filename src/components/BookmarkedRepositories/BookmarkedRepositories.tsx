import React from 'react'
import useBookmark from '../../hooks/useBookmark'
import { RepositoryGrid } from '../RepositoryGrid/RepositoryGrid'

type Props = {
    showRepos: () => void
}

const BookmarkedRepositories: React.FC<Props> = () => {
  const {bookmarkedRepos} = useBookmark()

    return (
      <RepositoryGrid repositories={bookmarkedRepos} />
    )
}

export default BookmarkedRepositories