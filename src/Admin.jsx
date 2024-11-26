import React from "react";
import { Helmet } from "react-helmet-async";

function Admin() {
  return (
    <div>
      <Helmet>
        <title>Site admin</title>
        <meta
          name="description"
          content="This site was created by Fazilov Saidjon, and it contains more essential items, applications, and numerous additional features."
        />
        <link rel="canonical" href="https://necessarythings.netlify.app/admin" />
      </Helmet>
      <h1>My name is Fozilov Saidjon and Im admin this site</h1>
    </div>
  );
}

export default Admin;
