import { CSSProperties, FC } from "react";

interface Props {
  style?: CSSProperties
}

const ScreenLoading: FC<Props> = ({ style }) => {
  return (
    <div className="loader" style={style}>
      <div className="justify-content-center primary-loading"></div>
    </div>
  );
};
export default ScreenLoading;
