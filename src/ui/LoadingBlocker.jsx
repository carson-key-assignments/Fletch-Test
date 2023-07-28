// Packages
import React from 'react';

function LoadingBlocker() {
    return (
        <div className="bg-slate-600 w-screen h-screen flex justify-center flex-col">
            <div className="mx-auto w-fit">
                <div className="animate-spin w-20 h-20 border-8 rounded-full border-slate-400 border-b-zinc-700" />
            </div>
        </div>
    );
}

export default LoadingBlocker;
