import './projectsCard.css';
import Details from './Details';

export default function MediaCard(props) {
  return (
    <div class="wrapper">
      <div class="clash-card barbarian">
        <div class="clash-card__image clash-card__image--barbarian" style = {{background: "no-repeat url(" + props.image + ")",backgroundSize:"100% 100%"}}>
        </div>
        <div class="clash-card__level clash-card__level--barbarian">Project</div>
        <div class="clash-card__unit-name">{props.name}</div>
        <Details country = {props.country} startDate = {props.startDate} endDate = {props.endDate} link1 = {props.link1} link2 = {props.link2} />
      </div>
    </div>
  );
}
