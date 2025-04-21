import React from 'react';

interface UIContextState {
  sceneLoaded: boolean;
  monitorViewToggled: boolean;
  spotifyPlayerToggled: boolean;
  loadScene: () => void;
  toggleMonitorView: () => void;
  toggleSpotifyPlayer: () => void;
}

const defaultState: UIContextState = {
  sceneLoaded: false,
  monitorViewToggled: false,
  spotifyPlayerToggled: false,
  loadScene: () => {},
  toggleMonitorView: () => {},
  toggleSpotifyPlayer: () => {}
};

const UIContext = React.createContext(defaultState);

class UIProvider extends React.Component<{ children: React.ReactNode }> {
  state = {
    sceneLoaded: false,
    monitorViewToggled: false,
    spotifyPlayerToggled: false
  };

  loadScene = () => {
    this.setState({
      sceneLoaded: true,
      monitorViewToggled: false,
      spotifyPlayerToggled: false
    });
  };

  toggleMonitorView = () => {
    this.setState({
      sceneLoaded: this.state.sceneLoaded,
      monitorViewToggled: !this.state.monitorViewToggled,
      spotifyPlayerToggled: false
    });
  };

  toggleSpotifyPlayer = () => {
    this.setState({
      sceneLoaded: this.state.sceneLoaded,
      monitorViewToggled: false,
      spotifyPlayerToggled: !this.state.spotifyPlayerToggled
    });
  };

  render() {
    return (
      <UIContext.Provider
        value={{
          sceneLoaded: this.state.sceneLoaded,
          monitorViewToggled: this.state.monitorViewToggled,
          spotifyPlayerToggled: this.state.spotifyPlayerToggled,
          loadScene: this.loadScene,
          toggleMonitorView: this.toggleMonitorView,
          toggleSpotifyPlayer: this.toggleSpotifyPlayer
        }}
      >
        {this.props.children}
      </UIContext.Provider>
    );
  }
}

export default UIContext;

export { UIProvider };
