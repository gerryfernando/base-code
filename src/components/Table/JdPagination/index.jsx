import { Box, MenuItem, Pagination, Select, Stack } from "@mui/material";
import PropTypes from "prop-types";
import JdTypography from "../../JdTypography";

// eslint-disable-next-line no-unused-vars
const JdPagination = ({
  pageSize,
  pageNo,
  total,
  onChangePage,
  onChangePageSize,
}) => {
  const sizeOptions = [1, 10, 20, 50, 100];
  return (
    <Stack
      sx={{ marginTop: "32px", paddingTop: 0 }}
      direction={"row"}
      alignItems="center"
      p={1}
      spacing={2}
    >
      {!!onChangePageSize && (
        <>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <JdTypography small>Rows per page</JdTypography>
          </Box>
          <Select
            displayEmpty
            size="small"
            defaultValue=""
            sx={{
              width: 80,
              fontSize: 16,
              height: 32,
              display: { xs: "none", sm: "none", md: "flex" },
            }}
            onChange={(e) => {
              onChangePageSize(e.target.value);
            }}
            value={pageSize || "10"}
          >
            {sizeOptions.map((val, i) => {
              return (
                <MenuItem key={`optionPageSize-${i}`} value={val}>
                  {val}
                </MenuItem>
              );
            })}
          </Select>
        </>
      )}
      <Pagination
        count={total}
        page={pageNo}
        color="primary"
        variant="outlined"
        shape="rounded"
        onChange={onChangePage}
      />
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          padding: "6px",
          border: "1px solid lightgrey",
          borderRadius: "5px",
          gap: "10px",
        }}
      >
        {total} Pages
      </Box>
    </Stack>
  );
};

JdPagination.propTypes = {
  pageSize: PropTypes.number,
  pageNo: PropTypes.number,
  total: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangePageSize: PropTypes.func,
};

export default JdPagination;
