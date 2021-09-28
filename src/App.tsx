import { Colors } from './shared/enums/colors.enum';

import ButtonCircle from './shared/components/ButtonCircle';

export default function App() {
  return (
    <div>
      Hello <ButtonCircle title="TEST" color={Colors.LIGHT_ORANGE} />
    </div>
  );
}
