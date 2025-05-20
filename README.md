

 🎵 Pakistan Music Player

A simple and elegant web-based music player featuring patriotic Pakistani songs. Built with HTML, CSS, and JavaScript, this player showcases a responsive design and intuitive controls.

![Music Player Screenshot]!
[Screenshot 2025-05-20 094426](https://github.com/user-attachments/assets/24fb18c1-9aca-4cef-991b-d698663613c2)



 📁 Project Structure

```
├── index.html
├── style.css
├── script.js
├── playlist.js
├── images/
│   ├── image.png
│   ├── image copy.png
│   ├── image copy 2.png
│   └── pakistanbackground.jpg
├── audios/
│   ├── dildil.mp3
│   ├── isparchamkai.mp3
│   └── ayejawan.mp3
└── README.md
```

---

 🚀 Features

* **Responsive Design**: Adapts seamlessly to various screen sizes.
* **Audio Controls**: Play, pause, next, previous, shuffle, and repeat functionalities.
* **Progress Bar**: Visual representation of the current playback position.
* **Dynamic Content**: Displays song title, artist, and album art.
* **Background Image**: Aesthetic background featuring `pakistanbackground.jpg`.

---

### 🛠️ Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Laiba-Adil/pakistan-music-player.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd pakistan-music-player
   ```

3. **Open `index.html` in Your Browser**:

   * You can double-click the `index.html` file.
   * Or use a local development server:

     ```bash
     # For Python 3.x
     python -m http.server
     ```

---

 🎶 Adding New Songs

To add more songs:

1. **Place the Audio File**:

   * Add your `.mp3` file to the `audios/` directory.

2. **Add Corresponding Image**:

   * Place the album art in the `images/` directory.

3. **Update `playlist.js`**:

   ```javascript
   const songs = [
     // Existing songs...
     {
       name: "New Song Title",
       artist: "Artist Name",
       img: "new-image", // Without file extension
       audio: "new-audio" // Without file extension
     }
   ];
   ```

   Ensure that:

   * `images/new-image.png` exists.
   * `audios/new-audio.mp3` exists.


### 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### 🙏 Acknowledgments

* Inspired by the rich musical heritage of Pakistan.
* Special thanks to the artists:

  * Junaid Jamshed
  * Nayyara Noor
  * Haroon and Fakhir

