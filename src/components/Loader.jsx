import React from "react";
import { Grid } from "react-loader-spinner";

function Loader() {
  return (
    <div className="mt-60 flex items-center justify-center">
      <Grid
        height="80"
        width="80"
        color="#FFCE1A"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
