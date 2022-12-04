import {
  Container,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import type { NextPage } from "next";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import prefectures from "../constant/prefectures";
import axios, { AxiosRequestConfig } from "axios";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { labels } from "../constant/line";

const RESAS_ENDPOINT = "https://opendata.resas-portal.go.jp";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type PopulationPerYear = {
  year: number;
  value: number;
};

type PopulationApiResponse = {
  result: {
    data: [{ data: PopulationPerYear[] }];
  };
};

type FormInput = {
  prefectures: string[];
};

type dataset = {
  label: string;
  data: number[] | undefined;
  borderColor: string;
  backgroundColor: string;
};

const Home: NextPage = () => {
  const { control, setValue, getValues, handleSubmit } = useForm<FormInput>({
    // defaultValues: { prefectures: ["1"] },
  });
  const [prefectureCode, setPrefectureCode] = useState<string[]>([]);

  const config: AxiosRequestConfig = {
    headers: { "X-API-KEY": "1RaI2Vm1p716f4yvXCoBCYVyHVqZJZ82aL8OKyFu" },
  };

  const getPre = async (code: string) => {
    const apiData = await axios.get(
      `${RESAS_ENDPOINT}/api/v1/population/sum/estimate?cityCode=-&prefCode=${code}`,
      config
    );
    return apiData.data as PopulationApiResponse;
  };

  const handleLogin: SubmitHandler<FormInput> = async (data) => {
    if (!data.prefectures) return;
    setPrefectureCode([...data.prefectures]);
  };

  const result = useQueries({
    queries: prefectureCode.map((code) => {
      return {
        queryKey: ["repoData", code],
        queryFn: () => getPre(code),
      };
    }),
  });

  const test = result.map((v) => v.isFetching);
  const totalPopulation = result.map((v) => v.isFetching)
    ? result.map((value) => value.data?.result.data[0].data)
    : [];

  const num = totalPopulation.map((v) => v?.map((value) => value.value));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "総人口",
      },
    },
  };

  const datasets: dataset[] = num.map((v, i) => {
    return {
      // label: `テスト${i}`,
      label: prefectures.find((v1) => v1.code === i + 1)!.prefectures,
      data: v,
      borderColor: `rgb(25, 25, 255)`,
      backgroundColor: `rgba(255, 99, 132, 0.5)`,
    };
  });

  const data = {
    labels,
    datasets,
  };

  const handleCheck = (code: string, event: React.ChangeEvent<{}>) => {
    let values: string[] = getValues("prefectures") || [];
    values = values.filter((v) => v);

    let newValues: string[] = [];
    if ((event.target as HTMLInputElement).checked) {
      newValues = [...(values ?? []), code];
    } else {
      newValues = values?.filter((value) => value !== code);
    }
    setValue("prefectures", newValues);

    return newValues;
  };

  return (
    <Container>
      <Typography gutterBottom color="red" sx={{ mt: 9, mr: 9 }} variant={"h5"}>
        都道府県
      </Typography>
      <Grid container spacing={50} sx={{ mt: 0 }}>
        <Controller
          control={control}
          name="prefectures"
          render={({ field }) => (
            <>
              {prefectures.map((v, i) => (
                <FormControlLabel
                  {...field}
                  key={i}
                  value={v.code}
                  control={
                    <Checkbox
                      id={field.name}
                      name={field.name}
                      value={field.value}
                      onChange={(event) =>
                        field.onChange(handleCheck(v.code.toString(), event))
                      }
                    />
                  }
                  label={v.prefectures}
                />
              ))}
            </>
          )}
        />
      </Grid>
      <Button
        onClick={handleSubmit(handleLogin)}
        size="large"
        color="primary"
        variant="contained"
      >
        検索
      </Button>
      <Line options={options} data={data} />
    </Container>
  );
};

export default Home;
