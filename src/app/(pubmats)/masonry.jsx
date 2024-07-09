import { Grid, Skeleton, Container } from "@mantine/core";

const child = <Skeleton height={140} radius="md" animate={true} />;

export default function Masonry() {
  return (
    <Container my="md">
      <p className="text-xs text-[#313131] w-full text-justify font-['JetBrains_Mono'] text-pretty mb-[1rem]">
        &#47;&#47; Coming soon!
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
