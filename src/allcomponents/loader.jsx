import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      wait...
    </div>
  );
}

export default Loader;
