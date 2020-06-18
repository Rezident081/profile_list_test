interface IProfileGeneralInfo {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  gravatar_id: string;
  node_id: string;
  type: string;
}

interface IProfileAdditionInfo {
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
}

export default interface IProfile
  extends IProfileGeneralInfo,
    IProfileAdditionInfo {}
