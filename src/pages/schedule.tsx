import TableSchedule from "@/components/TableSchedule";

function schedulePage() {
    return (
        <div className="p-4 bg-blue-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center">
                Horarios
            </h1>
            <ul className="mt-4 text-xl">
              <TableSchedule />
            </ul>
        </div>
    );
}

export default schedulePage;
