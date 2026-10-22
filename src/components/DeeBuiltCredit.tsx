import { Typography } from "antd";

const { Link, Text } = Typography;

/** The "Made by DeeBuilt" credit in the footer. */
export function DeeBuiltCredit() {
  return (
    <Text type="secondary" className="bd-text-fine">
      Made by{" "}
      <Link href="https://deebuilt.co" target="_blank" rel="noopener noreferrer" className="bd-text-fine">
        DeeBuilt
      </Link>
    </Text>
  );
}
