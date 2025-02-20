import React from "react";
import Row from "@components/UI/Row/Row";
import Card from "@components/UI/Card/Card";
import { MovieCredits, Person } from "@/utils/types";

export default function MovieCast({ cast }: Pick<MovieCredits, "cast">) {
  console.log(cast.slice(0, 10));
  return (
    <div className="">
      <Row title="Cast" to="" type="Cast">
        {cast.slice(0, 10).map((pp) => {
          return (
            <Card
              title={pp.name}
              backdrop={pp.profile_path}
              id={pp.cast_id}
              type="Actor"
              character={pp.character}
              key={pp.cast_id}
            />
          );
        })}
      </Row>
    </div>
  );
}
