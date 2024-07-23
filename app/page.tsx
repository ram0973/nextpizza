import Image from "next/image";
import {Header} from "@/components/shared/header";
import {Container, Title, Categories, SortPopup} from "@/components/shared";
import {TopBar} from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className={"mt-10"}>
        <Title text={"Все пиццы"} size={"lg"} className={"font-extrabold"}/>
        <TopBar/>
        <div className={"h-[3000px]"}/>
      </Container>
    </>
  );
}
