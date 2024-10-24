import { create } from "zustand";
import axios from "axios";
// import { menusEndPoint } from "../shared/endPoints";

interface PageStore {
    page: number;
    count: number;
    pages: number[];
    seedPages: () => void;
    setPage: (newPage: number) => void;
    getMenusCount: () => Promise<void>; // Add getMenus function
}

export const usePageStore = create<PageStore>((set, get) => ({
    page: 1,
    count: 0,
    pages: [],
    seedPages: () => {
        const { count, page, pages } = get();
        const totalPages = Math.ceil(count / 10);
        if (page <= 10) {
            const pageArr = Array.from({length : (totalPages > 10 ) ? 10 : totalPages},(_,i)=> i + 1)
            set({ pages: pageArr});
            return;
        }
        // Updated logic for when page is greater than 10
        if (page > 10) {
            const startPage = Math.max(page - 4, 1); // Show 5 pages including the current page
            const endPage = Math.min(startPage + 9, totalPages); // Ensure we don't exceed total pages
            set({ pages: Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i) });
            return;
        }
        console.log(pages);
    },
    setPage: (newPage) => {
        set({ page: newPage })
        get().seedPages()
    },
    getMenusCount: async () => {
        try {
            const response = await axios.get('/api/menus/count');
            
            set({ count: response.data.itemCount });
            get().seedPages()
            return response.data.count;
        } catch (e) {
            console.log("error in getMenus", e);
        }
    },
}));
