import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
export type DeleteUserInfoMutationVariables = Exact<{
  where: UserinfoWhereUniqueInput;
}>;


export type DeleteUserInfoMutation = { __typename?: 'Mutation', DeleteUserInfo: { __typename?: 'userinfo', userid: string, username: string, email: string } };

export type GetUserInfoQueryVariables = Exact<{
  where: UserinfoWhereUniqueInput;
}>;


export type GetUserInfoQuery = { __typename?: 'Query', GetUserInfo: { __typename?: 'userinfo', userid: string, username: string, email: string } };


export const DeleteUserInfoDocument = `
    mutation deleteUserInfo($where: userinfoWhereUniqueInput!) {
  DeleteUserInfo(where: $where) {
    userid
    username
    email
  }
}
    `;
export const useDeleteUserInfoMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteUserInfoMutation, TError, DeleteUserInfoMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteUserInfoMutation, TError, DeleteUserInfoMutationVariables, TContext>(
      ['deleteUserInfo'],
      (variables?: DeleteUserInfoMutationVariables) => fetcher<DeleteUserInfoMutation, DeleteUserInfoMutationVariables>(client, DeleteUserInfoDocument, variables, headers)(),
      options
    );
export const GetUserInfoDocument = `
    query getUserInfo($where: userinfoWhereUniqueInput!) {
  GetUserInfo(where: $where) {
    userid
    username
    email
  }
}
    `;
export const useGetUserInfoQuery = <
      TData = GetUserInfoQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserInfoQueryVariables,
      options?: UseQueryOptions<GetUserInfoQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserInfoQuery, TError, TData>(
      ['getUserInfo', variables],
      fetcher<GetUserInfoQuery, GetUserInfoQueryVariables>(client, GetUserInfoDocument, variables, headers),
      options
    );

useGetUserInfoQuery.getKey = (variables: GetUserInfoQueryVariables) => ['getUserInfo', variables];
;
