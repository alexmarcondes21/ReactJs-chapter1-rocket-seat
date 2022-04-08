import React from "react";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a target="_blank" href={props.repository.html_url}>
        acessar repositório
      </a>
    </li>
  );
}
