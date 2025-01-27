"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { searchVehicle } from "@/app/redux/service/trips";
import { toast } from "react-hot-toast";
import { setVehicles } from "@/app/redux/features/trips";
import Popover from "@mui/material/Popover";
import CreateTripModal from "./create-trip-modal";
import { MdAdd } from "react-icons/md";

const DataGrid = dynamic(() => import("devextreme-react/data-grid"), {
  ssr: false,
});

const SearchVehicle = () => {
  const { vehicle } = useSelector((store: any) => store.trip);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClickPopOver = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const initialValues = {
    regno: "",
  };

  const validationSchema = Yup.object().shape({
    regno: Yup.string().required("This field is required!"),
  });

  const type = "vehicles";

  const handleSearchVehicle = async (
    formValue: typeof initialValues,
    helpers: any
  ) => {
    try {
      const formData = {
        ...formValue,
        type: type,
      };
      setLoading(true);

      const res = await searchVehicle(formData);

      // If searchVehicle is successful, dispatch the results and reset form
      dispatch(setVehicles(res));
      helpers.resetForm();
      toast.success("vehicle retrieved successfully");
    } catch (err) {
      console.log("USER_ERROR", err);
      toast.error("Failed to search for vehicle");
    } finally {
      setLoading(false); // Ensure loading is stopped in both success and failure
    }
  };

  return (
    <section>
      <button
        onClick={handleClickPopOver}
        className="bg-primary px-4 py-2 rounded text-xs text-white flex items-center gap-2"
      >
        <MdAdd className="text-xl" />
        Add Trip
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopOver}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSearchVehicle}
          >
            <Form className="flex items-center gap-1 mb-2 p-4">
              <div className="w-full">
                <Field
                  className="block border border-gray py-2 text-xs rounded px-4 focus:outline-none"
                  type="text"
                  placeholder="Registration No."
                  name="regno"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary px-4 py-2 rounded text-xs text-white flex"
                >
                  {loading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                  )}
                  Search
                </button>
              </div>
            </Form>
          </Formik>
        </div>

        {vehicle.length > 0 && (
          <section className="bg-white rounded shadow p-4 text-xs">
            <div className="flex items-center justify-between">
              <p>Reg Number</p>
              <p>{vehicle[0]?.regno}</p>
            </div>
            <hr className="text-gray my-1" />
            <div className="flex items-center justify-between">
              <p>Make</p>
              <p>{vehicle[0]?.make}</p>
            </div>
            <hr className="text-gray my-1" />
            <div className="flex items-center justify-between">
              <p>Driver</p>
              <p>{vehicle[0]?.driver}</p>
            </div>
            <hr className="text-gray my-1" />
            <button
              onClick={handleClickOpen}
              className="bg-primary text-white rounded px-4 py-2 text-xs w-full"
            >
              Add Trip
            </button>
            <CreateTripModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              handleClose={handleClose}
              handleClosePopOver={handleClosePopOver}
              vehicle={vehicle}
            />
          </section>
        )}
      </Popover>
    </section>
  );
};

export default SearchVehicle;
