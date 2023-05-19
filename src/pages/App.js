import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Layout from "../components/Layout";

export default function App() {
  return (
    <Suspense>
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  );
}
