import { NextUIProvider } from "@nextui-org/system";
import { Link } from "react-router-dom";
export default function IndexPage() {
    return (
        <NextUIProvider>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <h1>CRUDs Realizados por:</h1>
                <h2>
                    <b>Cabezas Nina Javier</b>
                </h2>
                <div className="flex space-x-4">
                  <Link to="/schedules">
                    <button className="bg-blue-500 text-white p-2 rounded">
                        Horarios
                    </button>
                  </Link>
                  <Link to="/speciality">
                    <button className="bg-green-500 text-white p-2 rounded">
                        Especialidades
                    </button>
                  </Link>
                </div>
            </section>
        </NextUIProvider>
    );
}
