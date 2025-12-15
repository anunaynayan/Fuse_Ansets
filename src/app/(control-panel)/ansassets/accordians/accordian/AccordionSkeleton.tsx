import { Box, Skeleton } from "@mui/material";

export default function AccordionSkeleton() {
  return (
    <Box maxWidth={600} mx="auto" mt={4}>
      {[1, 2, 3].map((n) => (
        <Skeleton key={n} height={90} sx={{ mb: 2, borderRadius: 2 }} />
      ))}
    </Box>
  );
}
