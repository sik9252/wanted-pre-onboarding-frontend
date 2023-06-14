import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/** other utils */
import { checkAuth } from "../../utils/AuthManage";

function Todo() {
  const navigate = useNavigate();

  // 로그인된 상태인지 검사
  useEffect(() => {
    if (!checkAuth()) {
      navigate("/signin");
    }
  }, []);

  return <div>Todo</div>;
}

export default Todo;
