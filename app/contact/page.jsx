import Nav from "@/components/Nav";

export const metadata = {
  title: 'Contact'
}

export default function Contact(){
  return (
    <>
    <div className="nav-bg flex relative top-0 left-0 lg:h-[100px] h-16 w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
    <Nav id="contact" />
    <main className="h-screen w-full">
        <h1 className="text-4xl text-center mx-auto p-10">CONTACT US</h1>
    </main>
    </>
  );
};
