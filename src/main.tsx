import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
/*
this object must put it in QueryClient()
{
    defaultOptions: {
        queries: {
            retry: 3, // for retry fetch data
            cacheTime: 300_000, // 5m  >> meaning : if no one use this query it will be inactive and remove from cache memo it called garbage collection
            // staleTime is most changeable  thing because some data get updated less so we should give them a higher stale time
            staleTime: 10 * 1000, //10s >> meaning : how long the data is considered fresh >> the default value is zero and it means (the moment we get data is treated as odd , so the next time we need the same data react query will refresh data from backend)
            // Auto Refresh data in react query :
            //when the network is reconnected 
            //when a component  is mounted 
           // when the window is refocused 
            refetchOnWindowFocus: false, // default  value true
            refetchOnReconnect: false,
            refetchOnMount: false,
        },
    },
}*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
