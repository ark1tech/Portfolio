import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate={true} />;

export default function Masonry() {
  return (
    <Container my="md">
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}