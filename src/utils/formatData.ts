export const formattedRepos = (payload: any) =>
  payload.map((repo: any) => ({
    id: repo.id,
    name: repo.full_name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    owner: repo.owner.login,
    avatar: repo.owner.avatar_url,
    url: repo.html_url,
  }));
