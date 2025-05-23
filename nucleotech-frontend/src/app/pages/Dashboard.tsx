

export default function Dashboard() {
    return (
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight">Dashboard</p>
                        <p className="text-[#47569e] text-sm font-normal leading-normal">View predictions for your patients</p>
                    </div>
                </div>
                <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Predictions</h2>
                <div className="px-4 py-3 @container">
                    <div className="flex overflow-hidden rounded-lg border border-[#ced2e9] bg-[#f8f9fc]">
                        <table className="flex-1">
                            <thead>
                                <tr className="bg-[#f8f9fc]">
                                    <th className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-120 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">Patient</th>
                                    <th className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-240 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                                        Alta
                                    </th>
                                    <th className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-360 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                                        Morbidade
                                    </th>
                                    <th className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-480 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">Mortalidade</th>
                                    <th className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-600 px-4 py-3 text-left text-[#0d0f1c] w-[400px] text-sm font-medium leading-normal">
                                        Euthanasia
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-t-[#ced2e9]">
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                                        Patient A
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-240 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]" ></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">85</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-360 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]" ></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">15</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-480 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]" ></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">5</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-600 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]" ></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">2</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-t border-t-[#ced2e9]">
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                                        Patient B
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-240 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">92</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-360 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">8</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-480 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">3</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-600 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">1</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-t border-t-[#ced2e9]">
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                                        Patient C
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-240 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">78</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-360 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">22</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-480 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">10</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-600 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">3</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-t border-t-[#ced2e9]">
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                                        Patient D
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-240 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">95</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-360 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">5</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-480 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">2</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-600 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">1</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-t border-t-[#ced2e9]">
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#0d0f1c] text-sm font-normal leading-normal">
                                        Patient E
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-240 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">88</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-360 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">12</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-480 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">4</p>
                                        </div>
                                    </td>
                                    <td className="table-d3245843-9348-49f6-af73-b0fbe8ab1c7c-column-600 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                        <div className="flex items-center gap-3">
                                            <div className="w-[88px] overflow-hidden rounded-sm bg-[#ced2e9]"><div className="h-1 rounded-full bg-[#607afb]"></div></div>
                                            <p className="text-[#0d0f1c] text-sm font-medium leading-normal">2</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}