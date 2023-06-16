import Router from "./router";
import GlobalStyles from "./styles/GlobalStyles";

import { useAxiosInterceptor } from "./utils/axiosManage/useAxiosInterceptor";

function App() {
  useAxiosInterceptor();

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
