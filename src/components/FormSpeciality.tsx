import React from "react";

export default function FormSpeciality({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 p-6 rounded shadow-lg relative">
                {/* Botón para cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    ✖
                </button>
                {/* Contenido del modal */}
                {children}
            </div>
        </div>
    );
}
