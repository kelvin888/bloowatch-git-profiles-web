import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react'
import { fetchGitProfiles } from '../service/gitservice';

const useGitProfileSearch = () => {
    const [query, setQuery] = useState("a");
    const [profiles, setProfiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCounts, setTotalCounts] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const pageSize = 10;
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setQuery(e.target.value);
        return;
      }
      setQuery("a");
      setCurrentPage(1)
    };

    const loadGitProfiles = useCallback(async (q: string, p: number) => {
      setIsLoading(true);

      const response = await fetchGitProfiles({
        query: q,
        page: p,
        per_page: pageSize,
      });

      setTotalCounts(response?.data?.total_count);
      setProfiles(response?.data?.items);
      setIsLoading(false);
    }, []);
    
  
    const debouncedSearch = React.useRef(
      debounce(async (q, p) => {
        loadGitProfiles(q, p);
      }, 500)
    ).current;
  
    useEffect(() => {
      debouncedSearch(query, currentPage);
    }, [debouncedSearch, query, currentPage]);
  
    const handlePageChange = (page: { selected: number }) => {
      setCurrentPage(page?.selected + 1);
    };

    const pagination = {
        pageSize,
        currentPage,
        totalCounts
    }

    const gitRepositories = {
        isLoading,
        data: profiles, 
    }

  return {handleChange, handlePageChange, gitRepositories, pagination}
}

export default useGitProfileSearch