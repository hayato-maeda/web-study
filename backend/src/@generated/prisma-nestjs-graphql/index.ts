import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ID } from '@nestjs/graphql';

export enum UserinfoScalarFieldEnum {
  userid = 'userid',
  username = 'username',
  email = 'email',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(UserinfoScalarFieldEnum, {
  name: 'UserinfoScalarFieldEnum',
  description: undefined,
});

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@ObjectType()
export class AggregateUserinfo {
  @Field(() => UserinfoCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserinfoCountAggregate>;
  @Field(() => UserinfoMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserinfoMinAggregate>;
  @Field(() => UserinfoMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserinfoMaxAggregate>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class UserinfoCountAggregate {
  @Field(() => Int, { nullable: false })
  userid!: number;
  @Field(() => Int, { nullable: false })
  username!: number;
  @Field(() => Int, { nullable: false })
  email!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@ObjectType()
export class UserinfoGroupBy {
  @Field(() => String, { nullable: false })
  userid!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => UserinfoCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UserinfoCountAggregate>;
  @Field(() => UserinfoMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UserinfoMinAggregate>;
  @Field(() => UserinfoMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UserinfoMaxAggregate>;
}

@ObjectType()
export class UserinfoMaxAggregate {
  @Field(() => String, { nullable: true })
  userid?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => String, { nullable: true })
  email?: string;
}

@ObjectType()
export class UserinfoMinAggregate {
  @Field(() => String, { nullable: true })
  userid?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => String, { nullable: true })
  email?: string;
}

@ArgsType()
export class CreateManyuserinfoArgs {
  @Field(() => [userinfoCreateManyInput], { nullable: false })
  @Type(() => userinfoCreateManyInput)
  data!: Array<userinfoCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneuserinfoArgs {
  @Field(() => userinfoCreateInput, { nullable: false })
  @Type(() => userinfoCreateInput)
  data!: InstanceType<typeof userinfoCreateInput>;
}

@ArgsType()
export class DeleteManyuserinfoArgs {
  @Field(() => userinfoWhereInput, { nullable: true })
  @Type(() => userinfoWhereInput)
  where?: InstanceType<typeof userinfoWhereInput>;
}

@ArgsType()
export class DeleteOneuserinfoArgs {
  @Field(() => userinfoWhereUniqueInput, { nullable: false })
  @Type(() => userinfoWhereUniqueInput)
  where!: InstanceType<typeof userinfoWhereUniqueInput>;
}

@ArgsType()
export class FindFirstuserinfoArgs {
  @Field(() => userinfoWhereInput, { nullable: true })
  @Type(() => userinfoWhereInput)
  where?: InstanceType<typeof userinfoWhereInput>;
  @Field(() => [userinfoOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<userinfoOrderByWithRelationInput>;
  @Field(() => userinfoWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof userinfoWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserinfoScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserinfoScalarFieldEnum>;
}

@ArgsType()
export class FindManyuserinfoArgs {
  @Field(() => userinfoWhereInput, { nullable: true })
  @Type(() => userinfoWhereInput)
  where?: InstanceType<typeof userinfoWhereInput>;
  @Field(() => [userinfoOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<userinfoOrderByWithRelationInput>;
  @Field(() => userinfoWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof userinfoWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UserinfoScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserinfoScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueuserinfoArgs {
  @Field(() => userinfoWhereUniqueInput, { nullable: false })
  @Type(() => userinfoWhereUniqueInput)
  where!: InstanceType<typeof userinfoWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyuserinfoArgs {
  @Field(() => userinfoUpdateManyMutationInput, { nullable: false })
  @Type(() => userinfoUpdateManyMutationInput)
  data!: InstanceType<typeof userinfoUpdateManyMutationInput>;
  @Field(() => userinfoWhereInput, { nullable: true })
  @Type(() => userinfoWhereInput)
  where?: InstanceType<typeof userinfoWhereInput>;
}

@ArgsType()
export class UpdateOneuserinfoArgs {
  @Field(() => userinfoUpdateInput, { nullable: false })
  @Type(() => userinfoUpdateInput)
  data!: InstanceType<typeof userinfoUpdateInput>;
  @Field(() => userinfoWhereUniqueInput, { nullable: false })
  @Type(() => userinfoWhereUniqueInput)
  where!: InstanceType<typeof userinfoWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneuserinfoArgs {
  @Field(() => userinfoWhereUniqueInput, { nullable: false })
  @Type(() => userinfoWhereUniqueInput)
  where!: InstanceType<typeof userinfoWhereUniqueInput>;
  @Field(() => userinfoCreateInput, { nullable: false })
  @Type(() => userinfoCreateInput)
  create!: InstanceType<typeof userinfoCreateInput>;
  @Field(() => userinfoUpdateInput, { nullable: false })
  @Type(() => userinfoUpdateInput)
  update!: InstanceType<typeof userinfoUpdateInput>;
}

@ArgsType()
export class userinfoAggregateArgs {
  @Field(() => userinfoWhereInput, { nullable: true })
  @Type(() => userinfoWhereInput)
  where?: InstanceType<typeof userinfoWhereInput>;
  @Field(() => [userinfoOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<userinfoOrderByWithRelationInput>;
  @Field(() => userinfoWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof userinfoWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
}

@InputType()
export class userinfoCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
}

@InputType()
export class userinfoCreateManyInput {
  @Field(() => String, { nullable: false })
  userid!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  email!: string;
}

@InputType()
export class userinfoCreateInput {
  @Field(() => String, { nullable: false })
  userid!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  email!: string;
}

@ArgsType()
export class userinfoGroupByArgs {
  @Field(() => userinfoWhereInput, { nullable: true })
  @Type(() => userinfoWhereInput)
  where?: InstanceType<typeof userinfoWhereInput>;
  @Field(() => [userinfoOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<userinfoOrderByWithAggregationInput>;
  @Field(() => [UserinfoScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UserinfoScalarFieldEnum>;
  @Field(() => userinfoScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof userinfoScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
}

@InputType()
export class userinfoMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
}

@InputType()
export class userinfoMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
}

@InputType()
export class userinfoOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  userid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => userinfoCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof userinfoCountOrderByAggregateInput>;
  @Field(() => userinfoMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof userinfoMaxOrderByAggregateInput>;
  @Field(() => userinfoMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof userinfoMinOrderByAggregateInput>;
}

@InputType()
export class userinfoOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  userid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
}

@InputType()
export class userinfoScalarWhereWithAggregatesInput {
  @Field(() => [userinfoScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<userinfoScalarWhereWithAggregatesInput>;
  @Field(() => [userinfoScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<userinfoScalarWhereWithAggregatesInput>;
  @Field(() => [userinfoScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<userinfoScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userid?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  username?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class userinfoUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  userid!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  email!: string;
}

@InputType()
export class userinfoUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userid?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class userinfoUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userid?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class userinfoUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userid?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class userinfoUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userid?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class userinfoWhereUniqueInput {
  @Field(() => String, { nullable: true })
  userid?: string;
}

@InputType()
export class userinfoWhereInput {
  @Field(() => [userinfoWhereInput], { nullable: true })
  AND?: Array<userinfoWhereInput>;
  @Field(() => [userinfoWhereInput], { nullable: true })
  OR?: Array<userinfoWhereInput>;
  @Field(() => [userinfoWhereInput], { nullable: true })
  NOT?: Array<userinfoWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userid?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  username?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class userinfo {
  @Field(() => ID, { nullable: false })
  userid!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  email!: string;
}
