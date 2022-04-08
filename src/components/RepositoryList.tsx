import React from "react";
import  RepositoryItem  from './RepositoryItem'
import '../styles/repositories.scss';
import { useState , useEffect } from 'react'
//https://api.github.com/orgs/rocketseat/repos



interface Repository {
  name: string;
  description: string;
  html_url: string;
}
export default function RepositoryList() {
  const [ repositories , setRepositories ] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/alexmarcondes21/repos')
    .then(response => response.json())
    .then(data =>setRepositories(data) )
  }, [])

  //console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
       {repositories.map(repository => {
         return <RepositoryItem key={repository.name} repository={repository} />
       })}
      </ul>
    </section>
  );
}
