import { create } from "zustand";

let sidemenoOptions = {};

interface AppState {
  isSidebarWide: boolean;
  
  updateisSidebarWide: () => void; 
  currentPage:string,
  updatePage: (newValue: string) => void;

}

const useApnaStore = create<AppState>((set) => ({
  isSidebarWide: false,
  updateisSidebarWide: () =>
    set((state) => ({ isSidebarWide: !state.isSidebarWide })),

    currentPage:"/",
    updatePage: (newValue) =>
    set((state) => ({ currentPage: newValue })),


}));

export default useApnaStore;
