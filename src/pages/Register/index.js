import { useState } from 'react';
import categories from '../../json/categories.json';

function Register() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [actor, setActor] = useState("");
    const [category, setCategory] = useState("");
    const [duration, setDuration] = useState("");
    const [videos, setVideos] = useState("");
    const [message, setMessage] = useState("");

    function onSubmit(e) {
        e.preventDefault(); // evita que a pagina rendenize

        if (validadForm()) {
            const newVideo = {
                id: address.substring(32, 43),
                titulo: name,
                quemPostou: actor,
                categoria: category,
                duracao: duration
            };

            setVideos([...videos, newVideo]);
            saveLocaL(newVideo);
            resetForm();
            setMessage("Sucesso: Video criado com sucesso");
        }
    }

    function validadForm() {
        if (name === "") {
            setMessage("ERRO: Preencha o campo NOME DO FILME");
            return false;
        } else if (address === "" || validateUrl()) {
            setMessage("ERRO: Preencha o campo ENDEREÇO corretamente");
            return false;
        } else if (actor === "") {
            setMessage("ERRO: Preencha o campo CRIADOR DE CONTEÚDO");
            return false;
        } else if (category === "") {
            setMessage("ERRO: Selecione uma CATEGORIA");
            return false;
        } else if (duration === "") {
            setMessage("ERRO: Preencha o campo DURAÇÃO DO FILME");
            return false;
        } else return true;
    }

    function validateUrl() {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
        return regex.test(address);
    }

    function saveLocaL(newVideo) {
        localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));
    }

    function resetForm() {
        setName("");
        setAddress("");
        setActor("");
        setCategory("");
        setDuration("");
        setMessage("");
    }

    return (
        <section className="flex flex-col m-auto w-full max-w-[1280px]">
            <h2 className="opacity-60 font-bold text-3xl m-8">Cadastrar filme</h2>

            <p className='text-sm mx-8'>{message}</p>

            <form onSubmit={onSubmit}>
                <div className="form-group w-full">
                    <label>Nome do filme</label>
                    <input
                        type="text"
                        placeholder="Curso de React JS"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </div>

                <div className="form-group w-full">
                    <label>Endereço</label>
                    <input
                        type="text"
                        placeholder="https://www.youtube.com"
                        value={address}
                        onChange={e => setAddress(e.target.value)} />
                </div>

                <div className="form-group w-2/4">
                    <label>Criador de conteúdo</label>
                    <input
                        type="text"
                        placeholder="Professor Edson Maia"
                        value={actor}
                        onChange={e => setActor(e.target.value)} />
                </div>

                <div className="form-group w-1/4">
                    <label>Categoria</label>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)} >
                        <option value="0" >Selecione</option>
                        {categories.map(item => {
                            return <option value={item} key={item}>{item}</option>
                        })}
                    </select>
                </div>

                <div className="form-group flex-1">
                    <label>Duração do filme</label>
                    <input
                        type="text"
                        placeholder="14:35"
                        value={duration}
                        onChange={e => setDuration(e.target.value)} />
                </div>

                <div className='w-full flex gap-8 justify-end items-center'>
                    <button type="button" onClick={resetForm}>Limpar</button>

                    <button>Cadastrar</button>
                </div>
            </form>
        </section >
    );
}

export default Register;