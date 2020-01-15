import React from "react";

const FarmItem = ({ farm }) => {
  return (
    <div className="pagination">
      <section>
        <h1>Farms</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Farm ID</th>
                <th>Farm Name</th>
                <th>Place</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {farm.map((item, i) => (
                <tr key={i}>
                  <td>{item.farmId}</td>
                  <td>{item.farmName}</td>
                  <td>{item.place}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default FarmItem;
