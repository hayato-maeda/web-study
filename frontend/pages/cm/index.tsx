import {
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  CircularProgress,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useGetUserInfoQuery } from "../../src/cm/@generated/graphql";
import { GraphQLClient } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

type LoginForm = {
  userid: string;
  password: string;
};

type sikuCode = {
  prefCode: number;
  cityCode: string;
  cityName: string;
  bigCityFlag: string;
};

type APIDATA = {
  messeage: string;
  result: Array<sikuCode>;
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

  const handleLogin: SubmitHandler<LoginForm> = async (data) => {
    console.log("ログイン処理");
    router.push("");
  };
  const client = new GraphQLClient("http://localhost:3100/graphql");
  const { data: userInfo, isFetched } = useGetUserInfoQuery(client, {
    where: { userid: "user01" },
  });

  //------------API練習-------------------------↓
  const config: AxiosRequestConfig = {
    headers: { "X-API-KEY": "1RaI2Vm1p716f4yvXCoBCYVyHVqZJZ82aL8OKyFu" },
  };

  const { isLoading, data: apiData } = useQuery(["repoData"], () =>
    axios.get(
      "https://opendata.resas-portal.go.jp/api/v1/cities?prefCode=9",
      config
    )
  );

  if (isLoading) return <CircularProgress />;
  const rows = apiData?.data as APIDATA;
  //------------API練習-------------------------↑

  return (
    <Container
      component="form"
      maxWidth="lg"
      sx={{ textAlign: "center" }}
      onSubmit={handleSubmit(handleLogin)}
      noValidate
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" sx={{ mt: 5, mb: 1 }}>
            ホーム画面
          </Typography>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>都道府県コード</TableCell>
              <TableCell>都道府県</TableCell>
              <TableCell>市区町村コード</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.result.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{item.prefCode}</TableCell>
                <TableCell align="left">{item.cityName}</TableCell>
                <TableCell align="left">{item.cityCode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
