import { Button, Container, Grid, Typography, TextField } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";

type LoginForm = {
  userid: string;
  password: string;
};

const LoginDummyData = {
  userid: "A001",
  password: "japan",
};

const Home: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLElement>(null);

  // フォーム管理
  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      userid: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<LoginForm> = async (data) => {
    if (data.userid !== LoginDummyData.userid) return;
    if (data.password !== LoginDummyData.password) return;
    router.push("/cm");
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
            ログイン画面
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="userid"
            render={({ field, fieldState }) => (
              <TextField
                required
                focused
                fullWidth
                label="ユーザID"
                id={field.name}
                name={field.name}
                ref={field.ref}
                onChange={(e) => {
                  setValue(e.currentTarget.value);
                  return field.onChange(e.currentTarget.value);
                }}
                value={value}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                inputRef={inputRef}
                InputProps={{
                  endAdornment: value !== "" && (
                    <IconButton
                      onClick={(e) => {
                        e.preventDefault();
                        setValue("");
                      }}
                    >
                      <CancelIcon fontSize="small" />
                    </IconButton>
                  ),
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <TextField
                required
                focused
                fullWidth
                label="パスワード"
                type="password"
                id={field.name}
                name={field.name}
                ref={field.ref}
                onChange={field.onChange}
                value={field.value}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button type="submit" fullWidth variant="contained">
            ログイン
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
