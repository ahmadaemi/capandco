import { Link } from 'preact-router/match';
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const menuList = [
	{ listName: 'Html', listUrl: '/tech-html', listProgress: '20', listColor: '#0db6fa' },
	{ listName: 'CSS', listUrl: '/tech-css', listProgress: '30', listColor: '#ff0146' },
	{ listName: 'JavaScript', listUrl: '/tech-javascript', listProgress: '40', listColor: '#fbc444' },
	{ listName: 'ReactJS', listUrl: '/tech-reactjs', listProgress: '50', listColor: '#fb9052' },
	{ listName: 'Android', listUrl: '/tech-android', listProgress: '60', listColor: '#f85465' },
	{ listName: 'IOS', listUrl: '/tech-ios', listProgress: '90', listColor: '#1cd593' }
];

const SkillsProgress = () => (
	<nav id="skills-progress-nav" className="skills-progress-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}>
						<CircularProgressbarWithChildren
							strokeWidth={6}
							value={menuItem.listProgress}
							styles={{ path:{ stroke: `${menuItem.listColor}`} }}
						>
							<strong style={`color:${menuItem.listColor}`}>{menuItem.listName}</strong>
							<span style={`color:${menuItem.listColor}`}>{`${menuItem.listProgress}%`}</span>
						</CircularProgressbarWithChildren>
					</li>
				))
			}
		</ul>
	</nav>
);

const SkillsNav = () => (
	<nav id="skills-nav" className="skills-nav">
		<ul>
			{
				menuList.map(menuItem => (
					<li key={menuItem.listName}><Link exact activeClassName="active" href={menuItem.listUrl}>{menuItem.listName}</Link></li>
				))
			}
		</ul>
	</nav>
);
export default SkillsNav
export {SkillsProgress}