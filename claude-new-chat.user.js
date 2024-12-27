// ==UserScript==
// @name        Claude.ai New Tab Shortcut
// @namespace   mbacalan
// @match       https://claude.ai/*
// @grant       none
// @version     1.0
// @author      mbacalan
// @description Create new chat in claude.ai using CTRL/CMD + Shift + C
// @license     MIT
// @homepage    https://github.com/mbacalan/claude-new-chat
// @homepageURL https://github.com/mbacalan/claude-new-chat
// @source      github:mbacalan/claude-new-chat
// @supportURL  https://github.com/mbacalan/claude-new-chat/issues
// ==/UserScript==

document.addEventListener('keydown', function(e) {
  // CTRL/CMD + Shift + C
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key == 'C') {
    e.preventDefault()
    window.location.href = 'https://claude.ai/new'
  }
})
