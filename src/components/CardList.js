import Card from "./Card";

function CardList({profiles}) {
    return (
        <div>
            {profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
    )
}

export default CardList;