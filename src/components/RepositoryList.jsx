import { RepositoryItem } from "./RepositoryItem";

import { useState, useEffect } from "react";

import '../styles/repositories.scss';


const repository = {
    name: "Unform",
    description: "Forms in React",
    link: "https://github.com/XandRules"
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);

    useEffect( () => {
        fetch('https://api.github.com/orgs/Rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            
            <ul>
              <RepositoryItem repository={repository}/> 
              <RepositoryItem repository={repository}/> 
              <RepositoryItem repository={repository}/> 
              <RepositoryItem repository={repository}/> 
              
            </ul>
            
        </section>
    );
}