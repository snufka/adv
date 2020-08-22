import React from "react";

export default function ContactPopUp() {
  return (
    <div>
      <form className="col-md-6">
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="MyName"
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          ></input>
          <div className="form-group">
            <label for="exampleFormControlInput1">Phone</label>
            <input
              type="phone"
              className="form-control"
              placeholder="+491769990000999"
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Project Budget</label>
            <input
              type="budget"
              className="form-control"
              placeholder="Budget"
            ></input>
          </div>
        </div>
        <div className="form-group col-md-4">
          <label for="inputState">Project Start</label>
          <select id="inputState" className="form-control">
            <option selected>Immediatel</option>
            <option>in 3-6 weeks</option>
            <option>in 3 months or later</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label for="inputState">Company size </label>
          <select id="inputState" className="form-control">
            <option selected>1-10 worker</option>
            <option>11-50 worker</option>
            <option>51-500 worker</option>
            <option>500+ worker</option>
          </select>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary btn-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}
