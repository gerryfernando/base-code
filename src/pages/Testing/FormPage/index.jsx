import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import moment from "moment";
import { FormProvider, useForm } from "react-hook-form";
import JdDate from "../../../components/Field/JdDate";
import JdDropDown from "../../../components/Field/JdDropDown";
import JdTextField from "../../../components/Field/JdTextField";
import { FORMAT_DATE_DEFAULT } from "../../../const/TimeFormat";
import { useCallback, useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import useDebounce from "../../../hooks/useDebounce";
import JdTypography from "../../../components/JdTypography";
import JdTime from "../../../components/Field/JdTime";
import JdAutoComplete from "../../../components/Field/JdAutoComplete";

const OptionList = [
  { value: "FIXED", label: "Fixed" },
  { value: "FLOAT", label: "Floating" },
  { value: "SOLID", label: "Solid" },
];

const FormPage = () => {
  const RHF = useForm();
  const delay = 500;
  const {
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = RHF;

  const [searchData, setSearchData] = useState("");
  const [params, setParams] = useState({
    search: "",
  });

  const debouncedSearch = useDebounce({
    value: searchData,
    delay: delay,
  });

  useEffect(() => {
    setParams({
      search: debouncedSearch,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  useEffect(() => {
    console.log(`debounce search with delay ${delay}, value = `, params.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const onSubmitForm = (data) => {
    console.log(data);
  };

  const handleSearch = useCallback((event) => {
    setSearchData(event.target.value);
  }, []);

  return (
    <Container>
      <FormProvider {...RHF}>
        <form id="PageForm" onSubmit={handleSubmit(onSubmitForm)}>
          <Grid
            container
            display="flex"
            justifyContent="center"
            spacing={2}
            p={10}
          >
            <JdTypography fontSize={30} fontWeight={600}>
              Example Form Component
            </JdTypography>
            <Grid item xs={12}>
              <InputLabel sx={{ mb: "4px" }}>
                Search Example With Debounce
              </InputLabel>
              <TextField
                fullWidth
                value={searchData}
                onChange={handleSearch}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <JdDate
                col={6}
                name="date"
                label="Date Picker"
                rhf={RHF}
                helperText={errors?.date ? errors?.date?.message : ""}
                error={!!errors?.date}
                sx={{ width: "228px" }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <JdTime
                col={6}
                name="time"
                label="Time Picker"
                rhf={RHF}
                helperText={errors?.time ? errors?.time?.message : ""}
                error={!!errors?.time}
                sx={{ width: "228px" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <JdTextField
                rhf={RHF}
                name="text"
                id="text"
                label="Text Field"
                helperText={errors?.text ? errors?.text?.message : ""}
                error={!!errors?.text}
                placeholder="Input Text Field"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <JdTextField
                rhf={RHF}
                id="textArea"
                name="textArea"
                label="Text Area Field"
                helperText={errors?.textArea ? errors?.textArea?.message : ""}
                error={!!errors?.textArea}
                placeholder="Input Text Area"
                isTextArea
                required
              />
            </Grid>
            <Grid item xs={12}>
              <JdTextField
                rhf={RHF}
                name="number"
                id="number"
                label="Number Field"
                helperText={errors?.number ? errors?.number?.message : ""}
                error={!!errors?.number}
                placeholder="Input Number Field"
                isNumber
                required
              />
            </Grid>
            <Grid item xs={12}>
              <JdAutoComplete
                rhf={RHF}
                id="autoComplete"
                label="Auto Complete"
                name="autoComplete"
                size="small"
                fullWidth
                placeholder="Select / Type in Auto Complete"
                options={OptionList}
                required
                helperText={
                  errors.autoComplete ? errors.autoComplete.message : ""
                }
                error={!!errors?.autoComplete}
              />
            </Grid>
            <Grid item xs={12}>
              <JdDropDown
                name="dropdown"
                rhf={RHF}
                label="Drop Down"
                size="small"
                fullWidth
                options={OptionList}
                required
                placeholder="Select..."
                helperText={errors.dropdown ? errors.dropdown.message : ""}
                error={!!errors?.dropdown}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Submit</Button>
              <Button
                onClick={() =>
                  console.log(
                    getValues(),
                    moment(getValues("date")).format(FORMAT_DATE_DEFAULT)
                  )
                }
              >
                Test
              </Button>
              <Button onClick={() => reset()}>Reset</Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Container>
  );
};

export default FormPage;
