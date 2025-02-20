import { getIcon } from "@/config/icons";
type CardProps = {
  id: string | number;
  backdrop: string;
  title: string;
  type: string;
  character?: string;
};

export default function Card({
  id,
  backdrop,
  title,
  type,
  character,
}: CardProps) {
  return (
    <div
      className="card bg-base-100 min-w-52 max-w-80  md:min-w-60 lg:min-w-80 shadow-xl overflow-hidden group"
      data-id={id}
    >
      <figure className="relative">
        <img
          src={`http://image.tmdb.org/t/p/original/${backdrop}`}
          alt="Shoes"
          className="w-full min-h-60  max-h-72"
        />
      </figure>

      {/* Card Body (Hidden Initially) */}
      <div className="card-body flex flex-row justify-between absolute bottom-0 left-0 w-full h-28 bg-blend-lighten bg-glass opacity-85 transition-all duration-500 translate-y-full group-hover:translate-y-0">
        <div className="flex flex-col">
          <h4 className="card-title text-black flex-1">{title}</h4>
          {type === "Actor" && <p className="text-gray">{character}</p>}
        </div>
        <div
          id="movie-id"
          className=" flex flex-row  justify-around "
          data-id={id}
        >
          {type !== "Actor" && (
            <div className="tooltip tooltip-top" data-tip="More Info">
              <button className="btn btn-sm btn-circle bg-gray mr-2">
                <img src={getIcon("More")} alt="" />
              </button>
            </div>
          )}
          <div className="tooltip tooltip-top" data-tip="Add to favourites">
            <button className="btn btn-sm btn-circle bg-gray mr-2">
              <img src={getIcon("Favourites")} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
