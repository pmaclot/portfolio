import React from 'react';

interface RoomContextState {
  desktopView: boolean;
  spotifyPlayer: boolean;
  toggleDesktopView: () => void;
  toggleSpotifyPlayer: () => void;
}

const defaultState: RoomContextState = {
  desktopView: false,
  spotifyPlayer: false,
  toggleDesktopView: () => {},
  toggleSpotifyPlayer: () => {}
};

const RoomContext = React.createContext(defaultState);

class RoomProvider extends React.Component<{ children: React.ReactNode }> {
  state = {
    desktopView: false,
    spotifyPlayer: false
  };

  toggleDesktopView = () => {
    let desktopView = !this.state.desktopView;
    let spotifyPlayer = false;

    this.setState({ desktopView, spotifyPlayer });
  };

  toggleSpotifyPlayer = () => {
    let desktopView = false;
    let spotifyPlayer = !this.state.spotifyPlayer;

    this.setState({ desktopView, spotifyPlayer });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          desktopView: this.state.desktopView,
          spotifyPlayer: this.state.spotifyPlayer,
          toggleDesktopView: this.toggleDesktopView,
          toggleSpotifyPlayer: this.toggleSpotifyPlayer
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomContext;

export { RoomProvider };
