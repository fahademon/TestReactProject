import React, { Fragment, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "./ui";
import { useDisclosure } from "../hooks";
import useCatStore from "@common/store/useCatStore";
import type { Breed } from "@common/types/cat.types";


export function BreedModal( cat: Breed) {
    const [isOpen, { open, close }] = useDisclosure(false) as [boolean, { open: () => void; close: () => void; toggle: () => void }];
    const saveRef = useRef<HTMLButtonElement>(null);

    // multi-step: info → form → success
    const [step, setStep] = useState<"info" | "form" | "success">("info");

    // form state
    const [adopterName, setAdopterName] = useState("");
    const [petName, setPetName] = useState("");

    // store action
    const adoptNow = useCatStore((s) => s.adoptNow);
    const [metric, metricWeight] = useState(false);
    
    function BreedInfo({ cat, metric, changeUnit }) {
        return (
      
                  <div className="h-60 flex flex-row overflow-y-auto px-4 sm:px-5">
                    <div className="w-60 h-60 px-2 py-4">
                      <img
                        src={cat.image?.url}
                        alt={cat.name}
                        className="h-full w-full object-cover rounded mb-2"
                      />
                    </div>
      
                    <div className="w-60 h-52 border rounded shadow flex-col mt-4 pe-4 sm:px-3 md:px-5 space-y-2">
                      {cat.alt_names && <p className="pt-3">Also known as: {cat.alt_names}</p>}
                      <p className={!cat.alt_names? "pt-3":""}>Breed: {cat.name}</p>
                      <p>Traits: {cat.temperament}</p>
                      <div>
                        <p>
                          Weight: {metric ? cat.weight.metric : cat.weight.imperial}{' '}
                          <u
                            className="cursor-pointer"
                            onClick={() => changeUnit()}
                          >
                            {metric ? 'kgs' : 'lbs'}
                          </u>
                        </p>
                      </div>
                      <p>Life Span: {cat.life_span} years</p>
                      <div className="grid grid-cols-1 gap-2">
                        <a className="font-bold" href={cat.wikipedia_url}>
                          Wikipedia
                        </a>
                        <a className="font-bold" href={cat.vetstreet_url}>
                          Vetstreet
                        </a>
                      </div>
                    </div>
                  </div>
      
                 
        );
      }
      

    function changeUnit(): void {
        metricWeight(!metric);
    }

    // called when user confirms
    function handleConfirm() {
        adoptNow({
            breed: cat,
            adopterName,
            adoptionDate: new Date().toISOString(),
            name: petName,
        });
        setStep("success");
    }

    // Reset on close
    function handleClose() {
        close();  
    }

    function initialize() {
        setPetName("");
        setAdopterName("");
        setStep("info");
        open();  
    }

  return (
    <>
      <Button onClick={initialize} className="mt-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" color='primary' >
        View Details
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
            as="div"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
            onClose={close}
            initialFocus={saveRef}
        >
          {/* backdrop */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </TransitionChild>

          {/* panel */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative flex w-full max-w-lg origin-top flex-col overflow-hidden 
                                    rounded-lg bg-white transition-all duration-300 dark:bg-dark-700"
            >
            <div className="flex items-center justify-between rounded-t-lg bg-gray-200 px-4 py-3 dark:bg-dark-800 sm:px-5">
                <DialogTitle
                      as="h3"
                      className="text-base font-medium text-gray-800 dark:text-dark-100"
                    >
                  {step === "info"
                    ? "Breed Details"
                    : step === "form"
                    ? "Your Details"
                    : "Success!"}
                </DialogTitle>
                <Button onClick={handleClose} variant="flat" isIcon>
                  <XMarkIcon className="w-5 h-5" />
                </Button>
              </div>

              {/* ===================== STEP CONTENT ===================== */}
              {step === "info" && (
                <div className="space-y-4">
                  {BreedInfo({ cat, metric, changeUnit })}
                  <div className="flex flex-col overflow-y-auto px-4 sm:px-5">
                    <p>{cat.description}</p>
                    <div className="mt-4 space-y-5"></div>
                    <div className="space-x-3 text-center mb-3">
                      <Button
                        onClick={() => setStep("form")}
                        color="primary"
                        ref={saveRef}
                        className="min-w-[7rem] rounded-full"
                      >
                        Adopt
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {step === "form" && (
                <div className="px-4 py-2 space-y-4">
                  <Input
                    label="Your Name"
                    value={adopterName}
                    onChange={(e) => setAdopterName(e.target.value)}
                  />
                  <Input
                    label="Cat’s Name"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                  />
                  <div className="flex justify-between mt-6 mb-3">
                    <Button
                      variant="flat"
                      onClick={() => setStep("info")}
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleConfirm}
                      color="primary"
                      ref={saveRef}
                      disabled={!adopterName || !petName}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              )}

              {step === "success" && (
                <div className="space-y-4 text-center mt-6 px-4">
                  <p>🎉 Thank you, {adopterName}! 🎉</p>
                  <p>
                    You have successfully adopted <strong>{petName}</strong>. We hope to see you at our shelter soon!
                  </p>
                  <Button onClick={handleClose} className="mt-4 mb-3">
                    Close
                  </Button>
                </div>
              )}
              {/* ======================================================== */}
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}
