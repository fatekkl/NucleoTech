import InfoField from "../Components/InfoField";

export default function Info() {
    return (
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[var(--text-dark)] tracking-light text-[32px] font-bold leading-tight">Patient Details</p>
                        <p className="text-[#676c83] text-sm font-normal leading-normal">View and manage patient information</p>
                    </div>
                </div>
                <h2 className="text-[var(--text-dark)] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Patient Information</h2>
                <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
                    <InfoField firstField={"Patient Name"} secondField={"Buddy"} />
                    <InfoField firstField={"Species"} secondField={"Dog"} />
                    <InfoField firstField={"Breed"} secondField={"Labrador Retriever"} />
                    <InfoField firstField={"Age"} secondField={"5 years"} />
                    <InfoField firstField={"Sex"} secondField={"Male"} />
                    <InfoField firstField={"Weight"} secondField={"65 lbs"} />
                    <InfoField firstField={"Risk"} secondField={"Green"} />
                </div>
                <h2 className="text-[var(--text-dark)] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Case Description</h2>
                <p className="text-[var(--text-dark)] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    Buddy, a 5-year-old Labrador Retriever, presented with symptoms of lethargy, decreased appetite, and vomiting. Initial examination revealed dehydration and abdominal
                    discomfort. Further diagnostics are underway to determine the underlying cause of these symptoms.
                </p>
            </div>
        </div>
    )
}