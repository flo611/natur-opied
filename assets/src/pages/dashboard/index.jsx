import React, { useState } from "react";
import AddBook from "./functions/addBook";
import changeBook from "./functions/changeBook";

const Dashboard = () => {
  const [settings, setSettings] = useState({
    add: false,
  });

  return (
    <>
      <section className="bg-red-500 h-screen">
        <button
          type="button"
          onClick={() => {
            setSettings({ add: true });
          }}
        >
          Ajouter un livre
        </button>
        {settings.add ? <AddBook /> : null}
        <button>Modifier un livre</button>
        {<changeBook/>}
        <button>Supprimer un livre</button>
      </section>
    </>
  );
};

export default Dashboard;
