// api.ts
import { UserDetailProps } from './../interfaces/UserDetailProps/UserDetailProps';

const GITHUB_API_BASE_URL = 'http://localhost:3000/api';

export async function fetchGitHubUserDetail(username?: string): Promise<UserDetailProps> {
  try {
    const response = await fetch(`${GITHUB_API_BASE_URL}/users/${username}/details`);
    if (!response.ok) {
      throw new Error('Failed to fetch user detail from GitHub');
    }

    const responseData = await response.json();
    return responseData; 
  } catch (error) {
    throw error;
  }
}
