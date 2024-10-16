// Show/hide debug messages
const DEBUG = false;

// Virtual analog deadzone
const DEADZONE = 2; // vmin

// Face buttons angle
const GAMEBOY_LAYOUT = true;

// Emulation screen
const EMULATION_SCREEN = "emu-screen";
const EMULATION_DISPLAY = "emu-canvas";
const PIXEL_MODE = "SQUARE";  // use "NTSC" for 8:7 pixel aspect ratio.
const MAX_SCREEN_SCALE = 3;
const OVERSCAN_TOP = 0;
const OVERSCAN_BOTTOM = 0;

// Emulation settings
const SYSTEM = "nes";
// const EMULATOR = "jsnes";
const EMULATOR = "binjnes";
const DEFAULT_ROM = "roms/RoadFighter2000.nes";

// User experience
const SINGLE_ROM = true;
const SAVE_STATES = true;
const INPUT_RECORDER = true;

// Owner info
const HOMEPAGE = "https://www.teamdao.org/";
const ABOUT = (`
    Follow us:<br/>
    <a href="${HOMEPAGE}" target="_blank">
    <font color="yellow">TeamDAO</font>
    </a>
`);
