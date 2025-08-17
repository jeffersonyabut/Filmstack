export type graphicTypes = {
  isOpen: string | null | boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export interface MjsonType {
  path: string;
  rating: string;
}

export interface MovieJson {
  imageData: MjsonType[];
  handleContextMenu?: (e: React.MouseEvent) => void;
}

export type ScrollsProps = {
  scrollLeft: () => void;
  scrollRight: () => void;
  children: React.ReactNode;
};

export type Movie = {
  index?: number;
  src: string;
  rating: string;
  handleContextMenu?: (e: React.MouseEvent) => void;
  containerClass?: string | undefined;
};

export type ImageLoaderProps = {
  src?: string;
  alt?: string;
  className?: string;
  containerClass: string | undefined;
  onClick?: () => void;
  onContextMenu?: (e: React.MouseEvent) => void;
};
