import React, { useState } from 'react';
import './App.css';
import background from './assets/images/Camada_1.png';
import logo from './assets/images/logo-github.png';
import searchIcon from './assets/images/search-icon.png';
import ellipseOne from './assets/images/ellipse-one.png';
import ellipseTwo from './assets/images/ellipse-two.png';
import Loading from './components/Loading';

const App = () => {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true); // Exibe o spinner
    setProfileData(null);
    setErrorMessage('');

    if (!username.trim()) {
      setErrorMessage('Por favor, insira um nome de usuário.');
      setLoading(false); // Remove o spinner
      return;
    }

    // Atraso proposital (simula 2 segundos de espera antes da requisição)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Usuário não encontrado');
      const data = await response.json();
      setProfileData({
        avatar_url: data.avatar_url,
        name: data.name || 'Nome não disponível',
        bio: data.bio || 'Bio não disponível',
      });
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage('Nenhum perfil foi encontrado com esse nome de usuário.\nTente novamente.');
      } else {
        setErrorMessage('Ocorreu um erro inesperado.');
      }

    } finally {
      setLoading(false); // Remove o spinner
    }
  };

  return (
    <div className="container-t">
      <img className="image-background" src={background} alt="imagem ilustrativa" />
      <img className="ellipse-one" src={ellipseOne}/>
      <img className="ellipse-two" src={ellipseTwo}/>
      <div className="container">
        <div className="title">
          <img src={logo} alt="GitHub logo" className="logo" />
          <p>Perfil</p> <span>GitHub</span>
        </div>
        <div className="search-box">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite um usuário do Github"
          />
          <button onClick={handleSearch}>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
        <div className="profile-container">
          {loading ? (
            <Loading />
          ) : (
            profileData && (
              <div className="profile">
                <img src={profileData.avatar_url} alt="Foto de perfil" />
                <div className="profile-info">
                  <h2>{profileData.name}</h2>
                  <p>{profileData.bio}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="error-container">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default App;