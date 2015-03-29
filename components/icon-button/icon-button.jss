module.exports = {
  ".icon-button": {
    "display": "inline-block",
    "box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    "user-select": "none",
    "-moz-user-select": "none",
    "-webkit-user-select": "none",
    "border-radius": "2px",
    "padding": "7px",
    "margin": "2px",
    "vertical-align": "middle",
    "font-size": "1rem",
    "cursor": "pointer"
  },
  ".icon-button[disabled]": {
    "opacity": "0.6",
    "pointer-events": "none"
  },
  ".icon-button.outline": {
    "box-shadow": "0 0 0 1px rgba(0, 0, 0, 0.1)"
  },
  ".icon-button:hover:not([disabled])": {
    "box-shadow": "0 1px 0 0 rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.1)"
  },
  ".icon-button.selected:not([disabled])": {
    "background-color": "rgba(0, 0, 0, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.12)"
  },
  ".icon-button:active:not([disabled]), .icon-button.selected:active:not([disabled])": {
    "background-color": "rgba(0, 0, 0, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.12)"
  },
  ".icon-button.dark-theme.outline": {
    "background-color": "rgba(200, 200, 200, 0.05)",
    "box-shadow": "0 0 0 1px rgba(200, 200, 200, 0.1)"
  },
  ".icon-button.dark-theme:hover": {
    "background-color": "rgba(200, 200, 200, 0.05)",
    "box-shadow": "0 1px 0 0 rgba(200, 200, 200, 0.12), 0 0 0 1px rgba(200, 200, 200, 0.1)"
  },
  ".icon-button.dark-theme.selected": {
    "background-color": "rgba(220, 220, 220, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(200, 200, 200, 0.05), 0 0 0 1px rgba(200, 200, 200, 0.12)"
  },
  ".icon-button.dark-theme:active, .icon-button.dark-theme.selected:active": {
    "background-color": "rgba(200, 200, 200, 0.05)",
    "box-shadow": "inset 0 1px 0 0 rgba(200, 200, 200, 0.1), 0 0 0 1px rgba(200, 200, 200, 0.12)"
  },
  ".icon-button .icon": {
    "pointer-events": "none"
  }
};
