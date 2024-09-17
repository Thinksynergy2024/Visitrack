import { useState, createContext, useEffect } from "react";
import { APP_API_URL } from "@/assets/api-endpoints";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import UseAxios from "@/assets/hooks/use-axios";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const loginUser = async (username, password) => {
    const axiosInstance = UseAxios();
    try {
      const response = await axiosInstance.post(APP_API_URL.LOGIN, {
        username: username,
        password: password,
      });
      if (response.data.status.status_text === "Success.") {
        const userInfo = response.data.user_info;

        localStorage.setItem("current_user", JSON.stringify(userInfo));
        setUser(userInfo);

        router.push("/dashboard");
      } else {
        toast.error(response.data.status.status_text);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while processing your request");
    }
  };

 

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("current_user");
    router.push("/");
  };

  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    user: user,
  
  };

  // decode the token and set the user when a component mounts
  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("current_user"));
    setUser(storedToken);
  }, []);

  return (
    <authContext.Provider value={contextData}>{children}</authContext.Provider>
  );
};
