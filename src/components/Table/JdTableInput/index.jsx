import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import JdPagination from "../JdPagination";

const JdTableInput = ({
  rowSum,
  columns,
  pageSize,
  pageNo,
  total,
  onChangePage,
  //   loading = false,
}) => {
  const StyledTableHead = styled(TableHead)(() => ({
    background: "linear-gradient(90.63deg, #44C8F5 -0.06%, #69D3F7 99.94%)",
  }));

  const StyledTableContainer = styled(TableContainer)(() => ({
    borderRadius: 20,
  }));

  const StyledTableCell = styled(TableCell)(() => ({
    textAlign: "center",
    "&.MuiTableCell-head": {
      fontSize: 15,
      borderLeft: "1px solid #FFFFFF",
    },

    "&.MuiTableCell-head:first-of-type": {
      border: "none",
    },
    "&.MuiTableCell-body": {
      fontSize: 14,
    },
  }));
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <StyledTableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <StyledTableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                {columns.map((valHeader, i) => {
                  return (
                    <StyledTableCell key={`headerTabInp-${i}`}>
                      {valHeader.headerName}
                    </StyledTableCell>
                  );
                })}
              </TableRow>
            </StyledTableHead>
            <TableBody>
              {[...Array(rowSum)].map((row, idx) => (
                <TableRow
                  key={`rowColTabInp-${idx}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell>{idx + 1}</StyledTableCell>
                  {columns.map((val, i) => {
                    return (
                      <StyledTableCell key={`rowColTabInp-${i}`}>
                        <TextField
                          sx={{ fontSize: 14 }}
                          size="small"
                          placeholder={val.headerName}
                        />
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
        <Grid container justifyContent="end">
          <JdPagination
            pageSize={pageSize}
            pageNo={pageNo}
            total={total}
            onChangePage={onChangePage}
          />
        </Grid>
      </Box>
    </>
  );
};

JdTableInput.propTypes = {
  rowSum: PropTypes.number,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  pageNo: PropTypes.number,
  total: PropTypes.number,
  onChangePage: PropTypes.func,
  loading: PropTypes.bool,
};

export default JdTableInput;
