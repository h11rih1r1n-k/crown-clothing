import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewType } from "@types";
import "./collection-preview.styles.scss";
import { RouteComponentProps } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName, match, history }: CollectionPreviewType & RouteComponentProps) => {
  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
