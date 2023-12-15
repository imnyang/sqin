import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main
      className="flex flex-row items-center justify-center w-[100vw] h-[100vh]"
    >
      <SideBar/>
      <div className="flex flex-col items-center justify-center w-[90vw] h-[100vh]">
        <h1>Test Text</h1>
        대충 테이블
      </div>
      
    </main>
  )
}
