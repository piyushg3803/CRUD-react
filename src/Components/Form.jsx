import React, { useContext, useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { blue } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { Link, useLocation } from "react-router-dom";

function Form({ onAddUser }) {
  const location = useLocation();
  const editingUser = location.state || null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    address: "",
    orgName: "",
    role: "",
    joinDate: "",
    orgAdd: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDate = (value) => {
    setFormData({
      ...formData,
      joinDate: value ? dayjs(value).format("DD-MM-YYYY") : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      address: "",
      orgName: "",
      role: "",
      joinDate: "",
      orgAdd: "",
    });
  };

  return (
    <>
      <div className="bg-black h-full w-full text-white p-10">
        <div className="mb-5">
          <h1 className="text-center text-5xl font-semibold bg-gradient-to-r from-[#9bafd9] to-[#103783] bg-clip-text text-transparent tracking-tight">
            User Form
          </h1>
          <p className="text-center font-medium text-xl text-gray-400 my-2">
            Enter your details here
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-2 border-gray-500 p-5 rounded-xl"
        >
          <div className="block lg:flex">
            <div className="w-full lg:w-1/2 m-4">
              <h1 className="text-3xl font-medium">Personal Info</h1>
              <div className="block lg:flex justify-around my-4">
                <TextField
                  id="outlined-multiline-flexible"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  label="First Name"
                  autoComplete="off"
                  required
                  className="w-full lg:w-[49%] border border-gray-400 p-2 rounded"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(156 163 175)",
                        margin: "4px"
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(156 163 175)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5b6cf9", 
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#888888", 
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#5b6cf9", 
                    },
                    input: {
                      color: "#ffffff",
                    },
                  }}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                  label="Last Name"
                  required
                  className="w-full lg:w-[49%] border border-gray-400 p-2 rounded"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(156 163 175)",
                        margin: "4px"
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(156 163 175)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5b6cf9",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#888888",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#5b6cf9",
                    },
                    input: {
                      color: "#ffffff",
                    },
                  }}
                />
              </div>

              <TextField
                id="outlined-multiline-flexible"
                variant="outlined"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                label="Email Address"
                className="w-full"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(156 163 175)",
                      margin: "0.2rem",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(156 163 175)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5b6cf9",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#888888",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#5b6cf9",
                  },
                  input: {
                    color: "#ffffff",
                  },
                }}
              />

              <div className="flex items-center justify-self-start m-4">
                <p className="text-white font-medium text-xl me-5">Gender:</p>
                <RadioGroup
                  row
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  name="gender row-radio-buttons-group"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: blue[200],
                    },
                  }}
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </div>

              <TextField
                id="outlined-multiline-flexible"
                variant="outlined"
                value={formData.address}
                name="address"
                onChange={handleChange}
                multiline
                type="text"
                label="Residential Address"
                className="w-full border border-gray-400 p-2 rounded"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(156 163 175)",
                      margin: "0.2rem",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(156 163 175)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5b6cf9",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#888888",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#5b6cf9",
                  },
                  textarea: {
                    color: "#ffffff",
                  },
                }}
              />
            </div>

            <div className="w-full lg:w-1/2 m-4">
              <h1 className="text-3xl font-medium">Professional Info</h1>
              <div className="flex justify-around my-4">
                <TextField
                  id="outlined-multiline-flexible"
                  variant="outlined"
                  label="Organization Name"
                  name="orgName"
                  required
                  value={formData.orgName}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgb(156 163 175)", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(156 163 175)", // Hover border color
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5b6cf9", // Focused border color
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#888888", // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#5b6cf9", // Focused label color
                    },
                    input: {
                      color: "#ffffff", // Input text color
                    },
                  }}
                />
              </div>

              <TextField
                id="outlined-multiline-flexible"
                variant="outlined"
                type="text"
                label="Job Role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                autoComplete="off"
                className="w-full"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(156 163 175)",
                      margin: "0.2rem",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(156 163 175)", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5b6cf9", // Focused border color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#888888", // Default label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#5b6cf9", // Focused label color
                  },
                  input: {
                    color: "#ffffff", // Input text color
                  },
                }}
              />

              <div className="flex items-center justify-self-start my-2 mx-2">
                <p className="text-white font-medium text-xl me-5">
                  When did you join?
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    components={["DatePicker"]}
                    name="joinDate"
                    value={formData.joinDate ? dayjs(formData.joinDate) : null}
                    onChange={handleDate}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgb(156 163 175)",
                          margin: "0.2rem",
                        },
                        "&:hover fieldset": {
                          borderColor: "rgb(156 163 175)", // Hover border color
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#5b6cf9", // Focused border color
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#888888", // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#5b6cf9", // Focused label color
                      },
                      input: {
                        color: "#ffffff", // Input text color
                      },
                      "& .MuiButtonBase-root": {
                        color: "rgb(156 163 175)",
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>

              <TextField
                id="outlined-multiline-flexible"
                variant="outlined"
                multiline
                type="text"
                label="Organization Address"
                name="orgAdd"
                value={formData.orgAdd}
                onChange={handleChange}
                className="w-full border border-gray-400 p-2 rounded"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(156 163 175)",
                      margin: "0.2rem",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(156 163 175)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5b6cf9",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#888888",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#5b6cf9",
                  },
                  textarea: {
                    color: "#ffffff",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#5b6cf9",
                margin: "0.5rem",
                padding: "0.8rem",
                borderRadius: "2rem",
                width: "10%",
                fontFamily: "inherit",

                ":hover": {
                  backgroundColor: "#4d5cd6",
                },
              }}
            >
              Submit
            </Button>

            <Button
              onClick={() => {
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  gender: "",
                  address: "",
                  orgName: "",
                  role: "",
                  joinDate: "",
                  orgAdd: "",
                });
              }}
              variant="outlined"
              type="reset"
              sx={{
                margin: "0.5rem",
                padding: "0.8rem",
                borderRadius: "2rem",
                fontFamily: "inherit",
                width: "10%",
              }}
            >
              Reset
            </Button>
          </div>
        </form>

        <div className=" mt-10 flex justify-center">
          <Link
            to={"/details"}
            className="bg-[#5b6cf9] p-5 rounded-full hover:bg-[#4d5cd6]"
          >
            See User Details List
          </Link>
        </div>
      </div>
    </>
  );
}

export default Form;
