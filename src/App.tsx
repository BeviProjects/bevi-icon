import BvIcon from "./BvIcon";
import { v2_2 } from "./data/v2.2";

const App = () => {
	return (
		<>
			<section>
				<h1>Welcome to Bevi icon</h1>
				<BvIcon name="categorySearch" variant="duo" width={64} />
				<BvIcon name="documentMoney" variant="dark" />
			</section>
			<section>
				{v2_2.map((item) => (
					<BvIcon key={item.id} name={item.displayName} />
				))}
			</section>
		</>
	);
};

export default App;
