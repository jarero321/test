interface Tokens {
  tokens: {
    access_token: string | null;
    refresh_token: string | null;
    expires_in?: string | null;
  };
}

interface AccountInfo {
  user_name: string | null;
  paternal_surname: string | null;
  maternal_surname: string;
  roles: UserRoles[] | [];
}

interface UserInfo extends Tokens, AccountInfo {}

interface UserRoles {
  rol: {
    id: number;
    name: string;
    permissions: UserPermissions[];
  };
}

interface UserPermissions {
  permission: {
    id: number;
    name: string;
  };
}

interface UserCredentials {
  email: string;
  password: string;
}

interface IResponseToken {
  access: string;
  refresh: string;
}

export type {
  UserInfo,
  UserPermissions,
  UserRoles,
  Tokens,
  AccountInfo,
  UserCredentials,
  IResponseToken,
};
