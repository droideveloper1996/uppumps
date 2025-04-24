// lib/fontawesome.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faHouseChimney);
