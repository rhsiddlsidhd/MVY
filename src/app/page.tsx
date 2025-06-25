import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import OutlineText from "./components/atoms/OutlineText";
import Text from "./components/atoms/Text";

export default function Home() {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <Button>Primary</Button>
      <Text className="text-amber-700">헤더</Text>
      <Text className="text-[#E2DE00] font-bold">텍스트</Text>
      <OutlineText>아웃라인</OutlineText>
      <Input />
    </div>
  );
}
