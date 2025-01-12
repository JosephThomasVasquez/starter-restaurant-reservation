import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createTable } from "../utils/api";

const TablesForm = ({ errorHandler }) => {
  const history = useHistory();

  const initialFormData = {
    table_name: "",
    capacity: "",
  };

  const [table, setTable] = useState(initialFormData);

  const handleChange = ({ target }) => {
    if (target.name === "capacity") {
      setTable({ ...table, [target.name]: Number(target.value) });
    } else {
      setTable({ ...table, [target.name]: target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitTable = async () => {
      const abortController = new AbortController();

      try {
        //   Send a POST request of the table data to the backend and creates a record in the database
        const response = await createTable(table, abortController.abort());

        setTable(response);
        history.push("/dashboard");

        errorHandler(null);
      } catch (error) {
        error && errorHandler(error);
      }
    };

    submitTable();
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <div>
      <div className="row">
        <div className="col-12 text-center">
          <h1>Create Table</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 col-lg-4 mb-3">
            <label htmlFor="table_name" className="form-label">
              Table Name
            </label>

            <input
              type="text"
              name="table_name"
              id="table_name"
              placeholder="Table name"
              min="2"
              className="form-control"
              onChange={handleChange}
              value={table?.table_name}
            />
          </div>

          <div className="col-md-4 col-lg-4 mb-3">
            <label htmlFor="capacity" className="form-label">
              Capacity
            </label>
            <input
              type="text"
              name="capacity"
              id="capacity"
              placeholder="Capacity"
              min="1"
              className="form-control"
              onChange={handleChange}
              value={table?.capacity}
            />
          </div>
        </div>

        <div className="row d-flex justify-content-center my-2">
          <div className="col-md-2 col-sm col-6">
            <button type="submit" className="btn btn-primary form-control">
              Submit
            </button>
          </div>
          <div className="col-md-2 col-sm col-6">
            <button
              type="button"
              className="btn btn-secondary form-control"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TablesForm;
