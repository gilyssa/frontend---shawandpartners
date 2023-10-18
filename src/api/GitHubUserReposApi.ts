import { UserReposProps } from "../interfaces/UserReposProps/UserReposProps";

const GITHUB_API_BASE_URL = 'http://localhost:3000/api';

export async function fetchGitHubUsersRepos(username?: string): Promise<{ repos: UserReposProps[]}> {
  try {
   const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}/repos`);
   if (!response.ok) {
     throw new Error('Failed to fetch users from GitHub');
   }
   const responseData = await response.json();

    const data: any[] = responseData;

    const mappedData: UserReposProps[] = data.map((repo: any) => {
      return {
        id: repo.id,
        html_url: repo.html_url,
      };
    });

    return { repos: mappedData };
  } catch (error) {
    throw error;
  }
}

