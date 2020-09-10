var fs = require("fs");
const {
  remote,
  ipcRenderer
} = require('electron')
const Store = require('electron-store');
const store = new Store();
WIN = remote.getCurrentWindow();

//This recieves messages from the menu or prefs window, passed through the main process
ipcRenderer.on('secondaryPrefsUpdate', (event) => secondaryPrefsUpdate());
ipcRenderer.on('accentPrefsUpdate', (event) => accentPrefsUpdate());
ipcRenderer.on('primaryPrefsUpdate', (event) => primaryPrefsUpdate());
ipcRenderer.on('textPrefsUpdate', (event) => textPrefsUpdate());
ipcRenderer.on('scrollbarWidthPrefsUpdate', (event) => scrollbarWidthPrefsUpdate());
ipcRenderer.on('scrollbarThumbColorPrefsUpdate', (event) => scrollbarThumbColorPrefsUpdate());
ipcRenderer.on('scrollbarBackgroundColorPrefsUpdate', (event) => scrollbarBackgroundColorPrefsUpdate());
ipcRenderer.on('fontSizePrefsUpdate', (event) => fontSizePrefsUpdate());
ipcRenderer.on('fontFamilyPrefsUpdate', (event) => fontFamilyPrefsUpdate());
ipcRenderer.on('insertDate', (event) => insertDate());
ipcRenderer.on('insertDateAndTime', (event) => insertDateAndTime());

//This sets default preference values if none are already present
if (!store.get('suregion')) {store.set('suregion', 'en-AU')}
if (!store.get('primaryColor')) {store.set('primaryColor', '#1A1A1A')}
if (!store.get('secondaryColor')) {store.set('secondaryColor', '#242424')}
if (!store.get('accentColor')) {store.set('accentColor', '#8100EB')}
if (!store.get('textColor')) {store.set('textColor', '#FFFFFF')}
if (!store.get('scrollbarBackgroundColor')) {store.set('storeScrollbarBackgroundColor', '#0A0A0A')}
if (!store.get('scrollbarThumbColor')) {store.set('storeScrollbarThumbColor', '#8100EB')}
if (!store.get('scrollbarWidth')) {store.set('storeScrollbarWidth', '8')}
if (!store.get('fontSize')) {store.set('storeFontSize', '14')}
if (!store.get('fontFamily')) {store.set('storeFontFamily', 'Monospace')}

//This sets document styles based on user preferences 
document.documentElement.style.setProperty('--primary', store.get('primaryColor'));
document.documentElement.style.setProperty('--secondary', store.get('secondaryColor'));
document.documentElement.style.setProperty('--accent', store.get('accentColor'));
document.documentElement.style.setProperty('--text', store.get('textColor'));
document.documentElement.style.setProperty('--scrollbarBackgroundColor', store.get('storeScrollbarBackgroundColor'));
document.documentElement.style.setProperty('--scrollbarThumbColor', store.get('storeScrollbarThumbColor'));
document.documentElement.style.setProperty('--scrollbarWidth', store.get('storeScrollbarWidth'));
document.documentElement.style.setProperty('--fontSize', store.get('storeFontSize'));
document.documentElement.style.setProperty('--fontFamily', store.get('storeFontFamily'));

window.$ = window.jQuery = require('jquery');


//this handles communication with other processes and windows
function secondaryPrefsUpdate() {
  console.log(store.get('secondaryColor'));
  document.documentElement.style.setProperty('--secondary', store.get('secondaryColor'));
};
function primaryPrefsUpdate() {
  console.log(store.get('primaryColor'));
  document.documentElement.style.setProperty('--primary', store.get('primaryColor'));
};
function accentPrefsUpdate() {
  console.log(store.get('accentColor'));
  document.documentElement.style.setProperty('--accent', store.get('accentColor'));
};
function textPrefsUpdate() {
  console.log(store.get('textColor'));
  document.documentElement.style.setProperty('--text', store.get('textColor'));
};
function scrollbarWidthPrefsUpdate() {
  console.log(store.get('storeScrollbarWidth'));
  document.documentElement.style.setProperty('--scrollbarWidth', store.get('storeScrollbarWidth'));
};
function scrollbarThumbColorPrefsUpdate() {
  console.log(store.get('storeScrollbarThumbColor'));
  document.documentElement.style.setProperty('--scrollbarThumbColor', store.get('storeScrollbarThumbColor'));
};
function scrollbarBackgroundColorPrefsUpdate() {
  console.log(store.get('storeScrollbarBackgroundColor'));
  document.documentElement.style.setProperty('--scrollbarBackgroundColor', store.get('storeScrollbarBackgroundColor'));
};
function fontSizePrefsUpdate() {
  console.log(store.get('storeFontSize'));
  document.documentElement.style.setProperty('--fontSize', store.get('storeFontSize'));
};
function fontFamilyPrefsUpdate() {
  console.log(store.get('storeFontFamily'));
  document.documentElement.style.setProperty('--fontFamily', store.get('storeFontFamily'));
};
