## Overview

It's date picker component based on https://github.com/eternicode/bootstrap-datepicker 
Currently it supports only YYYY-MM-DD date format and Polish language.

It generates input-group with calendar button that automatically reads data from context and atomatically saves it after change using timestamp format +(new Date()).

## Installation for Meteor

```shell
meteor add jaaaco:editable-datepicker
```

## Usage

```html
{{>DatePicker collection='CollectionName' _id=_id field='date'}}
```

