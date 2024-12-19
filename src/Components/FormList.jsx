import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FormList({ users, onRemoveUser, onUserUpdate }) {
  const navigate = useNavigate();


  const handleUpdate = (user) => {
    navigate("/", { state: user }); 
  };

  return (
    <>
      <div className="w-full min-h-screen bg-black text-white p-10">
        <h1 className="text-5xl text-center font-semibold mb-8 bg-gradient-to-r from-[#9bafd9] to-[#103783] bg-clip-text text-transparent tracking-tight">
          User Details
        </h1>

        {users.length === 0 ? (
          <div className="p-4 border-2 border-gray-400 rounded-xl">
            <h1 className="text-center font-medium text-3xl text-gray-400 my-2">
              No user details found
            </h1>
          </div>
        ) : (
          <div>
            {users.map((user, index) => (
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "rgb(156 163 175)",
                  borderWidth: "2px",
                  margin: "1rem",
                }}
                key={index}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        display: "none",
                      }}
                    />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h1 className="text-xl lg:text-3xl lg:p-2">
                    Details of{" "}
                    <b>
                      {user.firstName} {""} {user.lastName}
                    </b>
                    , {user.role} at {user.orgName}
                  </h1>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="p-2 block lg:flex justify-around">
                    <div className="space-y-3">
                      <h1 className="text-xl lg:text-2xl ">
                        <span className="text-gray-400">Name</span>:{" "}
                        {user.firstName} {user.lastName}
                      </h1>
                      <h1 className="text-xl lg:text-2xl">
                        <span className="text-gray-400">Email</span>:{" "}
                        {user.email}
                      </h1>
                      <h1 className="text-xl lg:text-2xl">
                        <span className="text-gray-400">Gender</span>:{" "}
                        {user.gender}
                      </h1>
                      <h1 className="text-xl lg:text-2xl">
                        <span className="text-gray-400">
                          Residential Address
                        </span>
                        : {user.address}
                      </h1>
                    </div>

                    <div className="space-y-3">
                      <h1 className="text-xl lg:text-2xl">
                        <span className="text-gray-400">Organization Name</span>
                        : {user.orgName}
                      </h1>
                      <h1 className="text-xl lg:text-2xl">
                        <span className="text-gray-400">Job Role</span>:{" "}
                        {user.role}
                      </h1>
                      <h1 className="text-xl lg:text-2xl">
                        <span className="text-gray-400">Joining Date</span>:{" "}
                        {user.joinDate}
                      </h1>
                      <h1 className="text-xl lg:text-2xl">
                        <span className="text-gray-400">
                          Organization Address
                        </span>
                        : {user.orgAdd}
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-evenly">
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleUpdate(user)}
                        variant="contained"
                        type="submit"
                        sx={{
                          backgroundColor: "#5b6cf9",
                          margin: "0.5rem",
                          padding: "0.8rem",
                          borderRadius: "2rem",
                          width: "100%",
                          fontFamily: "inherit",

                          ":hover": {
                            backgroundColor: "#4d5cd6",
                          },
                        }}
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => onRemoveUser(index)}
                        variant="outlined"
                        type="reset"
                        sx={{
                          color: "#d13028",
                          margin: "0.5rem",
                          padding: "0.8rem",
                          borderRadius: "2rem",
                          borderColor: "#d13028",
                          fontFamily: "inherit",
                          width: "100%",
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}

        <div className=" mt-10 flex justify-center">
          <Link
            to={"/"}
            className="bg-[#5b6cf9] p-5 rounded-full hover:bg-[#4d5cd6]"
          >
            Go back to user form
          </Link>
        </div>
      </div>
    </>
  );
}

export default FormList;
