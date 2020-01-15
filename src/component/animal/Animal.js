import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import login from "../../reducers/login";
import FarmItem from "./AnimalItem";
import Pagination from "./Pagination";

const Animal = ({ result, history }) => {
  const [currentPage, setCurentPage] = useState(1);
  const [farmPerPage, setFarmPerPage] = useState(100);
  const firstPageIndex = currentPage * farmPerPage;
  const lastPageIndex = firstPageIndex - farmPerPage;

  const animals = result ? result.farms[0].animals : [];
  const farm = animals.slice(lastPageIndex, firstPageIndex);

  const paginate = pageNumber => setCurentPage(pageNumber);

  if (result === null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="farm-container">
      <FarmItem farm={farm} />
      <Pagination
        farmPerPage={farmPerPage}
        totalItem={animals.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  result: state.login.data
});

export default connect(mapStateToProps, {})(withRouter(Animal));
