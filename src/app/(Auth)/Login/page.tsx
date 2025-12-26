"use client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { loginUser } from "@/store/slices/user.slice";
import { useAppDispatch } from "@/hooks/store.hook";
import { useRouter } from "next/router";

export default function Page() {
  // const router = useRouter();
  const dispatch = useAppDispatch();
  const myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginUser(values))
        .then((res) => {
          console.log(res);
          if (res.payload.message === "success") {
            // router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <>
      <Box sx={{ width: 600, mx: "auto", p: 2 }}>
        <Paper elevation={4} sx={{ p: 4, mt: 5 }}>
          <form onSubmit={myFormik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                fullWidth
                value={myFormik.values.email}
                onBlur={myFormik.handleBlur}
                onChange={myFormik.handleChange}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                name="password"
                value={myFormik.values.password}
                onBlur={myFormik.handleBlur}
                onChange={myFormik.handleChange}
              />
              <Button type="submit" variant="contained">
                LogIn
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </>
  );
}
