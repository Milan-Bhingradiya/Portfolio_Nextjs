import { create } from "zustand";

let sidemenoOptions = {};

interface AppState {
  isSidebarWide: boolean;

  updateisSidebarWide: () => void;
  currentPage: string,
  updatePage: (newValue: string) => void;
  

}

const useApnaStore = create<AppState>((set) => ({
  isSidebarWide: false,
  updateisSidebarWide: () =>
    set((state) => ({ isSidebarWide: !state.isSidebarWide })),

  currentPage: "/",
  updatePage: (newValue) =>
    set((state) => ({ currentPage: newValue })),

  menuOnClick: (wide: boolean): void => {
    let targetElement: any = document.getElementById("page_hold_div");
    // after close menu hight shoulf be max so i change here... inline css not possible because after some 0.5 sec we have to max hight and in inlie css instant hight is changing...
    if (wide) {
      targetElement.classList.remove("h-full");
      targetElement.classList.add("h-[100vh]");
      targetElement.classList.add("overflow-hidden");
      targetElement.classList.remove("close_page_hold_div");
      targetElement.classList.add("open_page_hold_div");
      targetElement.classList.add("blueborder");
    } else {
      targetElement.classList.remove("open_page_hold_div");
      targetElement.classList.add("close_page_hold_div");
      setTimeout(() => {
        targetElement.classList.add("h-full");
        targetElement.classList.remove("blueborder");
      }, 500);

      //0.5s beacuse closing animaiton speed is 0.5s..
    }
  }



}));

export default useApnaStore;
