import { useEffect, useRef, useState } from "react";
import Modal from "react-modal"
import socket from "../socket"
import { MdRefresh } from "react-icons/md";
import { useSearchParams } from 'react-router-dom';

const emails = [
    "aditya.kulshrestha@liftoff.club",
    "pratyush.goel@liftoff.club",
    "sanchit.mahajan@liftoff.club",
    "alok.chedambath@liftoff.club",
]

export default function RefreshButton() {
    const [modalOpen, setModalOpen] = useState(false)
    const [jobState, setJobState] = useState(null)
    
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [messages, setMessages] = useState([]);
    const [searchParams] = useSearchParams()
    const email = searchParams.get("email")

    function startJob() {
        setJobState("started")
        setTimeout(() => {
            socket.emit('refresh', { user: email })
        }, 1500)
    }

    useEffect(() => {
        function onConnect() {setIsConnected(true)}
        function onDisconnect() {setIsConnected(false)}

        function onMessage(value) {
            setMessages(previous => [...previous, value]);
        }
        
        function onStatus(value) {
            console.log(value)
            if (value.length > 0) {
                setJobState("started")
                setMessages([...value]);
            } else {
                setJobState("empty")
            }
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('message', onMessage);
        socket.on('status', onStatus);
        
        socket.connect();
        socket.emit('status', { user: email })
        
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('message', onMessage);
            socket.off('status', onStatus);
        };
    }, []);

    function RefreshModal() {
        return (
            <Modal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                className="p-6 pb-8 bg-slate-800 shadow-lg w-full max-w-lg mx-6 flex flex-col focus:outline-none rounded-lg"
                overlayClassName="flex items-center justify-center bg-black/50 backdrop-blur fixed inset-0 py-6"
            >
                {jobState == 'empty' && (
                    <>
                        <p>Refresh? It'll cost ya monies</p>
                        <p className="text-sm font-mono mt-1 opacity-80">{email}</p>
                        <button
                            className="w-max mt-3 ml-auto flex flex-row items-center justify-center h-12 bg-slate-600 rounded-full shadow-md text-white focus:outline-none text-sm space-x-1 px-5"
                            onClick={startJob}
                        >
                            <span>Confirm</span>
                        </button>
                    </>
                )}
                {jobState == 'started' && (
                    <div>
                        <div className="flex flex-row items-center">
                            <span>Job Started</span>
                            <div className={`${isConnected ? "bg-green-500" : "bg-red-600"} w-4 h-4 rounded-full ml-3`}></div>
                        </div>
                        <p className="text-sm font-mono mt-1 opacity-80">{email}</p>
                        <div className="mt-3 text-sm font-mono space-y-1">
                            {messages.map((v,i) => <p key={i}>{v}</p>)}
                            {/* <p className="bold">temp</p>
                            {tempMessages.map((v,i) => <p key={'temp'+i}>{v}</p>)} */}
                        </div>
                    </div>
                )}
            </Modal>
        )
    }

    return (
        <>
            <button
                className="flex flex-row items-center justify-center h-12 bg-slate-800 rounded-full shadow-md text-white focus:outline-none text-sm space-x-1 px-5"
                onClick={() => setModalOpen(true)}
            >
                <MdRefresh size={24} />
                <span>Refresh</span>
            </button>
            <RefreshModal />
        </>
    )
}