interface InfoField {
    firstField: string,
    secondField: string
}


export default function InfoField({firstField, secondField}: InfoField) {
    return (
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dddee4] py-5">
            <p className="text-[#676c83] text-sm font-normal leading-normal">{firstField}</p>
            <p className="text-primary text-sm font-normal leading-normal">{secondField}</p>
        </div>
    )
}