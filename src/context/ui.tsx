import React from 'react';

interface UIContextState {
  sceneLoaded: boolean;
  desktopViewToggled: boolean;
  spotifyPlayerShowed: boolean;
  loadScene: () => void;
  toggleDesktopView: () => void;
  showSpotifyPlayer: () => void;
}

const defaultState: UIContextState = {
  sceneLoaded: false,
  desktopViewToggled: false,
  spotifyPlayerShowed: false,
  loadScene: () => {},
  toggleDesktopView: () => {},
  showSpotifyPlayer: () => {}
};

const UIContext = React.createContext(defaultState);

class UIProvider extends React.Component<{ children: React.ReactNode }> {
  state = {
    sceneLoaded: false,
    desktopViewToggled: false,
    spotifyPlayerShowed: false
  };

  loadScene = () => {
    this.setState({
      sceneLoaded: !this.state.sceneLoaded,
      desktopViewToggled: false,
      spotifyPlayerShowed: false
    });
  };

  toggleDesktopView = () => {
    this.setState({
      sceneLoaded: false,
      desktopViewToggled: !this.state.desktopViewToggled,
      spotifyPlayerShowed: false
    });
  };

  showSpotifyPlayer = () => {
    this.setState({
      sceneLoaded: false,
      desktopViewToggled: false,
      spotifyPlayerShowed: !this.state.spotifyPlayerShowed
    });
  };

  render() {
    return (
      <UIContext.Provider
        value={{
          sceneLoaded: this.state.sceneLoaded,
          desktopViewToggled: this.state.desktopViewToggled,
          spotifyPlayerShowed: this.state.spotifyPlayerShowed,
          loadScene: this.loadScene,
          toggleDesktopView: this.toggleDesktopView,
          showSpotifyPlayer: this.showSpotifyPlayer
        }}
      >
        {this.props.children}
      </UIContext.Provider>
    );
  }
}

export default UIContext;

export { UIProvider };
