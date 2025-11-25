import { FC } from "react";

interface Props {}

const ScreenLoading: FC<Props> = () => {
  return (
    <div className="loader">
      <div className="justify-content-center primary-loading"></div>
    </div>
  );
};
export default ScreenLoading;
