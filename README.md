# Local Playlists Player

App to manage and watch video playlists using videos from a local source. The main motivation behind it is to be able to download videos from sources like youtube and have a playlist with a "udemy" feel to watch the videos even offline.
### Description

This apps tries to leverage the new FileSystemAccess API to allow the reproduction of video playlists from a local source in the browser. The app stores the handlers of the files in IndexedDB so they can be retrieved and played even if the browser and all the sessions are closed.

The app has been made with React, there is a demo here: https://local-playlists-player.vercel.app/

Please bear in mind that the FileSystemAccess API is still a experimental feature. The app has been tested in Chrome 97.0.4692.71.

https://wicg.github.io/file-system-access/

### Usage

`npm start` to start the development server in localhost:3000   
`npm test` to run the test suite (work in progress).  
`npm run build` to get a production build.   


### Screenshots

![img](https://i.imgur.com/vyEHKvZ.jpg)

![img](https://i.imgur.com/Wdf5ojY.jpg)
### Todo

- [x] Add a test suite
- [x] Allow reordering videos using drap and drop

