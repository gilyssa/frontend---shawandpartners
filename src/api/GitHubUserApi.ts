// api.ts
import { GitHubUser } from '../interfaces/UserListProps/GitHubUser';

const GITHUB_API_BASE_URL = 'http://localhost:3000/api';

export async function fetchGitHubUsers(since: number): Promise<{ users: GitHubUser[]}> {
  try {
   const response = await fetch(`${GITHUB_API_BASE_URL}/users?since=${since}`);
   if (!response.ok) {
     throw new Error('Failed to fetch users from GitHub');
   }
   const responseData = await response.json();
    const data: any[] = responseData.data;

    const mappedData: GitHubUser[] = data.map((user: any) => {
      return {
        id: user.id,
        login: user.login,
      };
    });

    return { users: mappedData };
  } catch (error) {
    throw error;
  }
}

