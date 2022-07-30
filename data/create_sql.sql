-- Project Name : web
-- Date/Time    : 2022/07/30 19:12:14
-- Author       : maedah
-- RDBMS Type   : PostgreSQL
-- Application  : A5:SQL Mk-2

-- ユーザー情報
drop table if exists USERINFO cascade;

create table USERINFO (
  userid varchar(20) not null
  , username varchar(40) not null
  , email varchar(256) not null
  , constraint PK_USERINFO primary key (userid)
) ;

comment on table USERINFO is 'ユーザー情報';
comment on column USERINFO.userid is 'ユーザーID';
comment on column USERINFO.username is 'ユーザー名';
comment on column USERINFO.email is '電子メールアドレス';