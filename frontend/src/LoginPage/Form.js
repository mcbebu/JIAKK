import Title from "../components/Text/Title";

const Form = ({ title, children }) => {
  return (
    <div className="w-full my-20 flex flex-col justify-items-center">
      <Title label={title} />
    </div>
  );
};

export default Form;
