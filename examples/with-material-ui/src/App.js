
import React from "react";


const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <h2>Login</h2>

      <p>
        value is: {value}
      </p>

      <input value={value}
             onChange={(event) => setValue(event.target.value)} />

    </div>
  );
};

export default App;
