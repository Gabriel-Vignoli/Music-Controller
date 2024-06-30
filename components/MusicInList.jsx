import AdicionarIcon from "./Icons/AdicionarIcon";
import AlbumVazioIcon from "./Icons/AlbumVazioIcon";
import ExcluirIcon from "./Icons/ExcluirIcon";

export default function MusicInList({music}) {
    return (
        <div className="m-5 p-2 flex flex-row border border-gray-500 w-full gap-2">
        <AlbumVazioIcon></AlbumVazioIcon>
        <div className="flex justify-between w-full">
            <div>
                <h1 className="text-white">Name</h1>
                <h2 className="text-white">{music}</h2>
            </div>
            <div className="flex flex-row justify-center gap-5 h-full">
                <AdicionarIcon></AdicionarIcon>
                <ExcluirIcon></ExcluirIcon>
            </div>
        </div>
        </div>
    )
}