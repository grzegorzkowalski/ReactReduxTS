import React, {useState} from 'react';
import StoperContext, {StoperType, initialState} from "./Context";
import InnerApp from "./InnerApp";
import './App.css';

function App() {
  const [state, dispatch] = useState<StoperType>(initialState);

    const value = React.useMemo(() => ({
        state, dispatch
    }), [state]);

  return (
      <StoperContext.Provider value={value}>
        <InnerApp />
      </StoperContext.Provider>
  );
}

export { StoperContext }
export default App;
