import { Refresh } from "@mui/icons-material";
import { Grid, Stack } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import JdButton from "../../components/JdButton";
import JdTypography from "../../components/JdTypography";
import JdTable from "../../components/Table";
import JdApi from "../../services";
import FilterDaftarKlaim from "./FilterDaftarKlaim";

const DaftarKlaimPage = () => {
  const navigate = useNavigate();
  const RHF = useForm();
  const { handleSubmit, getValues, reset } = RHF;
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    search: "",
    pageNo: 1,
    pageSize: 10,
  });
  // eslint-disable-next-line no-unused-vars
  const [dataRows, setDataRows] = useState(null);
  const [total, setTotal] = useState(0);

  // Dummy Rows
  const DummyRows = [
    {
      id: 1,
      noPolis: "123213213",
      noKlaim: "123312313",
      noRangka: "31231231321",
      objekPertanggungan: "tes123",
      tglLaporan: "12/05/2024",
      tglKejadian: "12/05/2024",
      statKlaim: "Klaim Disetujui",
    },
    {
      id: 2,
      noPolis: "123213213",
      noKlaim: "123312313",
      noRangka: "31231231321",
      objekPertanggungan: "tes567",
      tglLaporan: "12/04/2024",
      tglKejadian: "12/04/2024",
      statKlaim: "Laporan Klaim Ditolak",
    },
  ];

  const StatusKlaimColor = (val) => {
    if (val === "Klaim Disetujui") {
      return "#4FCB09";
    } else if (val === "Laporan Klaim Ditolak") {
      return "#FE3839";
    } else {
      return "#FFB302";
    }
  };
  // Column
  const columnDaftarKlaim = [
    {
      field: "noPolis",
      headerName: "No Polis",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "noKlaim",
      headerName: "No Klaim",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "noRangka",
      headerName: "No Rangka",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "objekPertanggungan",
      headerName: "Objek Pertanggungan",
      minWidth: 250,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "tglLaporan",
      headerName: "Tanggal Laporan",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "tglKejadian",
      headerName: "Tanggal Kejadian",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "statKlaim",
      headerName: "Status Klaim",
      minWidth: 250,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        const color = StatusKlaimColor(row.statKlaim);
        return <JdTypography color={color}>{row.statKlaim}</JdTypography>;
      },
    },
  ];

  const actions = {
    view: true,
    search: true,
    show: true,
  };

  const onSubmitFilter = async (data) => {
    try {
      console.log(data);
      setLoading(true);
      setParams((prev) => ({ ...prev, ...getValues() }));
    } catch (error) {
      enqueueSnackbar("error", {
        variant: "error",
      });
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      await JdApi.get(import.meta.env.VITE_BASE_URL + "/get-daftar-klaim", {
        params,
      });
    } catch (error) {
      enqueueSnackbar("error", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value) => {
    setParams((prev) => ({ ...prev, search: value }));
  };
  const handleView = (row) => {
    console.log("view clicked", row);
    navigate("detail");
  };
  const handleChangePage = (e, value) => {
    setParams((prev) => ({ ...prev, pageNo: value }));
  };
  const handleChangePageSize = (value) => {
    setParams((prev) => ({ ...prev, pageSize: value }));
  };

  // Use Effect

  useEffect(() => {
    getData();
    setTotal(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Grid container>
      <Grid item xs={12} marginBottom="32px">
        <JdTypography title>Daftar Klaim Anda</JdTypography>
      </Grid>
      <Grid item xs={12} mb="60px">
        <FormProvider {...RHF}>
          <form id="FilterDaftarKlaim" onSubmit={handleSubmit(onSubmitFilter)}>
            <Grid container rowSpacing="32px" columnSpacing="17px">
              {/* Form  Filter*/}
              <FilterDaftarKlaim RHF={RHF} />
              <Grid
                display="flex"
                justifyContent={{ xs: "center", sm: "start" }}
                item
                xs={12}
                mt="24px"
              >
                <Stack
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                >
                  <JdButton
                    loading={loading}
                    variant="outlined"
                    startIcon={<Refresh />}
                    onClick={() => reset()}
                  >
                    Reset Outlined
                  </JdButton>
                  <JdButton loading={loading} fontcolor="#ffffff" type="submit">
                    Cari Berdasarkan Filter
                  </JdButton>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Grid>

      <JdTable
        title="Status Klaim"
        actions={actions}
        rows={dataRows || DummyRows || []}
        columns={columnDaftarKlaim}
        pageSize={params.pageSize}
        pageNo={params.pageNo}
        total={total}
        onChangePage={handleChangePage}
        onChangePageSize={handleChangePageSize}
        handleSearch={handleSearch}
        handleView={handleView}
        loading={loading}
      />
    </Grid>
  );
};

export default DaftarKlaimPage;
