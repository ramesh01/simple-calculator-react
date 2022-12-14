import React from "react";

const Footer = () => {
  const style = {
    marginBottom: "10px",
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "97%",
    transform: "translate(-50%, -50%)",
    bottom: "0",
  };

  return (
    <footer style={style}>
      <div>
        Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/ramesh-hb" target="_blank">
          ramesh.hb
        </a>
      </div>
    </footer>
  );
};

export default Footer;
