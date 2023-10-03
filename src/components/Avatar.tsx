// import { useMemo } from "react";
// import { createAvatar } from "@dicebear/core";
// import { lorelei } from "@dicebear/collection";
import ShapeCircle from "./ShapeCircle";

type AvatarProps = {
  name: string;
  overlap?: boolean;
};

const Avatar = ({ name, overlap }: AvatarProps) => {
  // const avatar = useMemo(() => {
  //   return createAvatar(lorelei, {
  //     size: 46,
  //     // ... other options
  //   }).toDataUriSync();
  // }, []);

  return (
    <ShapeCircle
      type="image"
      overlap={overlap}
      size="md"
      source={`https://api.dicebear.com/7.x/adventurer/svg?seed=${name}&backgroundColor=e0e2db`}
      alt="Avatar"
    />
  );
};

export default Avatar;

