// Code EyesOnMe Component Here

function EyesOnMe() {
  function handleOnFocus(event) {
    console.log("Good!");
  }
  function handleOnBlur(event) {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={handleOnFocus} onBlur={handleOnBlur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
