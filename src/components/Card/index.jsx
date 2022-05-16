import { useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import Button from "../Button";
import ModalSong from "../ModalSong";
import { Container } from "./styles";


const Card = ({albums, loadAlbum}) => {

    useEffect(() => {
        loadAlbum();
    }, [])

    const handleDeletedAlbum = async (id) => {

        await api.delete(`album/${id}`, {
            headers: {
                Authorization: 'jpss7693@gmail.com'
            }
        })
        .then((_) => loadAlbum())
        .catch((_) => toast.error("Erro ao excluir um álbum!"))
    }



    const handleDeletedTrack = async (id) => {

        await api.delete(`track/${id}`, {
            headers: {
                Authorization: 'jpss7693@gmail.com'
            }
        })
        .then((_) => loadAlbum())
        .catch((_) => toast.error("Erro ao excluir uma música!"))
    }



    return (
        <Container>
            { albums.map((album) => (
                <div
                    className="album"
                    key={album.id}
                >
                <span>Álbum: {album.name}, {album.year}</span>
                    { album.tracks.map((track) => (
                        <div key={track.id} className="track">
                        <p>Nº <br></br> {track.number}</p>
                        <p>Faixa <br></br> {track.title}</p>
                        <p>Duração <br></br> {track.duration}</p>
                            <button onClick={() => handleDeletedTrack(track.id)}>Excluir Música</button>
                        </div>
                    ))}
                    <div className="box-btn">
                        <ModalSong loadAlbum={loadAlbum} idAlbum={album.id}/>
                        <Button onClick={() => handleDeletedAlbum(album.id)} >Excluir Álbum</Button>
                    </div>
                </div>
            ))}
        </Container>
    )
}

export default Card;