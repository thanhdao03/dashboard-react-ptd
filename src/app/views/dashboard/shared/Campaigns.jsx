import { Small } from "app/components/Typography";
import { MatxProgressBar, SimpleCard } from "app/components";

export default function Campaigns() {
  return (
    <div>
      <SimpleCard title="Campaigns">
        <Small color="text.secondary">Today</Small>
        <MatxProgressBar value={102} color="primary" text="Google (102k)" />
        <MatxProgressBar value={40} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={80} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={90} color="primary" text="Google (90)" />
        <MatxProgressBar value={10} color="secondary" text="Twitter (10k)" />
        <MatxProgressBar value={40} color="primary" text="Tensor (40k)" />
      </SimpleCard>
    </div>
  );
}
