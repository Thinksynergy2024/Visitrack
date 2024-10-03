import UseAxios from "@/components/assets/hooks/use-axios";
import { APP_API_URL } from "../../../../components/assets/api-endpoints";

export const fetchVisits = () => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${APP_API_URL.FETCH_VISITS}`, {})
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};

export const addAppointment = (
  visitorname,
  visitororigin,
  visitoridnumber,
  visitorphonenumber,
  date_start,
  time_start,
  groupsize,
  visitoritems,
  visitorstatus,
  subject,
  visitoritemssno,
  persontovisit,
  typeofvisit,
  vehicleregno,
  groupmembers
) => {
  const axiosInstance = UseAxios();
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(
        `${APP_API_URL.ADD_APPOINTMENT}`,
        visitorname,
        visitororigin,
        visitoridnumber,
        visitorphonenumber,
        date_start,
        time_start,
        groupsize,
        visitoritems,
        visitorstatus,
        subject,
        visitoritemssno,
        persontovisit,
        typeofvisit,
        vehicleregno,
        groupmembers
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
};
