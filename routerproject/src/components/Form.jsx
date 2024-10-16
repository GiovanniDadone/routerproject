import React from "react";



const Form = () => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          type="text"
          placeholder="Email"
        />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
