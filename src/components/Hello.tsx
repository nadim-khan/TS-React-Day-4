import * as React from 'react';
import Description from './Description';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

const App: React.FC<IAppOwnProps> = ({ userType, username }): JSX.Element => {
  return (
    <div className="App">
      <p>
        Hi, {username ? username : 'Mysterious Entity'}, your user type is {username ? userType : 'irrelevant because I do not know you'}.
      </p><hr/>
      <div>
        <h2> Description Component</h2>
        <Description countBy={3}/>
      </div>
    </div>
  );
}

export default App;
