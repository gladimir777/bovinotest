import React from "react";
import { Redirect, history, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const AnimalItem = ({ farm, history }) => {
  const animaldetail = index => history.push(`/animaldetail/${index}`);
  return (
    <div className="pagination">
      <section>
        <h1>Animals</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Diio</th>
                <th>Birth Day</th>
                <th>Race</th>
                <th>Sex</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {farm.map((item, i) => (
                <tr key={i} onClick={() => animaldetail(i)}>
                  <td>{item.diio}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.race}</td>
                  <td>{item.sex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  result: state.login.data
});
export default connect(mapStateToProps, {})(withRouter(AnimalItem));
