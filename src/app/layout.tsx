"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "./devextreme.css";
import { AuthProvider } from "@/use-context";
import "devextreme/dist/css/dx.material.blue.light.css";
import { Provider } from "react-redux";
import { store } from "../app/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add metadata here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Visitrack</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Provider store={store}>
          <AuthProvider>
            <Toaster position="top-center" />
            {children}
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
