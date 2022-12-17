export class SideBar {
  hostRef;

  constructor() {
    this.hostRef = document.getElementById("side-bar");
  }

  onOpen() {
    this.hostRef.classList.add("mod-show");
  }

  onClose() {
    this.hostRef.classList.remove("mod-show");
  }
}
