import { Button, Container, Grid, Typography, TextField } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

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
