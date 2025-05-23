import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d0f1c]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">VetSight</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            to="/dashboard"
            className="text-[#0d0f1c] text-sm font-medium leading-normal hover:underline"
          >
            Dashboard
          </Link>
          <Link
            to="/patients"
            className="text-[#0d0f1c] text-sm font-medium leading-normal hover:underline"
          >
            Patients
          </Link>
          <Link
            to="/info"
            className="text-[#0d0f1c] text-sm font-medium leading-normal hover:underline"
          >
            Models
          </Link>
          <Link
            to="/settings"
            className="text-[#0d0f1c] text-sm font-medium leading-normal hover:underline"
          >
            Settings
          </Link>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
        >
          <img
            className="rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCriAOZm0WD8BVPJNgg6EPpTxVFHRmyRre0h2UnETkqoMvM1IzzhRlwqRip_dsILvbKZLAvl3ShNjcQ1dIzjAFwQg6dBM-0pIcP_LT9AL5o5egYDuvuMSW6BzGV6gYNiweK_gwb3Ns8Jkx9NgaYtJUmp307eo82gqVBJke7XNLvO_ZgghgAGjr3LI0PmBO6VFk3iCvAejZz827nMK6sSeZBYCuDj0KBhpCPi-tVPNGrTZNrwMzEpvvZiczeY8fNO6XEmFSVe3BiAcM"
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
}
