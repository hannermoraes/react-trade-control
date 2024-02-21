import { Header } from "@/components/Header";
import MainForm from "@/components/MainForm";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div>
        <div className="flex w-full justify-center">
          <MainForm />
        </div>
      </div>
    </div>
  );
}
