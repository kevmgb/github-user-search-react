import Card from "./Card";
import './Main.css';

function CardList({profiles}) {
    return (
        <div>
            {profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
    )
}

export default CardList;