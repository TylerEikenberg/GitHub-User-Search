import React from 'react';
import { StatBox } from '../';
import './RepoBox.css';

function RepoBox({
  repoData = {
    html_url: '',
    name: '',
    stargazers_count: 0,
    forks: 0,
    watchers: 0
  }
}) {
  return (
    <a
      data-testid='RepoBox-div'
      className='RepoBox-container'
      href={repoData.html_url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>
        <h5 className='RepoBox-reponame'>{repoData.name}</h5>
      </span>
      <span data-testid='RepoBox-span' className='RepoBox-stats-container'>
        <StatBox number={repoData.stargazers_count} stat={'Stars'} />
        <StatBox number={repoData.forks} stat={'Forks'} />
        <StatBox number={repoData.watchers} stat={'Watchers'} />
      </span>
    </a>
  );
}

export default RepoBox;
