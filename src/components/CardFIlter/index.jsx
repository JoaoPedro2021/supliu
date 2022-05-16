import { Container } from "./styles";

const CardFilter = ({albums, loadAlbum}) => {

    

    return (
        <Container>
            { albums.map((album) => (
                <div
                    className="album"
                    key={album.id}
                >
                <span>Álbum: {album.name}, {album.year}</span>
                    {album.tracks.map((track) => (
                        <div key={track.id} className="track">
                        <p>Nº <br></br> {track.number}</p>
                        <p>Faixa <br></br> {track.title}</p>
                        <p>Duração <br></br> {track.duration}</p>
                        </div>
                    ))}
                </div>
            ))}
        </Container>
    )
}

export default CardFilter;