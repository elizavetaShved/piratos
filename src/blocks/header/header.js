import { SideBar } from "../side-bar/side-bar";

new class Header {
  burgerBtn;
  sideBarClass;

  constructor() {
    const hostRef = document.getElementById("header");
    if (!hostRef) return;

    this.burgerBtn = hostRef.querySelector("#btn-burger");
    let isOpenSideBar;

    this.burgerBtn.onclick = () => {
      if (isOpenSideBar) {
        this.onCloseSideBar();
      } else  {
        this.onOpenSideBar();
      }

      isOpenSideBar = !isOpenSideBar;
    }
  }

  onCloseSideBar() {
    this.burgerBtn.classList.remove("mod-close");
    this.sideBarClass.onClose();
  }

  onOpenSideBar() {
    this.burgerBtn.classList.add("mod-close");
    if (!this.sideBarClass) {
      this.sideBarClass = new SideBar();
    }
    this.sideBarClass.onOpen();
  }
}
