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

export type ImageLoaderProps = {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  onContextMenu?: (e: React.MouseEvent) => void;
};
