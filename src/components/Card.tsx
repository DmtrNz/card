import { StyledCard } from '../styledcomponents/StyledCard';
import { StyledImg } from '../styledcomponents/StyledImg';
import { SaveBtn, StyledBtn } from '../styledcomponents/StyledBtn';


type  CardPropsType={
    src: string;
    title:  string;
    description: string;
}

export  function Card (props: CardPropsType) {
    return (
        <StyledCard>
            <StyledImg src={props.src} alt="Images"/>
            <section>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <ul>
                    <li><StyledBtn>See more</StyledBtn></li>
                    <li><SaveBtn>Save</SaveBtn></li>
                </ul>
            </section>
        </StyledCard>  
    )
}



