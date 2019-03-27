with(this) {
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [
    _c('div', [_v("a vue to-do-list :")]),
    _v(" "), 
    _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (item),
      expression: "item"
    }],
    attrs: {
      "type": "text",
      "placeholder": "to do list"
    },
    domProps: {
      "value": (item)
    },
    on: {
      "keyup": function ($event) {
        if (!('button' in $event) && _k($event.keyCode, "enter", 13, $event.key)) return null;
        add2List(item)
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        item = $event.target.value
      }
    }
  }),
   _v(" "), 
   _c('ul', _l((list), function (item) {
    return _c('li', {
      domProps: {
        "textContent": _s(item)
      }
    })
  }))])
}
