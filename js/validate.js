const selector = document.querySelector("input[type='tel']");
const im = new Inputmask('+7 (999)-999-99-99');
const validation = new window.JustValidate('#contacts-form');
im.mask(selector);


  validation
  .addField('#name', [
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком много символов'
    },
{
    rule: 'customRegexp',
    value: /[а-я]/gi,
    errorMessage: 'Недопустимый формат'
},

{
  rule: 'required',
  value: true,
  errorMessage: 'Имя обязательно для ввода'
},
  ])
      .addField('#tel', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели телефон',
        },
        {
          validator: (name, value) => {
            let phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          },
          errorMessage: 'Недостаточное количество знаков',
        },

      ])
