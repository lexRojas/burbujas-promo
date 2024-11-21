"use client";

import { Button, Card, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import BubbleAnimation from "../../../components/BurbujaPuntos";
import { getSaldoPuntosUser } from "../lib/data";
import { useRouter } from "next/navigation";


export default function Component() {
    const [openModal, setOpenModal] = useState(true);
    const [verAnimacion, setVerAnimacion] = useState(false);
    const [verCaraTriste, setCaraTriste] = useState(false);

    const [cedula, setCedula] = useState('');
    const [puntos, setPuntos] = useState(0);


    const navegate = useRouter()


    function onCloseModal() {
        setOpenModal(false);
        setCedula('');
    }

    const processUserData = (): void => {

        console.log("renderizar puntos")
        setOpenModal(false);

        const n_cedula = Number(cedula).valueOf()

        getSaldoPuntosUser(n_cedula).then((res) => {

            if (res && res.length > 0) {

                setPuntos(res[0].saldo!)
                setVerAnimacion(true)
                setCaraTriste(false)

            } else {


                setPuntos(0)
                setVerAnimacion(false)
                setCaraTriste(true)

            }

        })

    }

    const VolverConsultar = () => {
        setVerAnimacion(false)
        setCaraTriste(false)
        setOpenModal(true)
    }


    return (
        <>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />

                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Digite su cédula o pin</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="cedula" value="Cédula: (pin)" />
                            </div>
                            <TextInput
                                id="cedula"
                                placeholder="109990999"
                                value={cedula}
                                onChange={(event) => setCedula(event.target.value)}
                                required
                                type="number"
                            />
                        </div>
                        <div >
                            <Button
                                className="w-full"
                                onClick={() => processUserData()}
                            >Aceptar</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Card className=" w-72 h-auto  max-w-sm">

                {verAnimacion && <BubbleAnimation puntos={puntos} />}

                {verCaraTriste && <>
                    <p className="mx-auto font-bold text-red-600  pb-3  animate-bounce ">No tienes puntos</p>
                    <video loop autoPlay>
                        <source src='/media/emojis_llorando.mp4' type="video/mp4" />
                    </video>
                </>}

                <Button className="" onClick={() => VolverConsultar()}> Volver a Consultar</Button>
                <Button className="" onClick={() => navegate.push("/")}> Regresar</Button>
            </Card>










        </>
    );
}
