import { styled } from "@mui/material";
import SimpleEditor from "../components/tiptap/main";

const StyledWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundColor: "#ffffff",
  color: "#000000",

  overflow: "hidden",
}));

function Editor({ ...props }) {
  return (
    <StyledWrapper {...props} tabIndex={0}>
      <SimpleEditor />
    </StyledWrapper>
  );
}

export default Editor;
