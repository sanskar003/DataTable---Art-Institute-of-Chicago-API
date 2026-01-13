
🎨 Artwork DataTable — React + PrimeReact + Server‑Side Pagination
This project implements a fully functional DataTable using React, Vite, and PrimeReact, following strict assignment requirements. It demonstrates server‑side pagination, multi‑row selection, and controlled UI behavior without storing any row objects in state.

🚀 Features
✅ Server‑Side Pagination
Data is fetched from the API using page and limit parameters. 
Only the current page’s data is loaded, ensuring efficient performance and compliance with server‑side pagination rules.
✅ Built‑In PrimeReact Checkbox Selection
The DataTable uses PrimeReact’s native checkbox column


This provides automatic checkbox rendering, tick icons, and accessibility without custom logic.
✅ Selection Persistence Across Pages (Assignment‑Safe)
The assignment prohibits storing row objects, so the solution stores only row IDs



This allows persistent selection across pages without violating assignment rules.
✅ Reconstructing Selected Rows Per Page
PrimeReact requires row objects for selection, so selected rows are reconstructed only from the current page’s data


This avoids storing rows while keeping UI selection correct.
✅ Input Box: Select N Rows
Users can type a number (N) to automatically select the first N rows on the current page. Only IDs are stored


✅ Selected Rows Counter
A simple indicator shows how many rows are selected across all pages


✅ Clean Component Structure
- DisplayDataTable.tsx — UI + selection logic
- dataTableApi.ts — API calls
- Artwork.ts — interface
- ApiResponse.ts — API response typing


🛠️ Tech Stack
- React (Vite)
- PrimeReact
- TypeScript
- Axios
- Railway (Deployment)

📦 Installation & Setup
Install dependencies
npm install


Run development server
npm run dev


Build for production
npm run build


Preview production build
npm run preview



🌐 Deployment (Railway)
The project is deployed using Railway.
Build and start commands:
npm run build
npm run start


