import { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import debounce from "lodash/debounce";
import { useFormik } from "formik";
import * as yup from "yup";

import logo from "../images/logo.png";

const validationSchema = yup.object({
  textSearch: yup
    .string()
    .required("Введите название")
    .min(3, "Минимум 3 символа для поиска")
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Только буквы"),
});

const Home = () => {
  const [prevValuesForm, setPrevValuesForm] = useState({});

  const {
    values,
    handleChange,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      textSearch: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("values:", values);
      setSubmitting(true);

      if (prevValuesForm === JSON.stringify(values)) {
        setSubmitting(false);
        return;
      }
      setPrevValuesForm(JSON.stringify(values));

      // dispatch(
      //   fetchConverter(
      //     values.textSearch,
      //   )
      // );
      setSubmitting(false);
    },
  });

  return (
    <main>
      <Container maxWidth="sm">
        <Box textAlign="center">
          <img src={logo} alt="logo" />
          <Typography component="h1" variant="h5" paragraph>
            Поиск по названию коктейля:
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="textSearch"
              value={values.textSearch}
              onChange={(e) => {
                handleChange(e);

                debounce(handleSubmit, 750)();
                // setTimeout(() => {
                // handleSubmit();
                // }, 0);
              }}
              error={!!(errors.textSearch && touched.textSearch)}
              helperText={
                !!(errors.textSearch && touched.textSearch)
                  ? errors.textSearch
                  : ""
              }
              placeholder="Поиск"
            />
            <IconButton type="submit" disabled={isSubmitting}>
              <SearchIcon />
            </IconButton>
          </form>
        </Box>
      </Container>
    </main>
  );
};

export default Home;
