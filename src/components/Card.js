import './Main.css';

function Card({name, company, avatar_url}) {
    return (
        <div className="github-profile">
            <img src={avatar_url} alt='user avatar'/>
            <div className="info">
                <div className="name">{name}</div>
                <div className="company">{company}</div>
            </div>
        </div>
    );
}

export default Card;