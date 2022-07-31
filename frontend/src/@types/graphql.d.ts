type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type Byte = { type: "Buffer", data: Uint8Array }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

type Mutation = {
  __typename?: 'Mutation';
  DeleteUserInfo: Userinfo;
};


type MutationDeleteUserInfoArgs = {
  where: UserinfoWhereUniqueInput;
};

type Query = {
  __typename?: 'Query';
  GetUserInfo: Userinfo;
};


type QueryGetUserInfoArgs = {
  where: UserinfoWhereUniqueInput;
};

type UserinfoCountAggregate = {
  __typename?: 'UserinfoCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  userid: Scalars['Int'];
  username: Scalars['Int'];
};

type UserinfoMaxAggregate = {
  __typename?: 'UserinfoMaxAggregate';
  email?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

type UserinfoMinAggregate = {
  __typename?: 'UserinfoMinAggregate';
  email?: Maybe<Scalars['String']>;
  userid?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

type Userinfo = {
  __typename?: 'userinfo';
  email: Scalars['String'];
  userid: Scalars['ID'];
  username: Scalars['String'];
};

type UserinfoWhereUniqueInput = {
  userid?: InputMaybe<Scalars['String']>;
};
