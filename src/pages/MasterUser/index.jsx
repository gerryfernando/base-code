import { Grid } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import JdAlert from "../../components/JdAlert";
import JdTypography from "../../components/JdTypography";
import JdTable from "../../components/Table";
import JdApi from "../../services";

const MasterUser = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [params, setParams] = useState({
    search: "",
    pageNo: 1,
    pageSize: 10,
  });
  const [loading, setLoading] = useState(false);
  const [dataRows, setDataRows] = useState(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  //dummy
  const rows = [
    {
      id: 1,
      fullName: "tes1",
      email: "tes",
      role: ["user1", "user2"],
    },
    {
      id: 2,
      fullName: "budi",
      email: "tes@gmailc.om",
      role: ["user3", "user4"],
    },
  ];

  // Column
  const columnMasterUser = [
    {
      field: "fullName",
      headerName: "Nama Lengkap",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 200,
      flex: 1,
      sortable: false,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => (
        <ul>
          {row.role.map((val, idx) => {
            return <li key={idx}>{val}</li>;
          })}
        </ul>
      ),
    },
  ];
  const getData = async () => {
    try {
      setLoading(true);
      await JdApi.get(import.meta.env.VITE_BASE_URL + "/user", {
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
  const handleAdd = () => {
    navigate("/master-user/create");
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await JdApi.delete(import.meta.env.VITE_BASE_URL + "/user/" + deleteId);
    } catch (error) {
      enqueueSnackbar("error", {
        variant: "error",
      });
    } finally {
      setLoading(false);
      setShowModalDelete(false);
    }
  };

  const handleEdit = (row) => {
    console.log(row);
    navigate("/master-user/update/1");
  };

  const handleSearch = (value) => {
    setParams((prev) => ({ ...prev, search: value }));
  };
  const handleChangePage = (e, value) => {
    setParams((prev) => ({ ...prev, pageNo: value }));
  };
  const handleChangePageSize = (value) => {
    setParams((prev) => ({ ...prev, pageSize: value }));
  };

  const actions = {
    add: true,
    edit: true,
    delete: true,
    search: true,
    show: true,
  };

  // Use Effect

  useEffect(() => {
    setDataRows(rows);
    setTotal(4);
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    console.log(params);
    // console.log(dispatch("displayText"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <Grid container rowSpacing="60px">
      <Grid item xs={12}>
        <JdTypography title>Master User</JdTypography>
      </Grid>
      <Grid item xs={12}>
        <JdTable
          title="Daftar User"
          actions={actions}
          rows={dataRows || []}
          columns={columnMasterUser}
          pageSize={params.pageSize}
          pageNo={params.pageNo}
          total={total}
          onChangePage={handleChangePage}
          onChangePageSize={handleChangePageSize}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          handleDelete={(row) => {
            setDeleteId(row.id);
            setShowModalDelete(true);
          }}
          handleSearch={handleSearch}
          loading={loading}
        />
        <JdAlert
          title="Hapus Data"
          type="error"
          width="359px"
          message="Apakah Anda yakin menghapus data tersebut?"
          open={showModalDelete}
          okText="Hapus Data"
          loading={loading}
          onClose={() => {
            setShowModalDelete(false);
          }}
          onConfirm={() => {
            handleDelete();
          }}
        />
      </Grid>
    </Grid>
  );
};

export default MasterUser;
