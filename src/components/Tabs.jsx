export default function Tabs({ children, buttons, BtnContainer }) {
  //or const BtnContainer = btnContainer; -> for dynamically change buttons wrapper element. ex-> menu.
  // Caps -> to use as a custom component.
  // or {BtnContainer = "menu"} in destructuring for default prop value.
  return (
    <>
      <BtnContainer>{buttons}</BtnContainer>
      {children}
    </>
  );
}
