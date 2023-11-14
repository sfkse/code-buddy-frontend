import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import config from "../config/config.json";
import Button from "./Button";

type CopyButtonProps = {
  urlPath: string;
  fullWidth: boolean;
};
const CopyButton = ({ urlPath, fullWidth = false }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  return (
    <CopyToClipboard
      text={`${config.APP_BASE_URL}${urlPath}`}
      onCopy={() => setTimeout(() => setCopied(false), 3000)}
    >
      <Button
        onClick={() => setCopied(true)}
        title={copied ? "Link copied!" : "Invite friends"}
        fullWidth={fullWidth}
        customStyle={{ padding: "0.5rem", marginTop: "1rem" }}
      />
    </CopyToClipboard>
  );
};

export default CopyButton;

