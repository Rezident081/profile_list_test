interface IUserGeneralInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  gravatar_id: string;
  name: string | null;
  type: string;
  company: string | null;
  email: string | null;
  location: string | null;
  hireable: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
  blog: string;
}

interface IUserAdditionalInfo {
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  site_admin: boolean;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

export default interface IUser extends IUserGeneralInfo, IUserAdditionalInfo {}
