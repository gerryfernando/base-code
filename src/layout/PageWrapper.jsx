import { useDispatch } from "react-redux";
import {
  setAppState,
  setAppStateDisplayText,
} from "../redux/features/appStateSlice";
import PropTypes from "prop-types";
import { useEffect } from "react";

function PageWrapper({ state, displayText, children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (state) {
      dispatch(setAppState(state));
    }
    if (displayText) {
      dispatch(setAppStateDisplayText(displayText));
    }
  }, [dispatch, state, displayText, children]);

  return <>{children}</>;
}

PageWrapper.propTypes = {
  state: PropTypes?.string,
  displayText: PropTypes?.string,
  children: PropTypes?.node,
};

export default PageWrapper;
