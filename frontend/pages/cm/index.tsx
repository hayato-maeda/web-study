import { Button, Container, Grid, Typography, TextField } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useGetUserInfoQuery } from "../../src/cm/@generated/graphql";
import { GraphQLClient } from "graphql-request";

type LoginForm = {
  userid: string;
  password: string;
};

const Home: NextPage = () => {
  const router = useRouter();

  // フォーム管理
  const { control, handleSubmit, watch } = useForm<LoginForm>({
    defaultValues: {
      userid: "",
      password: "",
    },
  });
  const watchUserID = watch("userid", "");

  const handleLogin: SubmitHandler<LoginForm> = async (data) => {
    console.log("ログイン処理");
    router.push("");
  };
  const client = new GraphQLClient("http://localhost:3100/graphql");
  const { data: userInfo, isFetched } = useGetUserInfoQuery(client, {
    where: { userid: "user01" },
  });

  return (
    <Container
      component="form"
      maxWidth="xs"
      sx={{ textAlign: "center" }}
      onSubmit={handleSubmit(handleLogin)}
      noValidate
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" sx={{ mt: 10, mb: 2 }}>
            ホーム画面
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
