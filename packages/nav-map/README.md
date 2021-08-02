# nav-map

## Description
This component will change the url on country select to add a query param such as ?country=CA using arcGIS js and UN clear map service.  The Param name such as country is configurable via the component options.
When the component loads and the query exists (?country=CA), the map will zoom to the country and highlight the country area.  Must use UN clear map mentioned below.  The goal is to replace this component with https://www.cbd.int/countries/ && https://www.cbd.int/countries/?country=CA.  ALso to sit here: https://www.cbd.int/action-agenda/ && https://www.cbd.int/action-agenda/contributions/?filter=ca contributions/ so a user can click the map to filter by country.

## Usful Refrences:
 - https://developers.arcgis.com/javascript/latest/sample-code/effect-blur-shadow/ - example to click , zoom and highlight country
 - https://geoportal.un.org/arcgis/home/item.html?id=541557fd0d4d42efb24449be614e6887 un clear map - served form arcGIS pro system from UNGIS
 - https://developers.arcgis.com/javascript/latest/ js lib




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## NOTES

- ArcGis MapView as reactive object in vier corrupt arc.

- 