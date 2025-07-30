export type graphicTypes = {
  isOpen: string | null | boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export type ScrollsProps = {
  scrollLeft: () => void;
  scrollRight: () => void;
  children: React.ReactNode;
};

export type Movie = {
  src: string;
  rating: string;
};
