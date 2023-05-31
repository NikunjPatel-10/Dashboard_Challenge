import React from "react";
import CompanyForm from "../../components/CompanyForm/CompanyForm";
import CompanyList from "../../components/CompanyList/CompanyList";

function Home() {
  return (
    <div className="homepage-wrapper">
      <CompanyList />
    </div>
  );
}

export default Home;
