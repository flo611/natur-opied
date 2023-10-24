import { HydraAdmin } from "@api-platform/admin";
import React from "react";
import { createRoot } from "react-dom/client";

const Admin = () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<HydraAdmin entrypoint={"http://localhost:8000/api"} />);
};

export default Admin;
