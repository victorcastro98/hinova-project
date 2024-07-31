import React, { createContext, useState, useContext, ReactNode } from "react";

type AlertType = "info" | "success" | "warning" | "danger";

interface AlertState {
  message: string;
}

interface AlertContextProps {
  alert: AlertState;
  showAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<AlertState>({ message: "" });

  const showAlert = (message: string) => {
    setAlert({ message });
    setTimeout(() => setAlert({ message: "" }), 5000);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
      {alert.message && <Alert message={alert.message} />}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

const Alert: React.FC<AlertState> = ({ message }) => {
  return (
    <div className="top-0 w-screen text-center m-3 fixed z-50 flex justify-center">
      <div className="w-[80%] flex items-center bg-blue-pop text-white text-sm font-bold px-4 py-3 rounded">
        <p>{message}</p>
      </div>
    </div>
  );
};
