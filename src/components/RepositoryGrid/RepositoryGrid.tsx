import { FC } from "react";
import { Repository } from "./GitRepository/Repository";
import "./RepositoryGrid.css"
import { RepositoryType } from "../../types/repository";

type RepositoryGridProps = {
  repositories: Array<RepositoryType>;
};

export const RepositoryGrid: FC<RepositoryGridProps> = ({ repositories }) => {
  return (
    <div className="repository-grid">
      {repositories?.map((repository, index) => (
        <Repository key={Date.now() + index} repository={repository} />
      ))}
    </div>
  );
};
