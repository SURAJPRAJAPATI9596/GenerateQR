import { useState, useRef } from "react";
import Loader from "./allcomponents/loader";

function App() {
  const [data, setData] = useState();
  const imgRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleChange = () => {
    if (data) {
      setLoading(true);
      imgRef.current.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SURAJ+${data}`;
    } else {
      alert("Please Enter url then click to generate or press Enter");
    }
    setData("");
  };

  return (
    <>
      <div
        className="card text-center mb-3"
        style={{ width: "18rem", marginTop: "10%", marginLeft: "30%" }}
      >
        <div
          className="card-body"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <h5 className="card-title">QR Code Generator</h5>
          <input
            value={data}
            type="text"
            placeholder="Enter url...."
            onChange={(e) => {
              setData(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                handleChange();
              }
            }}
          />
          {loading ? <Loader /> : null}
          <img
            ref={imgRef}
            onLoad={() => {
              setLoading(false);
            }}
            style={{ display: loading ? "none" : "block" }}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              handleChange();
            }}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
