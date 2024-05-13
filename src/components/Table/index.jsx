import { useTheme } from "@emotion/react";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, Grid, IconButton, Stack, TextField, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import JdButton from "../JdButton";
import JdTypography from "../JdTypography";
import JdPagination from "./JdPagination";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const JdTable = ({
  title,
  isCheckbox = false,
  rows,
  columns,
  pageSize,
  pageNo,
  total,
  onChangePage,
  onChangePageSize,
  disableColumnMenu = true,
  disableColumnFilter = true,
  disableColumnSelector = true,
  disableColumnSorting = true,
  hideFooter = false,
  loading = false,
  actions,
  handleView,
  handleEdit,
  handleAdd,
  handleDelete,
  handleSearch,
}) => {
  const theme = useTheme();
  const [searchData, setSearchData] = useState("");
  const debouncedSearch = useDebounce({
    value: searchData,
    delay: 500,
  });

  useEffect(() => {
    if (actions.search) {
      handleSearch(searchData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    "& .MuiDataGrid-columnHeaders": {
      minHeight: 34,
      background: theme.palette.table.background.head,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    "& .MuiDataGrid-columnHeader": {
      borderLeft: "1px solid #C1C1C1",
      "&:nth-of-type(1)": {
        borderLeft: "none",
      },
    },
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-footerContainer": {
      border: "none",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: 600,
      fontSize: "20px",
      minHeight: "34px",
    },
    "& .MuiDataGrid-row:nth-of-type(even)": {
      backgroundColor: theme.palette.table.background.childEven,
    },
    "& .MuiDataGrid-cell": {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "17px",
      borderBottom: "none",
    },
    "& .MuiDataGrid-row:last-child": {
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
  }));

  const ActionMenu = {
    field: "action",
    headerName: "Aksi",
    minWidth: 75,
    flex: 1,
    sortable: false,
    align: "center",
    headerAlign: "center",
    renderCell: ({ row }) =>
      loading ? (
        "Loading"
      ) : (
        <Stack spacing={1} direction="row">
          {actions.view && (
            <IconButton onClick={() => handleView(row)}>
              <Visibility sx={{ color: "#44C7F4" }} />
            </IconButton>
          )}
          {actions.edit && (
            <IconButton onClick={() => handleEdit(row)}>
              <Edit sx={{ color: "#32BEA6" }} />
            </IconButton>
          )}
          {actions.delete && (
            <IconButton onClick={() => handleDelete(row)}>
              <Delete color="error" />
            </IconButton>
          )}
        </Stack>
      ),
  };
  const NoRowsOverlay = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      No Data
    </Box>
  );
  return (
    <Grid container rowSpacing={5} spacing={{ xs: 0, sm: 0, md: 5 }}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={1}
          justifyContent={{ xs: "right", sm: "right", md: "space-between" }}
        >
          <Grid item sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <JdTypography fontSize="20px" semiBold>
              {title}
            </JdTypography>
          </Grid>
          <Grid width={{ xs: "100%", sm: "100%", md: "auto" }} item>
            <Stack
              width={{ xs: "100%", sm: "100%", md: "auto" }}
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing="20px"
            >
              {actions.search && (
                <TextField
                  fullWidth
                  sx={{ minWidth: { xs: "auto", sm: "auto", md: "300px" } }}
                  value={searchData}
                  onChange={(e) => setSearchData(e.target.value)}
                  size="small"
                  placeholder="Search..."
                  // Todo: Uncomment to add search icon
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="end">
                  //       <IconButton>
                  //         <Search />
                  //       </IconButton>
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              )}
              {actions.add && (
                <JdButton
                  sx={{ minWidth: "137px" }}
                  size="small"
                  loading={loading}
                  onClick={handleAdd}
                  fontcolor="#ffffff"
                  endIcon={<Add />}
                >
                  Add Data
                </JdButton>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            // minHeight: 500,
            width: "100%",
          }}
        >
          <StyledDataGrid
            autoHeight
            // headerHeight={44}
            // getRowHeight={() => rowHeight}
            textAlign="center"
            theme={theme}
            rows={rows}
            columns={actions.show ? [...columns, ActionMenu] : columns}
            pageSize={pageSize}
            checkboxSelection={isCheckbox}
            disableSelectionOnClick
            hideFooterPagination={hideFooter}
            disableColumnMenu={disableColumnMenu}
            disableColumnFilter={disableColumnFilter}
            disableColumnSelector={disableColumnSelector}
            disableColumnSorting={disableColumnSorting}
            loading={loading}
            components={{
              noRowsOverlay: NoRowsOverlay,
              Pagination: (paginationProps) => (
                <JdPagination
                  {...paginationProps}
                  pageSize={pageSize}
                  pageNo={pageNo}
                  total={total}
                  onChangePage={onChangePage}
                  onChangePageSize={onChangePageSize}
                />
              ),
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

JdTable.propTypes = {
  title: PropTypes.string,
  isCheckbox: PropTypes.bool,
  rows: PropTypes.array,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  pageNo: PropTypes.number,
  total: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangePageSize: PropTypes.func,
  hideFooter: PropTypes.bool,
  disableColumnMenu: PropTypes.bool,
  disableColumnFilter: PropTypes.bool,
  disableColumnSelector: PropTypes.bool,
  disableColumnSorting: PropTypes.bool,
  loading: PropTypes.bool,
  actions: PropTypes.shape({
    edit: PropTypes.bool,
    add: PropTypes.bool,
    view: PropTypes.bool,
    delete: PropTypes.bool,
    search: PropTypes.bool,
    show: PropTypes.bool,
  }),
  handleView: PropTypes.func,
  handleEdit: PropTypes.func,
  handleAdd: PropTypes.func,
  handleDelete: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default JdTable;
