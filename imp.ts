import alertCard from "./Card/Card.js";
import { AlertCard } from "./Constant/IDatatype.js";

alertCard({
    cardType: AlertCard.cardType.success,
    message: "this is a success message"
});