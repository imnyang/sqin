import SideBar from "@/components/SideBar";
import TableComponent from "@/components/table";

export default function Time() {
    return(
        <main
            className="flex flex-row items-center justify-center w-[100vw] h-[100vh]"
        >
            <SideBar />
            <div className="flex flex-col items-center justify-center w-[90vw] h-[100vh]"><div className="w-[50%] flex-row items-center justify-center"><TableComponent /></div></div>
            
        </main>
    )
}