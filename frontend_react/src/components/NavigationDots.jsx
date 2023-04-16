import { Tooltip as ReactTooltip } from "react-tooltip";
import { menuIcons } from "../constants/menu";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {menuIcons.map((item) => (
      <a
        href={`#${item.key}`}
        key={item.key}
        className="app__navigation-dot"
        style={active === item.key ? { backgroundColor: "#313BAC" } : {}}
        data-tooltip-id={item.name}
      >
        <item.icons className="app__navigation-dot_icon" />
        <ReactTooltip
          id={item.name}
          place='left'
          className="menu-tooltip"
          content={item.name}
        />
      </a>
    ))}
  </div>
);

export default NavigationDots;