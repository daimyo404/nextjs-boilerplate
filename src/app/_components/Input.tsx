type FormProps = {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  required: boolean;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputProps = { props: FormProps[] };

export default function Input(props: InputProps) {
  return (
    <form className="space-y-6" action="#" method="POST">
      {props.props.map((props, index) => {
        return (
          <>
            <label
              htmlFor={props.id}
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {props.name}
            </label>
            <input
              key={index}
              id={props.id}
              name={props.name}
              type={props.type}
              autoComplete={props.autoComplete}
              required={props.required}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </>
        );
      })}
    </form>
  );
}
