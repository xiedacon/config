// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: "'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'",

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#282c34',

    // border color (window, tabs)
    borderColor: '#333',

    // custom CSS to embed in the main window
    css: `
      .header_windowHeader {
        background-color: #21252b;
        border-color: #181a1f !important;
      }
      .tabs_nav {
        background-color: rgb(33, 37, 43);
        font-size: 13px;
      }
      .tabs_nav .tab_tab {
        border-color: #181a1f !important;
      }
      .tabs_nav .tab_tab .tab_text {
        color: rgba(255, 255, 255, 0.5);
      }
      .tabs_nav .tab_tab.tab_active {
        background-color: rgb(44, 49, 58);
        border-bottom-width: 1px;
      }
      .tabs_nav .tab_tab.tab_active .tab_text {
        color: #fff;
      }

      .terms_terms {
        background-color: #282c34;
        box-shadow: #000000 0 6px 6px -6px inset;
      }
      .xterm-rows .terminal-cursor {
        position: relative;
        z-index: 1;
        background-color: #fff !important;
        outline: none !important;
      }
      .xterm-rows .terminal-cursor::after{
        content: '';
        position: absolute;
        width: 1000rem;
        height: 100%;
        transform: translate(-50%,0);
        opacity: 0.05;
        background: #fff;
      }
      .terminal:not(.focus) .terminal-cursor {
        color: initial;
      }
      .terminal .xterm-selection div {
        background-color: rgba(62, 68, 81, 0.5);
      }
      .terminal .xterm-selection {
        opacity: 1;
      }
    `,

    // custom CSS to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks and without quotes) if you're using a
    // Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 14px 12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#000000',
      red: '#ff0000',
      green: '#33ff00',
      yellow: '#ffff00',
      blue: '#0066ff',
      magenta: '#cc00ff',
      cyan: '#00ffff',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff0000',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#cc00ff',
      lightCyan: '#00ffff',
      lightWhite: '#ffffff',
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    // shell: '/usr/local/bin/fish',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    // quickEdit: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
    hypercwd: {
      initialWorkingDirectory: '~'
    },
    alternateScroll: {
      scrollSpeed: 80
    }
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    // 'hypercwd',
    // 'hyper-tab-icons',
    // 'hyper-dark-scrollbar'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
    'tab:new': 'ctrl+n',
    "tab:next": [
      "alt+right"
    ],
    "tab:prev": [
      "alt+left"
    ],
    "pane:next": "ctrl+alt+right",
    "pane:prev": "ctrl+alt+left",
    "pane:close": "ctrl+w",

    "window:devtools": "f12",
  },
};
