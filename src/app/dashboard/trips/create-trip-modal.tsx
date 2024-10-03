import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTrip, fetchTrips } from "@/app/redux/service/trips";
import { setTrips, setVehicles } from "@/app/redux/features/trips";

interface CreateTripModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleClose: () => void;
  vehicle: any;
  handleClosePopOver: () => void;
}

const CreateTripModal: React.FC<CreateTripModalProps> = ({
  openModal,
  setOpenModal,
  handleClose,
  handleClosePopOver,
  vehicle,
}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const type = "trips";

  const getAllTrips = async () => {
    const res = await fetchTrips(type);
    dispatch(setTrips(res));
  };

  const initialValues = {
    drivername: "",
    turnboy: "",
    exitmileage: "",
    destination: "",
    exitnotes: "",
    sealnumber: "",
    noofboxes: "",
    accountid: "",
  };

  const validationSchema = Yup.object().shape({
    drivername: Yup.string().required("This field is required!"),
    turnboy: Yup.string().required("This field is required!"),
    exitmileage: Yup.number().required("This field is required!"),
    destination: Yup.string().required("This field is required!"),
    exitnotes: Yup.string().required("This field is required!"),
    sealnumber: Yup.string().required("This field is required!"),
    noofboxes: Yup.number().required("This field is required!"),
  });

  const handleAddTrip = async (
    formValue: typeof initialValues,
    helpers: any
  ) => {
    try {
      const formData = {
        json: JSON.stringify({
          "drivername": formValue.drivername,
          "turnboy": formValue.turnboy,
          "exitmileage": formValue.exitmileage.toString(),
          "destination": formValue.destination,
          "exitnotes": `Entered by ${formValue.exitnotes}`,
          "sealnumber": formValue.sealnumber,
          "noofboxes": formValue.noofboxes.toString(),
          "accountid": vehicle[0]?.accountid?.toString() || ""
        })
      };
  
      setLoading(true);
  
      // Await the trip addition
      await addTrip(formData);
  
      // Reset the form and close modals
      helpers.resetForm();
      handleClose();
      handleClosePopOver();
      dispatch(setVehicles([]));
      getAllTrips();
      toast.success("Trip added successfully");
    } catch (err) {
      console.log("USER_ERROR", err);
      toast.error("Failed to add trip");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <section className="flex items-center justify-center gap-8 overflow-hidden">
          <div className="w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleAddTrip}
            >
              <Form className="w-full">
                <div className="flex items-center justify-between gap-4">
                  <section className="w-full space-y-3">
                    <div>
                      <Field
                        className="block border border-gray py-2 text-sm rounded px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Driver Name"
                        name="drivername"
                        required
                      />
                    </div>
                    <div>
                      <Field
                        className="block border rounded text-sm border-gray py-2 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Turn boy"
                        name="turnboy"
                        required
                      />
                    </div>
                  </section>
                  <section className="w-full space-y-3">
                    <div>
                      <Field
                        className="block border border-gray py-2 text-sm rounded px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Exit Mileage"
                        name="exitmileage"
                        required
                      />
                    </div>
                    <div>
                      <Field
                        className="block border rounded text-sm border-gray py-2 px-4 focus:outline-none w-full"
                        type="text"
                        placeholder="Destination"
                        name="destination"
                        required
                      />
                    </div>
                  </section>
                </div>
                <section className="flex items-center justify-between gap-4 my-3">
                  <div className="w-full">
                    <Field
                      className="block border border-gray py-2 text-sm rounded px-4 focus:outline-none w-full"
                      type="text"
                      placeholder="No. of Boxes"
                      name="noofboxes"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Field
                      className="block border rounded text-sm border-gray py-2 px-4 focus:outline-none w-full"
                      type="text"
                      placeholder="Seal Number"
                      name="sealnumber"
                      required
                    />
                  </div>
                </section>
                <section className="">
                  <div className="w-full">
                    <Field
                      className="block border border-gray py-2 text-sm rounded px-4 focus:outline-none w-full"
                      type="text"
                      placeholder="Exit Notes"
                      name="exitnotes"
                      as="textarea"
                      required
                    />
                  </div>
                </section>
                <section className="flex gap-2 items-center justify-end mt-2">
                  <button
                    onClick={handleClose}
                    className="border border-primary px-4 text-xs py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary px-4 py-2 rounded text-xs text-white"
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
                    Add Trip
                  </button>
                </section>
              </Form>
            </Formik>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTripModal;
