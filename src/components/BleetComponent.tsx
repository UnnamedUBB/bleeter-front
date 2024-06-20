
import './BleetComponent.css'; // Importuj plik CSS

interface Author {
  id: string;
  userName: string;
}

export interface Bleet {
  id: string;
  content: string;
  dateCreatedUtc: string;
  author: Author;
  comments?: number | null;
  likes?: number | null;
  createdBy?: string | null;
  dataDeletedUtc?: string | null;
  dateModifiedUtc?: string | null;
  deletedBy?: string | null;
  modifiedBy?: string | null;
}

interface BleetProps {
  bleet: Bleet;
}

const BleetComponent: React.FC<BleetProps> = ({ bleet }) => {
  return (
    <div className="bleet-card">
      <p className="bleet-content">{bleet.content}</p>
      <div className="bleet-info">
        <p className="bleet-date">Created at: {new Date(bleet.dateCreatedUtc).toLocaleString()}</p>
        <p className="bleet-author">Author: {bleet.author.userName}</p>
      </div>
    </div>
  );
};

export default BleetComponent;
