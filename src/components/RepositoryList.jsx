import React from "react";
import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState , useEffect } from 'react'

const repository = {
  name: "unform",
  description: "forms in react",
  link: "https://github.com/unform/unform",
};

//https://api.github.com/orgs/rocketseat/repos

export default function RepositoryList() {
  const [ repositories , setRepositories ] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data =>setRepositories(data) )
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
