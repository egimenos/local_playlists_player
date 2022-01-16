# Local Playlists Player

### Description

This apps tries to leverage the new FileSystemAccess API to allow the reproduction of video playlists from a local source in the browser. The app stores the handlers of the files in IndexedDB so they can be retrieved and played even if the browser and all the sessions are closed.


The app has been made with React, there is a demo here: https://local-playlists-player.vercel.app/

Please bear in mind that the FileSystemAccess API is still a experimental feature. The app has been tested in Chrome 97.0.4692.71.

https://wicg.github.io/file-system-access/https://wicg.github.io/file-system-access/

### Usage

`npm start` to start the development server in localhost:3000
`npm test` to run the test suite (work in progress)
`npm run build` to get a production build 
