import { CSSProperties, forwardRef, useImperativeHandle, useState } from "react";

import { ThemeSpacingOption } from "@/styles/theme/spacing";

import { BlurredBackground } from "./Modal.styles";

interface Props {
  onClickAway?: () => void;
  style?: CSSProperties;
  padding?: ThemeSpacingOption;
  gap?: ThemeSpacingOption;
  children: React.ReactNode;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, Props>(({ children, onClickAway, style, padding, gap }, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false)
  }), []);

  if (!open) return <></>;

  return (
    <BlurredBackground onClick={() => { setOpen(false); onClickAway && onClickAway() }}>
      <div style={{ ...style, padding, gap, margin: "16px" }} onClick={event => event.stopPropagation()}>
        {children}
      </div>
    </BlurredBackground>
  )
})

export default Modal;
