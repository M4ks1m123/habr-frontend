
export default function FolderCard({ folder, stateFunc }) {
    return (
        <div onClick={() => stateFunc(folder)} className="flex w-full justify-normal ">
            <div className="py-3 pe-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                </svg>
            </div>
            <div className="flex w-full justify-between items-center border-b-2 py-3">
                <div>
                    <h1>{folder.title}</h1>
                    <h1 className="text-sm text-slate-500">{folder.creationDate}</h1>
                </div>
            </div>
        </div>
    )
}