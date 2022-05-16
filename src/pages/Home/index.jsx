import { useState, useEffect } from "react";
import { Container, Box, BoxBtn } from "./styles";
import logo from "../../assets/logo.png"
import { toast } from "react-toastify";
import api from "../../service/api";
import Card from "../../components/Card";
import CardFilter from "../../components/CardFIlter";
import Button from "../../components/Button";
import ModalAlbum from "../../components/ModalAlbum";

const Home = () => {

    const [ albums, setAlbums ] = useState([]);
    const [ filtro, setFiltro ] = useState("");
    const [ albumFiltrado, setAlbumFiltrado ] = useState([]);
    const [ filtered, setFiltered ] = useState(true);

    const [albumsPerPage, setAlbumsPerPage] = useState(2);
    const [ currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(albums.length / albumsPerPage);
    const startIndex = currentPage * albumsPerPage;
    const endIndex = startIndex + albumsPerPage;
    const currentAlbum = albums.slice(startIndex, endIndex);

    const loadAlbum = async () => {
        await api.get('album', {
            headers: {
                Authorization: "jpss7693@gmail.com"
            }
        })
        .then((response) => {
            setAlbums(response.data['data'])
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        loadAlbum();
    }, [])


    const showAlbum = () => {
        const filtered = albums.filter(album => album.name === filtro);

        if(filtered.length === 0) {
            return toast.error("Nenhum álbum encontrado!")
        }

        setFiltered(false)
        setAlbumFiltrado(filtered)

    }
    return (
        <Container>
            <Box>
                <div className="header">
                    <img src={logo} alt="tião carreiro"/>
                    <p>Discografia</p>
                </div>
                <div className="boxContainer">
                    <span>Digite uma palavra chave</span>
                    <div className="pesquisa">
                        <input 
                            placeholder="Min"
                            onChange={(e) => setFiltro(e.target.value)}
                        />
                        <Button onClick={showAlbum}>Procurar</Button>
                        <ModalAlbum loadAlbum={loadAlbum}/>
                    </div>
                    <BoxBtn>
                        {Array.from(Array(pages), (item, index) => {
                            return <button className="btnPage" value={index} onClick={(e) => setCurrentPage(Number(e.target.value)) } >{index + 1}</button>
                        })}
                    </BoxBtn>
                    
                    { filtered ? 
                        <Card albums={currentAlbum} loadAlbum={loadAlbum}/>
                        :

                        <CardFilter albums={albumFiltrado} />
                    }
                </div>
            </Box>
        </Container>
    )
}

export default Home;