"use client";
import Hero from "@/components/github/Hero";
import { useEffect, useState } from "react";
import GiftCard from "@/components/github/GitCard";

interface GithubProfileType {
  avatar_url: string;
  public_repos: number;
  followers: number;
  name: string;
}

interface ReposType {
  name: string;
  watchers: number;
  stargazers_count: number;
  forks: number;
  html_url: string;
  homepage?: string;
}

const Github = () => {
  const [profileData, setProfile] = useState<GithubProfileType | null>(null);
  const [repos, setRepos] = useState<[ReposType] | null>(null);

  useEffect(() => {
    // fetching github profile data
    fetch("https://api.github.com/users/mo-amir-code")
      .then((res) => res.json())
      .then((data) => setProfile(data));

    // Fetching github profile repos data
    fetch("https://api.github.com/users/mo-amir-code/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="px-4 py-16 text-gray-100 space-y-4">
      {profileData && (
        <Hero
          avatarUrl={profileData.avatar_url}
          name={profileData.name}
          repos={profileData.public_repos}
          followers={profileData.followers}
        />
      )}
      <div className="w-full flex justify-between flex-wrap gap-3">
        {!!repos &&
          repos.map((repo, idx) => (
            <GiftCard
              key={idx}
              name={repo.name}
              fork={repo.forks}
              watchers={repo.watchers}
              stars={repo.stargazers_count}
              gitLink={repo.html_url}
              deployedLink={repo.homepage}
            />
          ))}
      </div>
    </div>
  );
};

export default Github;
