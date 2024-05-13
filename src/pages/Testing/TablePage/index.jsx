import { Box, Container } from "@mui/material";
import JdTable from "../../../components/Table";
import { useEffect, useState } from "react";
import JdTypography from "../../../components/JdTypography";
import JdTableInput from "../../../components/Table/JdTableInput";
import { dummyColumn, dummyRows } from "../../../const/dummydata";

const TablePage = () => {
  const [params, setParams] = useState({
    pageNo: 0,
    pageSize: 0,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setParams({ pageNo: 1, pageSize: 10 });
    setTotal(10);
  }, []);

  const handleChange = (e, value) => {
    setParams((prev) => ({ ...prev, pageNo: value }));
  };
  const handleChangeSize = (value) => {
    setParams((prev) => ({ ...prev, pageSize: value }));
  };

  return (
    <Container sx={{ marginBottom: 20 }}>
      <div style={{ marginTop: 50 }}>
        <JdTypography fontSize={30} fontWeight={600}>
          Example Table Component
        </JdTypography>
      </div>
      <Box padding={10}>
        <JdTable
          actions={{ show: false }}
          rows={dummyRows}
          columns={dummyColumn}
          pageSize={params.pageSize}
          pageNo={params.pageNo}
          total={total}
          onChangePage={handleChange}
          onChangePageSize={handleChangeSize}
        />
      </Box>
      <div style={{ textAlign: "center" }}>
        <JdTypography fontSize={30} fontWeight={600}>
          Example Table Input Component
        </JdTypography>
      </div>
      <Box padding={10}>
        <JdTableInput
          rowSum={5}
          columns={dummyColumn}
          pageNo={params.pageNo}
          total={total}
          onChangePage={handleChange}
        />
      </Box>
    </Container>
  );
};

export default TablePage;
