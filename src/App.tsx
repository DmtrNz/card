import './App.css';
import { StyledScreen } from './styledcomponents/StyledScreen';
import rectangle1 from './images/rectangle1.svg';
import { Card } from './components/Card';


function App() {
    return (
        <StyledScreen>
            <Card src={rectangle1} title={"Headline"} description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
        </StyledScreen>   
    );
}

export default App;