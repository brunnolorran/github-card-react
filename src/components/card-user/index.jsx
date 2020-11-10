import { Card } from "antd";
const { Meta } = Card;

const CardUser = ({ image, name, location, site }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={`Foto de ${name}`} src={image} />}
    >
      <Meta title={name} description={location} />
      <a href={site}>GitHub</a>
    </Card>
  );
};

export default CardUser;
