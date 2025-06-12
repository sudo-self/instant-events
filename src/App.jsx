/* App.css */

:root {
  --primary-color: #646cff;
  --primary-hover: #535bf2;
  --success-color: #4ade80;
  --error-color: #f87171;
  --text-color: rgba(255, 255, 255, 0.87);
  --text-color-light: #213547;
  --bg-color: #242424;
  --bg-color-light: #ffffff;
  --card-bg: #1a1a1a;
  --card-bg-light: #f9f9f9;
  --border-color: #444;
  --border-color-light: #e5e7eb;
  --input-bg: #2d2d2d;
  --input-bg-light: #ffffff;
  --link-color: #aab2c8;
  --label-color: #e8eaed;
  --label-color-light: #333333;
  --placeholder-color: #a0a0a0;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  input {
    color: var(--text-color) !important;
  }

  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: var(--text-color);
  background-color: var(--bg-color);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media (prefers-color-scheme: light) {
  :root {
    color: var(--text-color-light);
    background-color: var(--bg-color-light);
    --card-bg: var(--card-bg-light);
    --border-color: var(--border-color-light);
    --input-bg: var(--input-bg-light);
    --link-color: #666666;
    --label-color: var(--label-color-light);
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: inherit;
}

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-family: inherit;
  background-color: var(--bg-color);
  color: var(--text-color);
}

#root {
  width: 100%;
  max-width: 700px;
}

a {
  text-decoration: none;
  color: grey;
  transition: text-decoration 0.3s ease;
}

a:hover {
  text-decoration: underline;
}


.app-container {
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow);
  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 600px;
  font-family: inherit;
}

.app-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.app-header h1 {
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary-color), #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.app-header .subtitle {
  color: #6f7171;
  opacity: 0.8;
  font-size: 1rem;
}

/* Form Styles */



.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: inherit;
}

.form-group label {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--label-color);
  display: block;
  margin-bottom: 0.25rem;
  font-family: inherit;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--input-bg);
  color: #ffffff;;
  font-size: 1rem;
  transition: all 0.2s;
  font-family: inherit;
  text: #000000;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.2);
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}


::placeholder {
  color: var(--placeholder-color);
  opacity: 0.7;
  font-family: inherit;
}


.res {
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-color);
}


.datetime-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}


.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

button {
  flex: 1;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
  font-size: 1rem;
  border: none;
}


.download-button:hover {
  background-color: #ffffff ;
  transform: translateY(-1px);
}


.button-85 {
  background-color: #4285F4;
  color: white;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0, 2px 2px 0, 3px 3px 0, 4px 4px 0, 5px 5px 0;
  position: relative;
  user-select: none;
  touch-action: manipulation;
}

.button-85:active {
  box-shadow: none;
  top: 5px;
  left: 5px;
}


.message {
  padding: 0.8rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
}

.error {
  background-color: rgba(248, 113, 113, 0.1);
  color: var(--error-color);
  border: 1px solid rgba(248, 113, 113, 0.2);
}

.success {
  background-color: rgba(74, 222, 128, 0.1);
  color: var(--success-color);
  border: 1px solid rgba(74, 222, 128, 0.2);
}


.column-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: inherit;
}


.icon-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.footer-link {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  color: var(--link-color);
  background: rgba(255, 255, 255, 0.8);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-family: inherit;
}

.footer-link a {
  color: var(--link-color);
  text-decoration: none;
}

.footer-link a:hover {
  text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
  .footer-link {
    background: rgba(0, 0, 0, 0.6);
  }
}


@media (max-width: 768px) {
  .app-container {
    padding: 1.5rem;
    min-height: auto;
  }

  .datetime-group {
    grid-template-columns: 1fr;
  }

  .button-group {
    flex-direction: column;
  }

  .app-header h1 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  body {
    padding: 0.75rem;
  }

  .app-container {
    padding: 1.25rem;
  }

  .button-85 {
    padding: 0.5rem;
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .button-85 {
    padding: 0.5rem 1rem;
  }
}



@property --blue-x {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --blue-y {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --purple-x {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --purple-y {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --red-x {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --red-y {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --orange-x {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --orange-y {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --green-x {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --green-y {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --yellow-x {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

@property --yellow-y {
    syntax: "<percentage>";
    initial-value: 50%;
    inherits: false;
}

button {
    padding: 1rem 4rem;
    font-size: 1rem;
    border: none;
    border-radius: 999px;
    position: relative;
    color: white;
    background: black;
    isolate: isolate;
    overflow: clip;
    z-index: 0;

    &:hover {
        --after-opacity: 1;
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -2;
        border-radius: inhert;
        background-image: radial-gradient(
                circle at var(--blue-x, 50%) var(--blue-y, 50%),
                #18346d 5%,
                transparent 30%
            ),
            radial-gradient(
                circle at var(--purple-x, 50%) var(--purple-y, 50%),
                purple 5%,
                transparent 30%
            ),
            radial-gradient(
                circle at var(--red-x, 50%) var(--red-y, 50%),
                red 5%,
                transparent 30%
            ),
            radial-gradient(
                circle at var(--orange-x, 50%) var(--orange-y, 50%),
                orange 5%,
                transparent 30%
            ),
            radial-gradient(
                circle at var(--green-x, 50%) var(--green-y, 50%),
                green 5%,
                transparent 30%
            ),
            radial-gradient(
                circle at var(--yellow-x, 50%) var(--yellow-y, 50%),
                yellow 5%,
                transparent 30%
            );
        background-size: 200% 200%;
        background-repeat: no-repeat;
        animation: moveGradients 10s linear infinite;
    }
    &::after {
        content: "";
        position: absolute;
        inset: 2px;
        border-radius: inherit;
        background: black;
        z-index: -1;
        backdrop-filter: blur(var(--after-blur, 3px));
        transition: opacity 500ms ease-in-out;
        opacity: var(--after-opacity, 0);
    }
}

@keyframes moveGradients {
    0%,
    100% {
        --blue-x: -40%;
        --blue-y: 35%;
        --purple-x: 35%;
        --purple-y: -10%;
        --red-x: -10%;
        --red-y: -80%;
        --orange-x: 50%;
        --orange-y: 145%;
        --green-x: 0%;
        --green-y: 80%;
        --yellow-x: 35%;
        --yellow-y: 95%;
    }
    25% {
        --blue-x: 30%;
        --blue-y: -25%;
        --purple-x: 5%;
        --purple-y: 40%;
        --red-x: 45%;
        --red-y: 150%;
        --orange-x: -15%;
        --orange-y: 30%;
        --green-x: 45%;
        --green-y: 15%;
        --yellow-x: -20%;
        --yellow-y: -40%;
    }
    50% {
        --blue-x: 70%;
        --blue-y: 50%;
        --purple-x: 50%;
        --purple-y: 120%;
        --red-x: 35%;
        --red-y: -80%;
        --orange-x: 75%;
        --orange-y: -75%;
        --green-x: 45%;
        --green-y: 100%;
        --yellow-x: 50%;
        --yellow-y: -20%;
    }
    75% {
        --blue-x: -25%;
        --blue-y: 10%;
        --purple-x: 35%;
        --purple-y: -45%;
        --red-x: -10%;
        --red-y: 30%;
        --orange-x: 20%;
        --orange-y: -40%;
        --green-x: -15%;
        --green-y: 50%;
        --yellow-x: 45%;
        --yellow-y: -15%;
    }
}

.google-button {
  background-color: #4285F4;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;
}

.google-button:hover {
  background-color: #3367D6;
  transform: translateY(-1px);
}


.share-options-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.share-options-content {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.share-options-content h3 {
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-color);
}

.share-options-content button {
  padding: 0.75rem;
  border-radius: 8px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.share-options-content button:hover {
  background-color: var(--primary-hover);
  transform: translateY(-1px);
}

.share-options-content button:last-child {
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);
  margin-top: 1rem;
}

.share-options-content button:last-child:hover {
  background-color: rgba(255, 255, 255, 0.1);
}


.button-icon {
  width: 20px;
  height: 20px;
}


@media (max-width: 480px) {
  .share-options-content {
    padding: 1.5rem;
  }
  
  .share-options-content button {
    padding: 0.65rem;
  }
}


.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
}

.button-group button {
  min-width: 120px;
  flex: 1 1 auto;
}


@media (prefers-color-scheme: light) {
  .share-options-content {
    background-color: var(--card-bg-light);
  }
  
  .share-options-content h3 {
    color: var(--text-color-light);
  }
  
  .share-options-content button:last-child {
    color: var(--text-color-light);
    border-color: var(--border-color-light);
  }
}

