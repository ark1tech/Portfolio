import { Grid, Skeleton, Container } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={true} />;

export default function Masonry() {
  return (
    <Container my="md">
      <p className="text-xs text-[#505050] w-full text-left text-pretty mb-[1rem]">
        Coming soon! For now, you may look at them{" "}
        <a
          className="text-xs text-[#505050] underline-offset-2 underline hover:text-[#a8a8a8] transition-all text-balance"
          href="https://drive.google.com/drive/folders/1FHIpF2-88C5FVrGwyNyKPFIBATfrisjZ"
          target="_blank">
          here
        </a>
        .
      </p>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}
