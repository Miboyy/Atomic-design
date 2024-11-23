// Button Component
const Button = (props) => {
    return (
      <button
        // eslint-disable-next-line react/prop-types
        className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
        type="submit"
      >
        Belanja
      </button>
    );
  };
  export default Button;