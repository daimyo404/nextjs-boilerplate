import Wrapper from "./wrapper";
import Image from "../_components/Image";
import Typography from "../_components/Typography";

export default function Hoge() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-32 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image></Image>
        <Typography></Typography>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Wrapper></Wrapper>
      </div>
    </div>
  );
}
