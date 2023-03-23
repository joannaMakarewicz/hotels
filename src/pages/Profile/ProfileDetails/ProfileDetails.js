import React from "react";

const ProfileDetails = () => {
  return (
    <form>
      <div className="form-group">
        <label>
          E-mail:
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </label>
      </div>
      <div className="form-group mt-2">
        <label>
          Hasło:
          <input type="password" className="form-control" placeholder="*****" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </form>
  );
};

export default ProfileDetails;
