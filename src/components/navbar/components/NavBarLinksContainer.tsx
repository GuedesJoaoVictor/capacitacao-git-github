interface NavBarItensContainerProps {
  children: React.ReactNode;
}

export default function NavBarItensContainer({
  children,
}: NavBarItensContainerProps) {
  return (
    <ul className="ml-auto flex items-center justify-center w-full">
      {children}
    </ul>
  );
}
