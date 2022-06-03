import React from "react";
import { Card } from "@mui/material";

function LikedSongs({ likedSongs }) {
  return (
    <div>
      <Card>
        {likedSongs.map((song) => {
          return (
            <>
              <h3>
                {song.track.name} - {song.track.artists[0].name}
              </h3>
            </>
          );
        })}
      </Card>
    </div>
  );
}

export default LikedSongs;
