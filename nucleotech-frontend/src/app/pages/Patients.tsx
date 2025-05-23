"use client"

import { useState } from "react";

export default function Patients() {
    const [searchQuery, setSearchQuery] = useState("")


    return (
         <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[var(--text-dark)] tracking-light text-[32px] font-bold leading-tight min-w-72">Patients</p>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal"
              >
                <span className="truncate">Add Patient</span>
              </button>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[var(--text-gray)] flex border-none bg-[var(--bg-2)] items-center justify-center pl-4 rounded-l-xl border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search patients"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[var(--text-dark)] focus:outline-0 focus:ring-0 border-none bg-[var(--bg-2)] focus:border-none h-full placeholder:text-[var(--text-gray)] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </div>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#dcdee4] bg-white">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-white">
                      <th className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 px-4 py-3 text-left text-[var(--text-dark)] w-[400px] text-sm font-medium leading-normal">
                        Patient Name
                      </th>
                      <th className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 px-4 py-3 text-left text-[var(--text-dark)] w-[400px] text-sm font-medium leading-normal">Species</th>
                      <th className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 px-4 py-3 text-left text-[var(--text-dark)] w-[400px] text-sm font-medium leading-normal">Breed</th>
                      <th className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 px-4 py-3 text-left text-[var(--text-dark)] w-[400px] text-sm font-medium leading-normal">Age</th>
                      <th className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 px-4 py-3 text-left text-[var(--text-dark)] w-60 text-sm font-medium leading-normal">Status</th>
                      <th className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 px-4 py-3 text-left text-[var(--text-dark)] w-[400px] text-sm font-medium leading-normal">
                        Last Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Buddy</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Dog</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        Golden Retriever
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">5 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Healthy</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-15
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Whiskers</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Cat</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Siamese</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">3 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Under Observation</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-14
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Max</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Dog</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Labrador</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">8 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Critical</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-13
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Luna</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Cat</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Persian</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">2 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Healthy</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-12
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Rocky</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Dog</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Bulldog</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">6 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Under Observation</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-11
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Cleo</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Cat</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        Maine Coon
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">4 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Healthy</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-10
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Charlie</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Dog</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Poodle</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">7 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Critical</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-09
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Bella</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Cat</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Ragdoll</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">1 year</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Healthy</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-08
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Cooper</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Dog</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Beagle</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">9 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Under Observation</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-07
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#dcdee4]">
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-120 h-[72px] px-4 py-2 w-[400px] text-[var(--text-dark)] text-sm font-normal leading-normal">Daisy</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-240 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Cat</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-360 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">Sphynx</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-480 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">5 years</td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-600 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[var(--bg-2)] text-[var(--text-dark)] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">Healthy</span>
                        </button>
                      </td>
                      <td className="table-8f7f46aa-a4af-4e47-ba28-c23b0f9f5aab-column-720 h-[72px] px-4 py-2 w-[400px] text-[var(--text-gray)] text-sm font-normal leading-normal">
                        2023-11-06
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