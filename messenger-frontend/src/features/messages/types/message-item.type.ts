interface FullMessageItem {
  id: string;
  content: string;
  createdAt: string;
  isOwnMessage: boolean;
  user: {
    id: string;
    name: string;
  };
  parent: {
    content: string;
  };
}

export default FullMessageItem;
